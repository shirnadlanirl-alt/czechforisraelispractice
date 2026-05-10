/**
 * app-state.js
 * שכבת מצב מרכזית לאפליקציית Czech Academy
 * שומרת ב-localStorage וחשופה כ-window.CzechAppState
 */

(function () {
  const STORAGE_KEY = 'czechAppState_v1';

  const ACHIEVEMENTS_DEF = [
    { id: 'first_lesson',       label: 'שיעור ראשון',         desc: 'סיימת את השיעור הראשון שלך',          icon: '🎉', check: s => Object.keys(s.completedLessons).length >= 1 },
    { id: 'three_lessons',      label: 'שלושה שיעורים',       desc: 'סיימת 3 שיעורים',                      icon: '📚', check: s => Object.keys(s.completedLessons).length >= 3 },
    { id: 'five_lessons',       label: 'חמישה שיעורים',       desc: 'סיימת 5 שיעורים',                      icon: '🏅', check: s => Object.keys(s.completedLessons).length >= 5 },
    { id: 'all_lessons',        label: 'קורס מושלם',          desc: 'סיימת את כל השיעורים בקורס',           icon: '🏆', check: s => Object.keys(s.completedLessons).length >= 12 },
    { id: 'perfect_lesson',     label: 'שיעור מושלם',         desc: 'סיימת שיעור עם 100% דיוק',             icon: '⭐', check: s => Object.values(s.lessonStats).some(l => l.accuracy === 100) },
    { id: 'streak_3',           label: '3 ימים רצופים',       desc: '3 ימי לימוד ברצף',                     icon: '🔥', check: s => s.dailyStreak >= 3 },
    { id: 'streak_7',           label: 'שבוע שלם',            desc: '7 ימי לימוד ברצף',                     icon: '🔥🔥', check: s => s.dailyStreak >= 7 },
    { id: '50_correct',         label: '50 תשובות נכונות',    desc: 'ענית נכון על 50 שאלות',                icon: '✅', check: s => s.totalCorrect >= 50 },
    { id: '100_correct',        label: '100 תשובות נכונות',   desc: 'ענית נכון על 100 שאלות',               icon: '💯', check: s => s.totalCorrect >= 100 },
    { id: 'first_review',       label: 'חזרה ראשונה',         desc: 'השלמת סשן חזרה ראשון',                 icon: '🔄', check: s => s.totalReviewSessions >= 1 },
    { id: '5_hard_improved',    label: 'שיפור מילים קשות',    desc: 'שיפרת 5 מילים קשות',                   icon: '💪', check: s => s.hardWordsImproved >= 5 },
    { id: 'xp_100',             label: '100 XP',               desc: 'צברת 100 נקודות ניסיון',               icon: '⚡', check: s => s.totalXp >= 100 },
  ];

  function defaultState() {
    return {
      completedLessons: {},
      lessonStats: {},
      questionStats: {},
      hardWords: {},
      achievements: {},
      sessions: [],
      dailyStreak: 0,
      lastPlayedDate: null,
      lastPlayedLesson: null,
      totalCorrect: 0,
      totalWrong: 0,
      totalXp: 0,
      totalReviewSessions: 0,
      hardWordsImproved: 0,
    };
  }

  function getState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return migrateOldState(defaultState());
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {
      return defaultState();
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* storage full */ }
  }

  // Migration משמירה הישנה של lesson-X_completed
  function migrateOldState(state) {
    let migrated = false;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.endsWith('_completed')) {
        const lessonId = key.replace('_completed', '');
        state.completedLessons[lessonId] = true;
        migrated = true;
      }
    }
    if (migrated) saveState(state);
    return state;
  }

  function getQuestionId(lessonId, questionIndex) {
    return `${lessonId}_q${questionIndex}`;
  }

  function recordAnswer({ lessonId, questionIndex, prompt, answer, type, correct }) {
    const state = getState();
    const qId = getQuestionId(lessonId, questionIndex);

    if (!state.questionStats[qId]) {
      state.questionStats[qId] = {
        lessonId, prompt, answer, type,
        correct: 0, wrong: 0, lastSeen: null
      };
    }

    const qs = state.questionStats[qId];
    if (correct) {
      qs.correct++;
      state.totalCorrect++;
      // אם זה שיפור של מילה קשה
      if (state.hardWords[qId] && state.hardWords[qId].wrong > 1) {
        state.hardWordsImproved++;
      }
    } else {
      qs.wrong++;
      state.totalWrong++;
      // סמן כמילה קשה אם טעה יותר מפעם אחת
      if (qs.wrong >= 2) {
        state.hardWords[qId] = {
          id: qId,
          lessonId,
          word: prompt,
          translation: answer,
          type,
          wrong: qs.wrong,
          correct: qs.correct
        };
      }
    }
    qs.lastSeen = new Date().toISOString();

    checkAndUpdateStreak(state);
    checkAchievements(state);
    saveState(state);
    return state;
  }

  function recordLessonComplete({ lessonId, correct, wrong, durationSec }) {
    const state = getState();
    const total = correct + wrong;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const xpEarned = Math.round(correct * 5 + (accuracy === 100 ? 20 : 0));

    state.completedLessons[lessonId] = true;
    state.lessonStats[lessonId] = {
      accuracy,
      correct,
      wrong,
      attempts: (state.lessonStats[lessonId]?.attempts || 0) + 1,
      durationSec,
      completedAt: new Date().toISOString()
    };

    state.sessions.push({
      lessonId,
      date: new Date().toISOString(),
      accuracy,
      totalQuestions: total,
      correct,
      wrong,
      durationSec,
      xpEarned
    });

    state.totalXp += xpEarned;
    state.lastPlayedLesson = lessonId;

    // שמור גם בפורמט הישן לתאימות לאחור
    localStorage.setItem(`${lessonId}_completed`, 'true');

    checkAndUpdateStreak(state);
    checkAchievements(state);
    saveState(state);
    return { accuracy, xpEarned };
  }

  function checkAndUpdateStreak(state) {
    const today = new Date().toDateString();
    if (state.lastPlayedDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.lastPlayedDate === yesterday) {
      state.dailyStreak++;
    } else if (state.lastPlayedDate !== today) {
      state.dailyStreak = 1;
    }
    state.lastPlayedDate = today;
  }

  function checkAchievements(state) {
    ACHIEVEMENTS_DEF.forEach(a => {
      if (!state.achievements[a.id] && a.check(state)) {
        state.achievements[a.id] = {
          unlockedAt: new Date().toISOString()
        };
      }
    });
  }

  function getHardWords() {
    const state = getState();
    return Object.values(state.hardWords)
      .filter(w => w.wrong > w.correct)
      .sort((a, b) => b.wrong - a.wrong);
  }

  function getReviewQueue() {
    const state = getState();
    const threeDaysAgo = Date.now() - (3 * 24 * 60 * 60 * 1000);
    return Object.values(state.questionStats)
      .filter(q => {
        const total = q.correct + q.wrong;
        if (total === 0) return false;
        const accuracy = (q.correct / total) * 100;
        const isOld = q.lastSeen && new Date(q.lastSeen).getTime() < threeDaysAgo;
        return accuracy < 70 || q.wrong > q.correct || isOld;
      })
      .sort((a, b) => {
        const accA = a.correct / (a.correct + a.wrong);
        const accB = b.correct / (b.correct + b.wrong);
        return accA - accB;
      });
  }

  function getOverview() {
    const state = getState();
    const completedCount = Object.keys(state.completedLessons).length;
    const total = state.totalCorrect + state.totalWrong;
    const accuracy = total > 0 ? Math.round((state.totalCorrect / total) * 100) : 0;
    const reviewCount = getReviewQueue().length;
    const hardCount = getHardWords().length;
    const unlockedAchievements = Object.keys(state.achievements).length;

    return {
      completedLessons: completedCount,
      totalAnswers: total,
      totalCorrect: state.totalCorrect,
      totalWrong: state.totalWrong,
      accuracy,
      dailyStreak: state.dailyStreak,
      totalXp: state.totalXp,
      reviewCount,
      hardCount,
      lastPlayedLesson: state.lastPlayedLesson,
      unlockedAchievements,
      totalAchievements: ACHIEVEMENTS_DEF.length,
    };
  }

  function getAchievements() {
    const state = getState();
    return ACHIEVEMENTS_DEF.map(a => ({
      ...a,
      unlocked: !!state.achievements[a.id],
      unlockedAt: state.achievements[a.id]?.unlockedAt || null
    }));
  }

  function getLessonBreakdown() {
    const state = getState();
    return Object.entries(state.lessonStats).map(([id, stats]) => ({
      lessonId: id,
      ...stats
    })).sort((a, b) => a.accuracy - b.accuracy);
  }

  // חשיפה גלובלית
  window.CzechAppState = {
    getState,
    saveState,
    recordAnswer,
    recordLessonComplete,
    getHardWords,
    getReviewQueue,
    getOverview,
    getAchievements,
    getLessonBreakdown,
    getQuestionId,
    ACHIEVEMENTS_DEF,
  };
})();