// Czech Academy - state management (localStorage + Firebase-ready)

// מפתח אחסון מקומי
const STORAGE_KEY = "czechAppState_v1";

// הגדרת אצ'יוומנטים (קיים אצלך, אני משאיר אותו אותו דבר)
const ACHIEVEMENTS_DEF = [
  {
    id: "firstlesson",
    label: "שיעור ראשון",
    desc: "השלמת את השיעור הראשון שלך!",
    icon: "🎉",
    check: (s) => Object.keys(s.completedLessons).length >= 1
  },
  {
    id: "threelessons",
    label: "3 שיעורים",
    desc: "השלמת 3 שיעורים.",
    icon: "📘",
    check: (s) => Object.keys(s.completedLessons).length >= 3
  },
  {
    id: "fivelessons",
    label: "5 שיעורים",
    desc: "השלמת 5 שיעורים.",
    icon: "📗",
    check: (s) => Object.keys(s.completedLessons).length >= 5
  },
  {
    id: "alllessons",
    label: "כל השיעורים!",
    desc: "השלמת את כל השיעורים בקורס.",
    icon: "🏆",
    check: (s) => Object.keys(s.completedLessons).length >= 12 // עדכני לפי מספר השיעורים שלך
  },
  {
    id: "perfectlesson",
    label: "שיעור מושלם",
    desc: "השלמת שיעור עם 100% דיוק.",
    icon: "✨",
    check: (s) => Object.values(s.lessonStats).some((l) => l.accuracy === 100)
  },
  {
    id: "streak3",
    label: "רצף 3 ימים",
    desc: "תרגלת 3 ימים ברצף.",
    icon: "🔥",
    check: (s) => s.dailyStreak >= 3
  },
  {
    id: "streak7",
    label: "רצף 7 ימים",
    desc: "תרגלת 7 ימים ברצף.",
    icon: "🔥",
    check: (s) => s.dailyStreak >= 7
  },
  {
    id: "50correct",
    label: "50 תשובות נכונות",
    desc: "ענית נכון על 50 שאלות.",
    icon: "✅",
    check: (s) => s.totalCorrect >= 50
  },
  {
    id: "100correct",
    label: "100 תשובות נכונות",
    desc: "ענית נכון על 100 שאלות.",
    icon: "✅",
    check: (s) => s.totalCorrect >= 100
  },
  {
    id: "firstreview",
    label: "חזרת פעם ראשונה",
    desc: "סיימת סשן חזרה ראשון.",
    icon: "🔁",
    check: (s) => s.totalReviewSessions >= 1
  },
  {
    id: "5hardimproved",
    label: "שיפרת 5 מילים קשות",
    desc: "שיפרת 5 מילים קשות.",
    icon: "🧠",
    check: (s) => s.hardWordsImproved >= 5
  },
  {
    id: "xp100",
    label: "100 XP",
    desc: "צברת 100 נקודות XP.",
    icon: "⭐",
    check: (s) => s.totalXp >= 100
  }
  // ... תשאירי/תוסיפי את שאר ההישגים שלך כמו בקובץ המקורי
];

// מצב ברירת מחדל
function defaultState() {
  return {
    completedLessons: {},   // { "lesson-1": true, ... }
    lessonStats: {},        // פר סט שיעור: דיוק, נסיונות וכו'
    questionStats: {},      // פר סט שאלה
    hardWords: {},          // מילים קשות
    achievements: {},       // אצ'יוומנטים שנפתחו
    sessions: [],           // היסטוריית סשנים
    dailyStreak: 0,
    lastPlayedDate: null,
    lastPlayedLesson: null,
    totalCorrect: 0,
    totalWrong: 0,
    totalXp: 0,
    totalReviewSessions: 0,
    hardWordsImproved: 0
  };
}

// קריאת state מה־localStorage (קיים אצלך, רק עטפתי)
function getState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return migrateOldState(defaultState());
    }
    return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {
    console.error("Failed to parse state, using default:", e);
    return defaultState();
  }
}

// שמירת state ל־localStorage
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}

// מיגרציה מגרסה ישנה (עם מפתחות lesson_X_completed)
function migrateOldState(state) {
  let migrated = false;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;
    if (key.endsWith("_completed")) {
      const lessonId = key.replace("_completed", "");
      state.completedLessons[lessonId] = true;
      migrated = true;
    }
  }
  if (migrated) {
    saveState(state);
  }
  return state;
}

// מזהה שאלה
function getQuestionId(lessonId, questionIndex) {
  return `${lessonId}_q${questionIndex}`;
}

// רישום תשובה
function recordAnswer(lessonId, questionIndex, prompt, answer, type, correct) {
  const state = getState();
  const qId = getQuestionId(lessonId, questionIndex);

  if (!state.questionStats[qId]) {
    state.questionStats[qId] = {
      lessonId,
      prompt,
      answer,
      type,
      correct: 0,
      wrong: 0,
      lastSeen: null
    };
  }

  const qs = state.questionStats[qId];

  if (correct) {
    qs.correct++;
    state.totalCorrect++;
    if (state.hardWords[qId]) {
      state.hardWords[qId].wrong--;
      state.hardWordsImproved++;
    }
  } else {
    qs.wrong++;
    state.totalWrong++;
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

/**
 * פונקציה חשובה: שיעור הושלם
 * כאן הוספנו חיבור ל‑Firebase (אופציונלי)
 */
async function recordLessonComplete(lessonId, correct, wrong, durationSec) {
  const state = getState();
  const total = correct + wrong;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const xpEarned = Math.round(correct * 5 + (accuracy === 100 ? 20 : 0));

  // עדכון מצב לוקלי
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

  // תמיכה לאחור – היה לך כבר
  localStorage.setItem(`${lessonId}_completed`, true);

  checkAndUpdateStreak(state);
  checkAchievements(state);
  saveState(state);

  // ---- חיבור לפיירבייס: שמירת התקדמות למשתמש (אופציונלי) ----
  // מניח שיש window.firebaseAuth ו window.firebaseDb שהוגדרו
  // בדף הראשי (index/practice) עם getAuth/getFirestore.
  try {
    if (window.firebaseAuth && window.firebaseDb) {
      const user = window.firebaseAuth.currentUser;
      if (user) {
        const { doc, setDoc } = window.firebaseDbHelpers; // נטעין מה־helpers הגלובלי
        const userProgressRef = doc(
          window.firebaseDb,
          "users",
          user.uid,
          "progress",
          "mainCourse"
        );

        // מבנה הנתונים שנשמור
        const payload = {
          completedLessons: state.completedLessons,
          lessonStats: state.lessonStats,
          dailyStreak: state.dailyStreak,
          totalCorrect: state.totalCorrect,
          totalWrong: state.totalWrong,
          totalXp: state.totalXp,
          lastPlayedLesson: state.lastPlayedLesson,
          lastPlayedDate: state.lastPlayedDate,
          updatedAt: new Date().toISOString()
        };

        await setDoc(
          userProgressRef,
          payload,
          { merge: true } // שלא נדרוס דברים אחרים
        );
      }
    }
  } catch (e) {
    console.error("Failed to sync lesson completion to Firebase:", e);
    // לא שוברים את החוויה – רק מדווחים בקונסול
  }

  return { accuracy, xpEarned };
}

// עדכון streak יומי
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

// בדיקת הישגים
function checkAchievements(state) {
  ACHIEVEMENTS_DEF.forEach((a) => {
    if (!state.achievements[a.id] && a.check(state)) {
      state.achievements[a.id] = {
        unlockedAt: new Date().toISOString()
      };
    }
  });
}

// מילים קשות
function getHardWords() {
  const state = getState();
  return Object.values(state.hardWords)
    .filter((w) => w.wrong > w.correct)
    .sort((a, b) => b.wrong - a.wrong);
}

// תור חזרות
function getReviewQueue() {
  const state = getState();
  const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000;

  return Object.values(state.questionStats)
    .filter((q) => {
      const total = q.correct + q.wrong;
      if (total === 0) return false;
      const accuracy = (q.correct / total) * 100;
      const isOld =
        q.lastSeen && new Date(q.lastSeen).getTime() < threeDaysAgo;
      return accuracy < 70 || (q.wrong > q.correct && isOld);
    })
    .sort((a, b) => {
      const accA = a.correct / (a.correct + a.wrong || 1);
      const accB = b.correct / (b.correct + b.wrong || 1);
      return accA - accB;
    });
}

// Overview למסך הראשי
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
    totalAchievements: ACHIEVEMENTS_DEF.length
  };
}

// הישגים למסך "הישגים"
function getAchievements() {
  const state = getState();
  return ACHIEVEMENTS_DEF.map((a) => ({
    ...a,
    unlocked: !!state.achievements[a.id],
    unlockedAt: state.achievements[a.id]?.unlockedAt || null
  }));
}

// פירוט שיעורים למסך סטטיסטיקה
function getLessonBreakdown() {
  const state = getState();
  return Object.entries(state.lessonStats)
    .map(([id, stats]) => ({
      lessonId: id,
      ...stats
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
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
  ACHIEVEMENTS_DEF
};