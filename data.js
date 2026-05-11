const courseData = {
       "lesson-1": {
        title: "שיעור 1: בסיס ונימוסים",
        questions: [
            // --- חלק 1: מילות מפתח ואימות (1-6) ---
            { word: "Ano", options: ["Ano", "Ne", "Možná"], translation: "כן", type: "audio-select" },
            { word: "Ne", options: ["Ano", "Ne", "Prosím"], translation: "לא", type: "audio-select" },
            { word: "Prosím", options: ["Děkuju", "Prosím", "Ahoj"], translation: "בבקשה", type: "audio-select" },
            { word: "Děkuju", options: ["Prosím", "Děkuju", "Promiňte"], translation: "תודה", type: "audio-select" },
            { question: "האם הפירוש של המילה Ne הוא 'כן'?", word: "לא נכון", options: ["נכון", "לא נכון"], translation: "Ne = לא", type: "translate-select" },
            { question: "האם הפירוש של המילה Ano הוא 'כן'?", word: "נכון", options: ["נכון", "לא נכון"], translation: "Ano = כן", type: "translate-select" },

            // --- חלק 2: ברכות וזמנים (7-12) ---
            { word: "Dobrý den", options: ["Dobrý den", "Dobré ráno", "Dobrou noc"], translation: "יום טוב / שלום", type: "audio-select" },
            { word: "Dobré ráno", options: ["Dobrý den", "Dobré ráno", "Dobrý večer"], translation: "בוקר טוב", type: "audio-select" },
            { word: "Dobrý večer", options: ["Dobrý den", "Dobrý večer", "Dobrou noc"], translation: "ערב טוב", type: "audio-select" },
            { word: "Dobrou noc", options: ["Dobrou noc", "Dobré ráno", "Ahoj"], translation: "לילה טוב", type: "audio-select" },
            { word: "Na shledanou", options: ["Ahoj", "Na shledanou", "Prosím"], translation: "להתראות", type: "audio-select" },
            { word: "Ahoj", options: ["Ahoj", "Na shledanou", "Dobrý den"], translation: "היי / ביי (לא רשמי)", type: "audio-select" },

            // --- חלק 3: דקדוק - גופים (13-18) ---
            { question: "איך אומרים 'אני' (I)?", word: "Já", options: ["Já", "Ty", "On"], translation: "I", type: "translate-select" },
            { question: "איך אומרים 'אתה/את' (You)?", word: "Ty", options: ["Já", "Ty", "Ona"], translation: "You", type: "translate-select" },
            { question: "איך אומרים 'הוא' (He)?", word: "On", options: ["On", "Ona", "Ono"], translation: "He", type: "translate-select" },
            { question: "איך אומרים 'היא' (She)?", word: "Ona", options: ["On", "Ona", "Ono"], translation: "She", type: "translate-select" },
            { question: "איך אומרים 'אנחנו' (We)?", word: "My", options: ["My", "Vy", "Oni"], translation: "We", type: "translate-select" },
            { question: "איך אומרים 'אתם/אתן' או פנייה מנומסת?", word: "Vy", options: ["My", "Vy", "Oni"], translation: "You (plural/polite)", type: "translate-select" },

            // --- חלק 4: דקדוק - זכר ונקבה ותארים (19-24) ---
            { question: "המילה 'טוב' לזכר היא Dobrý. איך אומרים 'טובה' לנקבה?", word: "Dobrá", options: ["Dobrá", "Dobrý", "Dobré"], translation: "Good (f)", type: "translate-select" },
            { word: "Špatný", options: ["Dobrý", "Špatný", "Moc"], translation: "רע / גרוע (זכר)", type: "audio-select" },
            { question: "איך אומרים 'רעה' (נקבה)?", word: "Špatná", options: ["Špatný", "Špatná", "Špatné"], translation: "Bad (f)", type: "translate-select" },
            { word: "Moc", options: ["Moc", "Málo", "Dost"], translation: "מאוד / הרבה", type: "audio-select" },
            { question: "איך אומרים 'תודה רבה' (תודה מאוד)?", word: "Děkuju moc", options: ["Děkuju moc", "Prosím moc", "Ahoj moc"], translation: "Thank you very much", type: "translate-select" },
            { word: "Promiňte", options: ["Děkuju", "Promiňte", "Prosím"], translation: "סליחה / Excuse me", type: "audio-select" },

            // --- חלק 5: סידור משפטים (25-30) ---
            { type: "word-order", words: ["Já", "jsem", "Shir"], translation: "אני שיר" },
            { type: "word-order", words: ["Dobrý", "den,", "já", "jsem", "Izraelec"], translation: "יום טוב, אני ישראלי" },
            { type: "word-order", words: ["Děkuju", "moc", "za", "všechno"], translation: "תודה רבה על הכל" },
            { type: "word-order", words: ["Ahoj,", "jak", "se", "máš?"], translation: "היי, מה קורה?" },
            { type: "word-order", words: ["Ty", "jsi", "tady"], translation: "אתה כאן" },
            { type: "word-order", words: ["Já", "nerozumím"], translation: "אני לא מבין" },
                // --- חלק 6: ביטויי עזרה ונימוס (31-38) ---
    { word: "Nerozumím", options: ["Nerozumím", "Rozumím", "Nejsem"], translation: "אני לא מבין / לא מבינה", type: "audio-select" },
    { question: "איך אומרים 'אני לא מבינה' בצ'כית?", word: "Nerozumím", options: ["Nerozumím", "Nevím", "Nechci"], translation: "I do not understand", type: "translate-select" },

    { word: "Opakujte, prosím", options: ["Opakujte, prosím", "Mluvte pomaleji, prosím", "Prosím, pojďte"], translation: "תחזרי בבקשה", type: "audio-select" },
    { word: "Mluvte pomaleji, prosím", options: ["Mluvte rychleji, prosím", "Mluvte pomaleji, prosím", "Mluvte česky, prosím"], translation: "תדברי יותר לאט בבקשה", type: "audio-select" },

    { question: "מה תגידי כשאת רוצה לומר 'סליחה, אני מצטערת'?", word: "Je mi líto", options: ["Je mi líto", "To nic", "Nevím"], translation: "I'm sorry", type: "translate-select" },
    { word: "To nic", options: ["To nic", "To je drahé", "To je dobré"], translation: "לא נורא / הכל בסדר", type: "audio-select" },

    { word: "Čau", options: ["Čau", "Na shledanou", "Dobrý den"], translation: "היי / ביי (לא רשמי)", type: "audio-select" },
    { question: "איך אומרים 'להתראות, שיהיה לך נעים'?", word: "Mějte se hezky", options: ["Mějte se hezky", "Mluvte pomaleji", "Prosím vás"], translation: "Have a nice time / Take care", type: "translate-select" },
        // --- חלק 7: בבית הקפה (39-46) ---
    { word: "Kafe", options: ["Kafe", "Čaj", "Pivo"], translation: "קפה", type: "audio-select" },
    { word: "Čaj", options: ["Voda", "Víno", "Čaj"], translation: "תה", type: "audio-select" },
    { word: "Pivo", options: ["Pivo", "Kafe", "Džus"], translation: "בירה", type: "audio-select" },

    { question: "איך אומרים 'קפה אחד בבקשה'?", word: "Jedno kafe, prosím", options: ["Jedno kafe, prosím", "Jedno pivo, prosím", "Dám si kafe"], translation: "One coffee, please", type: "translate-select" },

    { question: "איך אומרים 'אני אקח תה, בבקשה'?", word: "Dám si čaj, prosím", options: ["Dám si čaj, prosím", "Mám čaj, prosím", "Chci čaj, prosím"], translation: "I'll have tea, please", type: "translate-select" },

    { word: "Zaplatím, prosím", options: ["Zaplatím, prosím", "Děkuju moc", "Mluvte pomaleji, prosím"], translation: "אפשר חשבון, בבקשה", type: "audio-select" },

    { type: "word-order", words: ["Jedno", "pivo,", "prosím"], translation: "בירה אחת, בבקשה" },
    { type: "word-order", words: ["Dám", "si", "kafe"], translation: "אני אקח קפה" }
        ]
    },
    
           "lesson-2": {
        title: "שיעור 2: היכרות ופרטים",
        questions: [
            // --- חלק 1: ביטויי היכרות (1-6) ---
            { word: "Těší mě", options: ["Těší mě", "Děkuju", "Promiňte"], translation: "נעים להכיר", type: "audio-select" },
            { word: "Jak se jmenuješ?", options: ["Kde jsi?", "Jak se jmenuješ?", "Jak se máš?"], translation: "איך קוראים לך?", type: "audio-select" },
            { question: "איך אומרים 'שמי הוא'?", word: "Jmenuju se", options: ["Jmenuju se", "Jmenuješ se", "Jmenuje se"], translation: "My name is", type: "translate-select" },
            { word: "Odkud jsi?", options: ["Kdo jsi?", "Odkud jsi?", "Kam jdeš?"], translation: "מאיפה אתה?", type: "audio-select" },
            { question: "איך אומרים 'אני מישראל'?", word: "Jsem z Izraele", options: ["Jsem z Izraele", "Jsem z Prahy", "Jsem z Česka"], translation: "I am from Israel", type: "translate-select" },
            { question: "האם הפירוש של 'Těší mě' הוא 'סליחה'?", word: "לא נכון", options: ["נכון", "לא נכון"], translation: "Těší mě = נעים להכיר", type: "translate-select" },
        // --- חלק נוסף: שיחת היכרות בסיסית (X) ---
        { 
          question: "איך שואלים 'מה שלומך?' (לא רשמי)?", 
          word: "Jak se máš?", 
          options: ["Jak se máš?", "Jak se jmenuješ?", "Kde bydlíš?"], 
          translation: "How are you? (informal)", 
          type: "translate-select" 
        },

        { 
          word: "Mám se dobře.", 
          options: ["Mám se dobře.", "Nemám se dobře.", "Nevím."], 
          translation: "אני מרגיש/ה טוב", 
          type: "audio-select" 
        },

        { 
          question: "איך אומרים 'אני מרגישה טוב, ומה איתך?'?", 
          word: "Mám se dobře. A ty?", 
          options: ["Mám se dobře. A ty?", "Jsem z Izraele.", "Bydlím v Praze."], 
          translation: "I feel good. And you?", 
          type: "translate-select" 
        },

        { 
          question: "איך שואלים 'איפה אתה גר/ה?'?", 
          word: "Kde bydlíš?", 
          options: ["Kde bydlíš?", "Odkud jsi?", "Kde jsi?"], 
          translation: "Where do you live? (informal)", 
          type: "translate-select" 
        },

        { 
          word: "Bydlím v Praze.", 
          options: ["Bydlím v Praze.", "Jsem z Prahy.", "Jsem v Praze."], 
          translation: "אני גר/ה בפראג", 
          type: "audio-select" 
        },

        { 
          question: "איך אומרים 'אני סטודנטית' (נקבה)?", 
          word: "Jsem studentka", 
          options: ["Jsem studentka", "Jsem student", "Jsem doktor"], 
          translation: "I am a student (female)", 
          type: "translate-select" 
        },

        { 
          type: "word-order", 
          words: ["Ahoj,", "já", "jsem", "Shir"], 
          translation: "היי, אני שיר" 
        },

        { 
          type: "word-order", 
          words: ["Jsem", "z", "Izraele", "a", "bydlím", "v", "Praze"], 
          translation: "אני מישראל וגר/ה בפראג" 
        },

        // --- חלק 2: דקדוק - הפועל 'להיות' (Být) (7-12) ---
            // --- חלק 2: דקדוק - הפועל 'להיות' (Být) (7-12) ---
            { question: "איך אומרים 'אני' (I am)?", word: "Jsem", options: ["Jsem", "Jsi", "Je"], translation: "I am", type: "translate-select" },
            { question: "איך אומרים 'אתה/את' (You are)?", word: "Jsi", options: ["Jsem", "Jsi", "Jsme"], translation: "You are", type: "translate-select" },
            { question: "איך אומרים 'הוא/היא' (He/She is)?", word: "Je", options: ["Je", "Jsem", "Jsi"], translation: "Is", type: "translate-select" },
            { question: "איך אומרים 'אנחנו' (We are)?", word: "Jsme", options: ["Jsme", "Jste", "Jsou"], translation: "We are", type: "translate-select" },
            { question: "איך אומרים 'אתם/אתן' (You all are)?", word: "Jste", options: ["Jsme", "Jste", "Jsou"], translation: "You (pl) are", type: "translate-select" },
            { question: "איך אומרים 'הם/הן' (They are)?", word: "Jsou", options: ["Jsme", "Jste", "Jsou"], translation: "They are", type: "translate-select" },

            // --- חלק 3: מקומות ולאום (13-18) ---
            { word: "Izrael", options: ["Izrael", "Česko", "Amerika"], translation: "ישראל", type: "audio-select" },
            { word: "Česko", options: ["Polsko", "Německo", "Česko"], translation: "צ'כיה", type: "audio-select" },
            { word: "Praha", options: ["Praha", "Brno", "Ostrava"], translation: "פראג", type: "audio-select" },
            { word: "Město", options: ["Město", "Ulice", "Dům"], translation: "עיר", type: "audio-select" },
            { question: "איך אומרים 'סטודנט'?", word: "Student", options: ["Doktor", "Student", "Učitel"], translation: "Student", type: "translate-select" },
            { question: "האם 'Jsem' פירושו 'אתה'?", word: "לא נכון", options: ["נכון", "לא נכון"], translation: "Jsem = אני (הנני)", type: "translate-select" },

            // --- חלק 4: שאלות ופרטים (19-24) ---
            { question: "איך שואלים 'מי זה'?", word: "Kdo to je", options: ["Co to je", "Kdo to je", "Kde to je"], translation: "Who is it", type: "translate-select" },
            { question: "איך שואלים 'מה זה'?", word: "Co to je", options: ["Co to je", "Kdo to je", "Jak to je"], translation: "What is it", type: "translate-select" },
            { word: "Cizinec", options: ["Cizinec", "Domácí", "Kamarád"], translation: "זר (Foreigner)", type: "audio-select" },
            { word: "Taky", options: ["Jen", "Taky", "Už"], translation: "גם (Also)", type: "audio-select" },
            { question: "איך אומרים 'אני גם מישראל'?", word: "Jsem taky z Izraele", options: ["Jsem taky z Izraele", "Jsem z Izraele taky", "Taky jsem Izraelec"], translation: "I am also from Israel", type: "translate-select" },
            { word: "Pan", options: ["Pan", "Paní", "Slečna"], translation: "אדון (Mr.)", type: "audio-select" },

            // --- חלק 5: סידור משפטים (25-30) ---
            { type: "word-order", words: ["Jak", "se", "máš?"], translation: "מה שלומך?" },
            { type: "word-order", words: ["Já", "jsem", "z", "Izraele"], translation: "אני מישראל" },
            { type: "word-order", words: ["Těší", "mě,", "já", "jsem", "Shir"], translation: "נעים להכיר, אני שיר" },
            { type: "word-order", words: ["Kdo", "je", "to?"], translation: "מי זה?" },
            { type: "word-order", words: ["Jsme", "tady", "taky"], translation: "אנחנו כאן גם" },
            { type: "word-order", words: ["Odkud", "jsi?"], translation: "מאיפה אתה?" }
        ]
    },
        "lesson-3": {
        title: "שיעור 3: הפועל להיות (Být)",
        questions: [
            // --- חלק 1: אני, אתה, הוא/היא (יחיד) ---
            { word: "Jsem", options: ["Jsi", "Jsem", "Je"], translation: "אני (I am)", type: "audio-select" },
            { word: "Jsi", options: ["Jsme", "Jsi", "Jste"], translation: "אתה/את (You are)", type: "audio-select" },
            { word: "Je", options: ["Je", "Jsou", "Jsem"], translation: "הוא/היא/זה (He/She/It is)", type: "audio-select" },
            { question: "איך אומרים 'אני מישראל'?", word: "Jsem z Izraele", options: ["Jsem z Izraele", "Jsi z Izraele", "Je z Izraele"], translation: "Jsem z Izraele", type: "translate-select" },
            { question: "איך אומרים 'הוא פה'?", word: "Je tady", options: ["Jsem tady", "Je tady", "Jsou tady"], translation: "He is here", type: "translate-select" },

            // --- חלק 2: אנחנו, אתם, הם (רבים) ---
            { word: "Jsme", options: ["Jsme", "Jste", "Jsou"], translation: "אנחנו (We are)", type: "audio-select" },
            { word: "Jste", options: ["Jsme", "Jste", "Jsou"], translation: "אתם/אתן (You all are)", type: "audio-select" },
            { word: "Jsou", options: ["Jste", "Jsou", "Je"], translation: "הם/הן (They are)", type: "audio-select" },
            { question: "איך אומרים 'אנחנו בפראג'?", word: "Jsme v Praze", options: ["Jsme v Praze", "Jste v Praze", "Jsou v Praze"], translation: "We are in Prague", type: "translate-select" },
            { question: "איך אומרים 'הם שם'?", word: "Jsou tam", options: ["Jsme tam", "Jsou tam", "Je tam"], translation: "They are there", type: "translate-select" },

            // --- חלק 3: שלילה (אני לא, הוא לא...) ---
            { word: "Nejsem", options: ["Nejsi", "Nejsem", "Není"], translation: "אני לא (I am not)", type: "audio-select" },
            { word: "Není", options: ["Není", "Nejsem", "Nejsou"], translation: "הוא/היא לא (He/She is not)", type: "audio-select" },
            { word: "Nejsme", options: ["Nejsme", "Nejste", "Nejsou"], translation: "אנחנו לא (We are not)", type: "audio-select" },
            { question: "איך אומרים 'זה לא בירה'?", word: "To není pivo", options: ["To není pivo", "To nejsem pivo", "To nejsou pivo"], translation: "It's not beer", type: "translate-select" },
            { question: "איך אומרים 'אני לא עייף' (זכר)?", word: "Nejsem unavený", options: ["Nejsem unavený", "Není unavený", "Nejsme unavení"], translation: "I'm not tired", type: "translate-select" },

            // --- חלק 4: שאלות ותשובות ---
            { word: "Jsi doma?", options: ["Jsi doma?", "Jsem doma?", "Je doma?"], translation: "האם אתה בבית?", type: "audio-select" },
            { question: "איך שואלים 'איפה אתם?'", word: "Kde jste?", options: ["Kde jsi?", "Kde jste?", "Kde jsou?"], translation: "Where are you (plural)?", type: "translate-select" },
            { question: "איך עונים 'כן, אני פה'?", word: "Ano, jsem tady", options: ["Ano, jsem tady", "Ano, jsi tady", "Ano, je tady"], translation: "Yes, I am here", type: "translate-select" },
{ word: "Kdo je to", options: ["Kdo je to", "Co je to", "Kde je to"], translation: "מי זה?", type: "audio-select" },
{ word: "Co je to", options: ["Co je to", "Kdo je to", "Jak je to"], translation: "מה זה?", type: "audio-select" },

            // --- חלק 5: מילים משלימות חשובות ---
            { word: "Tady", options: ["Tady", "Tam", "Venku"], translation: "כאן", type: "audio-select" },
            { word: "Tam", options: ["Tady", "Tam", "Doma"], translation: "שם", type: "audio-select" },
            { word: "Doma", options: ["Doma", "V práci", "V Praze"], translation: "בבית", type: "audio-select" },
            { word: "V práci", options: ["Doma", "V práci", "V kině"], translation: "בעבודה", type: "audio-select" },
            { word: "Šťastný", options: ["Šťastný", "Smutný", "Unavený"], translation: "שמח", type: "audio-select" },

            // --- חלק 6: סידור משפטים ---
            { type: "word-order", words: ["Jsem", "v", "Praze"], translation: "אני בפראג" },
            { type: "word-order", words: ["My", "jsme", "šťastní"], translation: "אנחנו שמחים" },
            { type: "word-order", words: ["To", "není", "pravda"], translation: "זה לא נכון (זו לא האמת)" },
            { type: "word-order", words: ["Kde", "jsi", "teď?"], translation: "איפה אתה עכשיו?" },
            { type: "word-order", words: ["On", "není", "doma"], translation: "הוא לא בבית" }
        ]
    },        "lesson-4": {
        title: "שיעור 4: מספרים (Čísla)",
        questions: [
            // --- מספרים 0-5 ---
            { word: "Nula", options: ["Jedna", "Nula", "Dva"], translation: "0", type: "audio-select" },
            { word: "Jedna", options: ["Dva", "Tři", "Jedna"], translation: "1", type: "audio-select" },
            { word: "Dva", options: ["Dva", "Čtyři", "Šest"], translation: "2", type: "audio-select" },
            { word: "Tři", options: ["Jedna", "Tři", "Pět"], translation: "3", type: "audio-select" },
            { word: "Čtyři", options: ["Sedm", "Pět", "Čtyři"], translation: "4", type: "audio-select" },
            { word: "Pět", options: ["Pět", "Šest", "Osm"], translation: "5", type: "audio-select" },

            // --- מספרים 6-10 ---
            { word: "Šest", options: ["Devět", "Šest", "Deset"], translation: "6", type: "audio-select" },
            { word: "Sedm", options: ["Sedm", "Osm", "Nula"], translation: "7", type: "audio-select" },
            { word: "Osm", options: ["Dva", "Devět", "Osm"], translation: "8", type: "audio-select" },
            { word: "Devět", options: ["Sedm", "Devět", "Jedna"], translation: "9", type: "audio-select" },
            { word: "Deset", options: ["Deset", "Sto", "Tisíc"], translation: "10", type: "audio-select" },

            // --- עשרות ומאות ---
            { word: "Dvacet", options: ["Deset", "Dvacet", "Třicet"], translation: "20", type: "audio-select" },
            { word: "Padesát", options: ["Čtyřicet", "Šedesát", "Padesát"], translation: "50", type: "audio-select" },
            { word: "Sto", options: ["Tisíc", "Sto", "Deset"], translation: "100", type: "audio-select" },
            { question: "איך אומרים 1000?", word: "Tisíc", options: ["Sto", "Tisíc", "Milion"], translation: "1000", type: "translate-select" },

            // --- תרגול והבנה ---
            { question: "כמה זה Tři + Dva?", word: "Pět", options: ["Čtyři", "Pět", "Šest"], translation: "3 + 2 = 5", type: "translate-select" },
            { question: "כמה זה Deset - Dva?", word: "Osm", options: ["Šest", "Sedm", "Osm"], translation: "10 - 2 = 8", type: "translate-select" },
            { question: "איך אומרים 'בירה אחת'?", word: "Jedno pivo", options: ["Jeden pivo", "Jedna pivo", "Jedno pivo"], translation: "One beer", type: "translate-select" },
            { word: "Mám dva psy", options: ["Mám dva psy", "Mám dvě kočky", "Mám tři psy"], translation: "יש לי שני כלבים", type: "audio-select" },
            { question: "איך שואלים 'כמה זה עולה?'", word: "Kolik to stojí?", options: ["Kde זה?", "Kolik to stojí?", "Kolik je hodin?"], translation: "How much does it cost?", type: "translate-select" },

            // --- שימוש ביומיום ---
            { word: "Kolik je hodin?", options: ["Kdo jsi?", "Kolik je hodin?", "Jak se máš?"], translation: "מה השעה?", type: "audio-select" },
            { word: "První", options: ["Druhý", "Třetí", "První"], translation: "ראשון", type: "audio-select" },
            { word: "Korun", options: ["Pivo", "Korun", "Voda"], translation: "קורונות (המטבע הצ'כי)", type: "audio-select" },
            { question: "איך אומרים 'זה עולה 50 קורונות'?", word: "To stojí padesát korun", options: ["To stojí dvacet korun", "To stojí padesát korun", "To stojí sto korun"], translation: "It costs 50 CZK", type: "translate-select" },

            // --- סידור משפטים (כאן הסדר קריטי בקוד) ---
            { type: "word-order", words: ["To", "stojí", "sto", "korun"], translation: "זה עולה מאה קורונות" },
            { type: "word-order", words: ["Mám", "čtyři", "psy"], translation: "יש לי ארבעה כלבים" },
            { type: "word-order", words: ["Je", "jedna", "hodina"], translation: "השעה אחת" },
            { type: "word-order", words: ["Dám", "si", "jedno", "pivo"], translation: "אני אקח בירה אחת" },
            { type: "word-order", words: ["Mám", "deset", "minut"], translation: "יש לי עשר דקות" },
            { type: "word-order", words: ["Dnes", "je", "první", "květen"], translation: "היום הראשון במאי" }
        ]
    },
        "lesson-5": {
        title: "שיעור 5: אוכל ומסעדות",
        questions: [
            // --- מוצרי בסיס ---
            { word: "Chleba", options: ["Chleba", "Rohlík", "Máslo"], translation: "לחם", type: "audio-select" },
            { word: "Voda", options: ["Pivo", "Víno", "Voda"], translation: "מים", type: "audio-select" },
            { word: "Máslo", options: ["Mléko", "Máslo", "Sýr"], translation: "חמאה", type: "audio-select" },
            { word: "Sýr", options: ["Sýr", "Maso", "Vejce"], translation: "גבינה", type: "audio-select" },
            { word: "Maso", options: ["Ryba", "Maso", "Kuře"], translation: "בשר", type: "audio-select" },
            { word: "Vejce", options: ["Vejce", "Ovoce", "Zelenina"], translation: "ביצה", type: "audio-select" },

            // --- במסעדה ---
            { word: "Jídelní lístek", options: ["Účet", "Pivo", "Jídelní lístek"], translation: "תפריט", type: "audio-select" },
            { word: "Snídaně", options: ["Oběd", "Snídaně", "Večeře"], translation: "ארוחת בוקר", type: "audio-select" },
            { word: "Oběd", options: ["Oběd", "Snídaně", "Svačina"], translation: "ארוחת צהריים", type: "audio-select" },
            { word: "Večeře", options: ["Večeře", "Oběd", "Pití"], translation: "ארוחת ערב", type: "audio-select" },
            { question: "איך מבקשים חשבון?", word: "Zaplatím, prosím", options: ["Jídelní lístek", "Zaplatím, prosím", "Mám hlad"], translation: "אני אשלם, בבקשה", type: "translate-select" },

            // --- פעלים של אוכל ---
            { word: "Jíst", options: ["Pít", "Jíst", "Spát"], translation: "לאכול", type: "audio-select" },
            { word: "Pít", options: ["Jíst", "Pít", "Mluvit"], translation: "לשתות", type: "audio-select" },
            { word: "Chutná mi to", options: ["Chutná mi to", "Nemám rád", "Je זה špatné"], translation: "זה טעים לי", type: "audio-select" },
            { question: "איך אומרים 'אני רעב' (זכר)?", word: "Mám hlad", options: ["Mám žízeן", "Mám hlad", "Mám čas"], translation: "I am hungry", type: "translate-select" },
            { question: "איך אומרים 'אני צמא' (זכר)?", word: "Mám žízeň", options: ["Mám žízeň", "Mám hlad", "Mám strach"], translation: "I am thirsty", type: "translate-select" },

            // --- משקאות ---
            { word: "Káva", options: ["Čaj", "Káva", "Džus"], translation: "קפה", type: "audio-select" },
            { word: "Čaj", options: ["Voda", "Pivo", "Čaj"], translation: "תה", type: "audio-select" },
            { word: "Víno", options: ["Pivo", "Víno", "Limonáda"], translation: "יין", type: "audio-select" },
            { question: "איך אומרים 'לחיים!'?", word: "Na zdraví!", options: ["Dobrou chuť!", "Na zdraví!", "Děkuju!"], translation: "Cheers!", type: "translate-select" },
            { question: "איך אומרים 'בתיאבון'?", word: "Dobrou chuť!", options: ["Dobrou chuť!", "Na zdraví!", "Prosím!"], translation: "Bon appétit!", type: "translate-select" },

            // --- שמות עצם נוספים ---
            { word: "Polévka", options: ["Salát", "Polévka", "Dezert"], translation: "מרק", type: "audio-select" },
            { word: "Cukr", options: ["Sůl", "Cukr", "Pepř"], translation: "סוכר", type: "audio-select" },
            { word: "Sůl", options: ["Sůl", "Cukr", "Máslo"], translation: "מלח", type: "audio-select" },

            // --- סידור משפטים ---
            { type: "word-order", words: ["Dám", "si", "jedno", "pivo"], translation: "אני אקח בירה אחת" },
            { type: "word-order", words: ["Mám", "velký", "hlad"], translation: "אני מאוד רעב (יש לי רעב גדול)" },
            { type: "word-order", words: ["Účet,", "prosím"], translation: "חשבון, בבקשה" },
            { type: "word-order", words: ["Kávu", "bez", "cukru"], translation: "קפה בלי סוכר" },
            { type: "word-order", words: ["To", "je", "velmi", "dobré"], translation: "זה טוב מאוד (טעים)" },
            { type: "word-order", words: ["Máte", "jídelní", "lístek?"], translation: "יש לכם תפריט?" }
        ]
    },
      "lesson-6": {
        title: "שיעור 6: התמצאות ותחבורה",
        questions: [
            // --- כיוונים בסיסיים ---
            { word: "Doprava", options: ["Doleva", "Doprava", "Rovně"], translation: "ימינה", type: "audio-select" },
            { word: "Doleva", options: ["Doprava", "Doleva", "Zpátky"], translation: "שמאלה", type: "audio-select" },
            { word: "Rovně", options: ["Rovně", "Blízko", "Daleko"], translation: "ישר (Straight)", type: "audio-select" },
            { word: "Tady", options: ["Tam", "Tady", "Nahoře"], translation: "כאן", type: "audio-select" },
            { word: "Tam", options: ["Tady", "Dole", "Tam"], translation: "שם", type: "audio-select" },

            // --- מקומות בעיר ---
            { word: "Náměstí", options: ["Ulice", "Náměstí", "Dům"], translation: "כיכר", type: "audio-select" },
            { word: "Ulice", options: ["Cesta", "Most", "Ulice"], translation: "רחוב", type: "audio-select" },
            { word: "Most", options: ["Most", "Hrad", "Řeka"], translation: "גשר", type: "audio-select" },
            { word: "Zastávka", options: ["Nádraží", "Zastávka", "Letiště"], translation: "תחנה (אוטובוס/חשמלית)", type: "audio-select" },
            { word: "Nádraží", options: ["Zastávka", "Nádraží", "Obchod"], translation: "תחנת רכבת", type: "audio-select" },

            // --- תחבורה ---
            { word: "Tramvaj", options: ["Auto", "Tramvaj", "Metro"], translation: "חשמלית (טראם)", type: "audio-select" },
            { word: "Metro", options: ["Vlak", "Metro", "Autobus"], translation: "מטרו", type: "audio-select" },
            { word: "Vlak", options: ["Kolo", "Vlak", "Loď"], translation: "רכבת", type: "audio-select" },
            { word: "Lístek", options: ["Lístek", "Mapa", "Peníze"], translation: "כרטיס (נסיעה)", type: "audio-select" },
            { question: "איך אומרים 'שדה תעופה'?", word: "Letiště", options: ["Nádraží", "Letiště", "Hrad"], translation: "Airport", type: "translate-select" },

            // --- שאלות חשובות ---
            { question: "איך שואלים 'איפה זה?'", word: "Kde to je?", options: ["Kde to je?", "Co to je?", "Jak to je?"], translation: "Where is it?", type: "translate-select" },
            { question: "איך שואלים 'איך מגיעים ל...?'", word: "Jak se dostanu k...?", options: ["Kde bydlíš?", "Jak se dostanu k...?", "Kdy to jede?"], translation: "How do I get to...?", type: "translate-select" },
            { word: "Blízko", options: ["Daleko", "Blízko", "Tady"], translation: "קרוב", type: "audio-select" },
            { word: "Daleko", options: ["Rovně", "Blízko", "Daleko"], translation: "רחוק", type: "audio-select" },
            { question: "איך שואלים 'מתי זה נוסע?'", word: "Kdy to jede?", options: ["Kolik זה stojí?", "Kdy to jede?", "Kde to zastavuje?"], translation: "When does it go?", type: "translate-select" },

            // --- מילים משלימות ---
            { word: "Mapa", options: ["Mapa", "Kniha", "Cesta"], translation: "מפה", type: "audio-select" },
            { word: "Centrum", options: ["Město", "Centrum", "Vesnice"], translation: "מרכז העיר", type: "audio-select" },
            { word: "Vlevo", options: ["Vpravo", "Vlevo", "Uprostřed"], translation: "משמאל", type: "audio-select" },
            { word: "Vpravo", options: ["Vlevo", "Vpravo", "Vedle"], translation: "מימין", type: "audio-select" },

            // --- סידור משפטים ---
            { type: "word-order", words: ["Kde", "je", "stanice", "metra?"], translation: "איפה תחנת המטרו?" },
            { type: "word-order", words: ["Jděte", "pořád", "rovně"], translation: "לכו כל הזמן ישר" },
            { type: "word-order", words: ["To", "je", "blízko", "tady"], translation: "זה קרוב לכאן" },
            { type: "word-order", words: ["Hledám", "ulici", "Veletržní"], translation: "אני מחפש את רחוב ולטרז'ני" },
            { type: "word-order", words: ["Jeden", "lístek,", "prosím"], translation: "כרטיס אחד, בבקשה" },
            { type: "word-order", words: ["Kde", "můžu", "koupit", "lístek?"], translation: "איפה אני יכול לקנות כרטיס?" }
        ]
    },
    "lesson-7": {
        title: "שיעור 7: משפחה וקרובים",
        questions: [
            // --- בני משפחה גרעינית ---
            { word: "Máma", options: ["Máma", "Táta", "Sestra"], translation: "אמא", type: "audio-select" },
            { word: "Táta", options: ["Bratr", "Táta", "Dědeček"], translation: "אבא", type: "audio-select" },
            { word: "Syn", options: ["Dcera", "Syn", "Dítě"], translation: "בן", type: "audio-select" },
            { word: "Dcera", options: ["Sestra", "Dcera", "Máma"], translation: "בת", type: "audio-select" },
            { word: "Bratr", options: ["Bratr", "Sestra", "Kamarád"], translation: "אח", type: "audio-select" },
            { word: "Sestra", options: ["Sestra", "Bratr", "Teta"], translation: "אחות", type: "audio-select" },

            // --- משפחה מורחבת ---
            { word: "Babička", options: ["Dědeček", "Babička", "Máma"], translation: "סבתא", type: "audio-select" },
            { word: "Dědeček", options: ["Babička", "Dědeček", "Táta"], translation: "סבא", type: "audio-select" },
            { word: "Manžel", options: ["Manželka", "Manžel", "Kamarád"], translation: "בעל", type: "audio-select" },
            { word: "Manželka", options: ["Manželka", "Dcera", "Sestra"], translation: "אישה (רעיה)", type: "audio-select" },
            { word: "Dítě", options: ["Děti", "Dítě", "Syn"], translation: "ילד", type: "audio-select" },
            { word: "Děti", options: ["Dítě", "Děti", "Lidé"], translation: "ילדים", type: "audio-select" },

            // --- שייכות (שלי / שלך) ---
            { question: "איך אומרים 'אמא שלי'?", word: "Moje máma", options: ["Tvoje máma", "Moje máma", "Jeho máma"], translation: "My mother", type: "translate-select" },
            { question: "איך אומרים 'אבא שלי'?", word: "Můj táta", options: ["Můj táta", "Moje táta", "Tvůj táta"], translation: "My father", type: "translate-select" },
            { question: "איך אומרים 'הכלב שלי'?", word: "Můj pes", options: ["Moje pes", "Můj pes", "Tvoje pes"], translation: "My dog", type: "translate-select" },
            { word: "Kamarád", options: ["Nepřítel", "Kamarád", "Kolega"], translation: "חבר (Friend)", type: "audio-select" },
            { word: "Kamarádka", options: ["Sestra", "Kamarádka", "Máma"], translation: "חברה (Friend - female)", type: "audio-select" },

            // --- תארים ומצבים ---
            { word: "Mladý", options: ["Starý", "Mladý", "Malý"], translation: "צעיר", type: "audio-select" },
            { word: "Starý", options: ["Mladý", "Starý", "Velký"], translation: "זקן / ישן", type: "audio-select" },
            { word: "Malý", options: ["Velký", "Malý", "Hezký"], translation: "קטן", type: "audio-select" },
            { word: "Velký", options: ["Malý", "Velký", "Dobrý"], translation: "גדול", type: "audio-select" },
            { question: "איך אומרים 'משפחה טובה'?", word: "Dobrá rodina", options: ["Dobrá rodina", "Dobrý rodina", "Dobré rodina"], translation: "Good family", type: "translate-select" },

            // --- סידור משפטים ---
            { type: "word-order", words: ["To", "je", "moje", "rodina"], translation: "זו המשפחה שלי" },
            { type: "word-order", words: ["Můj", "bratr", "je", "tady"], translation: "אח שלי כאן" },
            { type: "word-order", words: ["Máš", "bratra", "nebo", "sestru?"], translation: "יש לך אח או אחות?" },
            { type: "word-order", words: ["Moje", "babička", "je", "velmi", "hodná"], translation: "סבתא שלי מאוד נחמדה" },
            { type: "word-order", words: ["To", "je", "můj", "pes"], translation: "זה הכלב שלי" },
            { type: "word-order", words: ["Mám", "rád", "svou", "rodinu"], translation: "אני אוהב את המשפחה שלי" },
            { type: "word-order", words: ["Kde", "je", "tvůj", "manžel?"], translation: "איפה בעלך?" },
            { type: "word-order", words: ["Jsem", "doma", "s", "rodinou"], translation: "אני בבית עם המשפחה" }
        ]
    },
    "lesson-8": {
        title: "שיעור 8: זמן, ימים ומועדים",
        questions: [
            // --- ימי השבוע (חלק 1) ---
            { word: "Pondělí", options: ["Pondělí", "Úterý", "Středa"], translation: "יום שני", type: "audio-select" },
            { word: "Úterý", options: ["Čtvrtek", "Úterý", "Pátek"], translation: "יום שלישי", type: "audio-select" },
            { word: "Středa", options: ["Středa", "Sobota", "Neděle"], translation: "יום רביעי", type: "audio-select" },
            { word: "Čtvrtek", options: ["Pondělí", "Čtvrtek", "Úterý"], translation: "יום חמישי", type: "audio-select" },
            { word: "Pátek", options: ["Sobota", "Pátek", "Neděle"], translation: "יום שישי", type: "audio-select" },
            { word: "Sobota", options: ["Sobota", "Neděle", "Pondělí"], translation: "יום שבת", type: "audio-select" },
            { word: "Neděle", options: ["Neděle", "Pátek", "Středa"], translation: "יום ראשון", type: "audio-select" },

            // --- מושגי זמן כלליים ---
            { word: "Dnes", options: ["Zítra", "Dnes", "Včera"], translation: "היום", type: "audio-select" },
            { word: "Zítra", options: ["Dnes", "Zítra", "Včera"], translation: "מחר", type: "audio-select" },
            { word: "Včera", options: ["Zítra", "Včera", "Teď"], translation: "אתמול", type: "audio-select" },
            { word: "Teď", options: ["Teď", "Potom", "Nikdy"], translation: "עכשיו", type: "audio-select" },
            { word: "Ráno", options: ["Ráno", "Večer", "Noc"], translation: "בוקר", type: "audio-select" },
            { word: "Večer", options: ["Odpoledne", "Večer", "Ráno"], translation: "ערב", type: "audio-select" },

            // --- יחידות זמן ---
            { word: "Týden", options: ["Měsíc", "Týden", "Rok"], translation: "שבוע", type: "audio-select" },
            { word: "Měsíc", options: ["Den", "Týden", "Měsíc"], translation: "חודש", type: "audio-select" },
            { word: "Rok", options: ["Rok", "Dnes", "Čas"], translation: "שנה", type: "audio-select" },
            { word: "Hodina", options: ["Minuta", "Hodina", "Sekunda"], translation: "שעה", type: "audio-select" },

            // --- עונות השנה ---
            { word: "Jaro", options: ["Léto", "Jaro", "Podzim"], translation: "אביב", type: "audio-select" },
            { word: "Léto", options: ["Zima", "Léto", "Jaro"], translation: "קיץ", type: "audio-select" },
            { word: "Podzim", options: ["Podzim", "Zima", "Léto"], translation: "סתיו", type: "audio-select" },
            { word: "Zima", options: ["Zima", "Jaro", "Podzim"], translation: "חורף", type: "audio-select" },

            // --- שאלות ותשובות ---
            { question: "איך שואלים 'מתי?'", word: "Kdy?", options: ["Kde?", "Kdy?", "Jak?"], translation: "When?", type: "translate-select" },
            { question: "איך אומרים 'בסוף השבוע'?", word: "O víkendu", options: ["V pondělí", "O víkendu", "Dnes večer"], translation: "At the weekend", type: "translate-select" },
            { question: "איך אומרים 'פגישה'?", word: "Schůzka", options: ["Práce", "Schůzka", "Škola"], translation: "Meeting / Appointment", type: "translate-select" },

            // --- סידור משפטים ---
            { type: "word-order", words: ["Dnes", "je", "středa"], translation: "היום יום רביעי" },
            { type: "word-order", words: ["Uvidíme", "se", "zítra", "ráno"], translation: "נתראה מחר בבוקר" },
            { type: "word-order", words: ["Mám", "čas", "v", "pátek"], translation: "יש לי זמן ביום שישי" },
            { type: "word-order", words: ["V", "sobotu", "nejsem", "doma"], translation: "בשבת אני לא בבית" },
            { type: "word-order", words: ["Kdy", "máš", "narozeniny?"], translation: "מתי יש לך יום הולדת?" },
            { type: "word-order", words: ["Léto", "v", "Praze", "je", "hezké"], translation: "הקיץ בפראג יפה" }
        ]
    },
       "lesson-9": {
        title: "שיעור 9: קניות ותשלומים",
        questions: [
            // --- סוגי חנויות ---
            { word: "Obchod", options: ["Dům", "Obchod", "Škola"], translation: "חנות", type: "audio-select" },
            { word: "Potraviny", options: ["Lékárna", "Potraviny", "Hračky"], translation: "מכולת / מוצרי מזון", type: "audio-select" },
            { word: "Pekárna", options: ["Pekárna", "Kavárna", "Banka"], translation: "מאפייה", type: "audio-select" },
            { word: "Lékárna", options: ["Lékárna", "Nemocnice", "Pošta"], translation: "בית מרקחת", type: "audio-select" },
            { word: "Trh", options: ["Obchod", "Trh", "Ulice"], translation: "שוק", type: "audio-select" },

            // --- בגדים ומידות ---
            { word: "Oblečení", options: ["Jídlo", "Oblečení", "Boty"], translation: "בגדים", type: "audio-select" },
            { word: "Boty", options: ["Boty", "Taška", "Bunda"], translation: "נעליים", type: "audio-select" },
            { word: "Taška", options: ["Kapsa", "Taška", "Kufr"], translation: "תיק / שקית", type: "audio-select" },
            { question: "איך אומרים 'תא מדידה'?", word: "Kabinka", options: ["Pokladna", "Kabinka", "Vchod"], translation: "Fitting room", type: "translate-select" },
            { question: "איך אומרים 'מידה'?", word: "Velikost", options: ["Cena", "Velikost", "Barva"], translation: "Size", type: "translate-select" },

            // --- תהליך הקנייה ---
            { word: "Cena", options: ["Cena", "Sleva", "Drahý"], translation: "מחיר", type: "audio-select" },
            { word: "Sleva", options: ["Cena", "Sleva", "Zadarmo"], translation: "הנחה", type: "audio-select" },
            { word: "Drahý", options: ["Levný", "Drahý", "Velký"], translation: "יקר", type: "audio-select" },
            { word: "Levný", options: ["Drahý", "Levný", "Malý"], translation: "זול", type: "audio-select" },
            { word: "Pokladna", options: ["Pokladna", "Vchod", "Výstup"], translation: "קופה", type: "audio-select" },
            { word: "Hotově", options: ["Kartou", "Hotově", "Mobil"], translation: "במזומן", type: "audio-select" },
            { word: "Kartou", options: ["Hotově", "Kartou", "Účtem"], translation: "בכרטיס (אשראי)", type: "audio-select" },

            // --- משפטים שימושיים ---
            { question: "איך שואלים 'כמה זה עולה?'", word: "Kolik to stojí?", options: ["Kde זה?", "Kolik to stojí?", "Máte slevu?"], translation: "How much is it?", type: "translate-select" },
            { question: "איך אומרים 'אני רק מסתכל'?", word: "Jen se dívám", options: ["Chci to koupit", "Jen se dívám", "Nemám peníze"], translation: "I'm just looking", type: "translate-select" },
            { question: "איך אומרים 'אפשר למדוד?'", word: "Můžu si זה vyzkoušet?", options: ["Můžu zaplatit?", "Můžu si זה vyzkoušet?", "Kde je pokladna?"], translation: "Can I try this on?", type: "translate-select" },

            // --- מילים נוספות ---
            { word: "Zadarmo", options: ["Levný", "Zadarmo", "Sleva"], translation: "בחינם", type: "audio-select" },
            { word: "Otevřeno", options: ["Zavřeno", "Otevřeno", "Vchod"], translation: "פתוח", type: "audio-select" },
            { word: "Zavřeno", options: ["Otevřeno", "Zavřeno", "Konec"], translation: "סגור", type: "audio-select" },
            { word: "Nákupní košík", options: ["Nákupní košík", "Taška", "Pokladna"], translation: "עגלת קניות", type: "audio-select" },

            // --- סידור משפטים ---
            { type: "word-order", words: ["Máte", "menší", "velikost?"], translation: "יש לכם מידה קטנה יותר?" },
            { type: "word-order", words: ["Zaplatím", "kartou,", "prosím"], translation: "אשלם בכרטיס, בבקשה" },
            { type: "word-order", words: ["Kde", "je", "tady", "lékárna?"], translation: "איפה יש כאן בית מרקחת?" },
            { type: "word-order", words: ["To", "je", "moc", "drahé"], translation: "זה יקר מדי" },
            { type: "word-order", words: ["Hledám", "nové", "boty"], translation: "אני מחפש נעליים חדשות" },
            { type: "word-order", words: ["Máte", "nějakou", "slevu?"], translation: "יש לכם הנחה כלשהי?" }
        ]
    },
        // --- שיעור 10: בריאות וגוף האדם ---
    "lesson-10": {
        title: "שיעור 10: בריאות וגוף האדם",
        questions: [
            { word: "Hlava", options: ["Ruka", "Hlava", "Noha"], translation: "ראש", type: "audio-select" },
            { word: "Ruka", options: ["Ruka", "Noha", "Záda"], translation: "יד", type: "audio-select" },
            { word: "Noha", options: ["Oko", "Noha", "Ucho"], translation: "רגל", type: "audio-select" },
            { word: "Záda", options: ["Záda", "Břicho", "Hlava"], translation: "גב", type: "audio-select" },
            { word: "Břicho", options: ["Srdce", "Břicho", "Krk"], translation: "בטן", type: "audio-select" },
            { word: "Nemocnice", options: ["Lékárna", "Nemocnice", "Škola"], translation: "בית חולים", type: "audio-select" },
            { word: "Doktor", options: ["Sestra", "Doktor", "Pacient"], translation: "רופא", type: "audio-select" },
            { question: "איך אומרים 'כואב לי'?", word: "Bolí mě...", options: ["Mám hlad", "Bolí mě...", "Jsem unavený"], translation: "It hurts me...", type: "translate-select" },
            { question: "איך אומרים 'כואב לי הראש'?", word: "Bolí mě hlava", options: ["Bolí mě hlava", "Bolí mě noha", "Mám rýmu"], translation: "I have a headache", type: "translate-select" },
            { word: "Lék", options: ["Voda", "Lék", "Čaj"], translation: "תרופה", type: "audio-select" },
            { type: "word-order", words: ["Potřebuju", "vidět", "doktora"], translation: "אני צריך לראות רופא" },
            { type: "word-order", words: ["Kde", "je", "tady", "nemocnice?"], translation: "איפה יש כאן בית חולים?" },
            { type: "word-order", words: ["Mám", "teplotu", "a", "kašel"], translation: "יש לי חום ושיעול" }
        ]
    },

    // --- שיעור 11: עבודה ומשרד ---
    "lesson-11": {
        title: "שיעור 11: עבודה ומשרד",
        questions: [
            { word: "Práce", options: ["Škola", "Práce", "Zábava"], translation: "עבודה", type: "audio-select" },
            { word: "Kancelář", options: ["Dům", "Kancelář", "Obchod"], translation: "משרד", type: "audio-select" },
            { word: "Počítač", options: ["Telefon", "Počítač", "Kniha"], translation: "מחשב", type: "audio-select" },
            { word: "Schůzka", options: ["Schůzka", "Oběd", "Dovolená"], translation: "פגישה", type: "audio-select" },
            { word: "Šéf", options: ["Kolega", "Šéf", "Klient"], translation: "בוס", type: "audio-select" },
            { word: "Kolega", options: ["Šéf", "Kolega", "Rodina"], translation: "קולגה (חבר לעבודה)", type: "audio-select" },
            { word: "E-mail", options: ["Dopis", "E-mail", "Zpráva"], translation: "אימייל", type: "audio-select" },
            { question: "איך אומרים 'אני מחפש עבודה'?", word: "Hledám práci", options: ["Mám práci", "Hledám práci", "Chci spát"], translation: "I'm looking for a job", type: "translate-select" },
            { question: "איך אומרים 'פנסיה'?", word: "Důchod", options: ["Práce", "Důchod", "Peníze"], translation: "Retirement / Pension", type: "translate-select" },
            { type: "word-order", words: ["Pracuju", "jako", "manažer"], translation: "אני עובד כמנהל" },
            { type: "word-order", words: ["Mám", "důležitou", "schůzku"], translation: "יש לי פגישה חשובה" },
            { type: "word-order", words: ["Kde", "pracuješ?"], translation: "איפה אתה עובד?" }
        ]
    },

    // --- שיעור 12: פנאי, תחביבים וסיכום ---
    "lesson-12": {
        title: "שיעור 12: פנאי ותחביבים",
        questions: [
            { word: "Sport", options: ["Hudba", "Sport", "Kino"], translation: "ספורט", type: "audio-select" },
            { word: "Hudba", options: ["Kniha", "Hudba", "Film"], translation: "מוזיקה", type: "audio-select" },
            { word: "Kniha", options: ["Noviny", "Kniha", "Časopis"], translation: "ספר", type: "audio-select" },
            { word: "Plavání", options: ["Běh", "Plavání", "Fotbal"], translation: "שחייה", type: "audio-select" },
            { word: "Dovolená", options: ["Práce", "Dovolená", "Víkend"], translation: "חופשה", type: "audio-select" },
            { word: "Výlet", options: ["Výlet", "Cesta", "Návštěva"], translation: "טיול", type: "audio-select" },
            { question: "מה התחביב שלך?", word: "Co je tvůj koníček?", options: ["Co děláš?", "Co je tvůj koníček?", "Jak se máš?"], translation: "What is your hobby?", type: "translate-select" },
            { word: "Rád čtu", options: ["Rád čtu", "Rád piju", "Rád spím"], translation: "אני אוהב לקרוא", type: "audio-select" },
            { type: "word-order", words: ["Rád", "chodím", "do", "kina"], translation: "אני אוהב ללכת לקולנוע" },
            { type: "word-order", words: ["Mám", "rád", "českou", "hudbu"], translation: "אני אוהב מוזיקה צ'כית" },
            { type: "word-order", words: ["Učím", "se", "česky", "každý", "den"], translation: "אני לומד צ'כית כל יום" },
            { question: "סיימת את הקורס!", word: "Gratuluju!", options: ["Děkuju!", "Gratuluju!", "Prosím!"], translation: "מזל טוב / ברכות!", type: "translate-select" }
        ]
    },
"lesson-13": {
  title: "שיעור 13: בריאות ורופאים",
  questions: [
    // --- חלק 1: חלקי גוף בסיסיים ---
    { word: "Hlava", options: ["Hlava", "Ruka", "Noga"], translation: "ראש", type: "audio-select" },
    { word: "Ruka", options: ["Ruka", "Noga", "Břicho"], translation: "יד / זרוע", type: "audio-select" },
    { word: "Noga", options: ["Ruka", "Noga", "Hlava"], translation: "רגל", type: "audio-select" },
    { word: "Břicho", options: ["Břicho", "Záda", "Hlava"], translation: "בטן", type: "audio-select" },
    { word: "Záda", options: ["Záda", "Ruka", "Noga"], translation: "גב", type: "audio-select" },

    // --- חלק 2: מצבים ובריאות כללית ---
    { word: "Nemocný", options: ["Zdravý", "Nemocný", "Unavený"], translation: "חולה (זכר)", type: "audio-select" },
    { word: "Zdravý", options: ["Zdravý", "Nemocný", "Smutný"], translation: "בריא (זכר)", type: "audio-select" },
    { word: "Unavený", options: ["Unavený", "Veselý", "Hladový"], translation: "עייף (זכר)", type: "audio-select" },
    { word: "Bolí mě hlava", options: ["Bolí mě hlava", "Bolí mě břicho", "Je mi dobře"], translation: "כואב לי הראש", type: "audio-select" },
    { word: "Je mi špatně", options: ["Je mi dobře", "Je mi špatně", "Je mi jedno"], translation: "אני מרגיש/ה לא טוב", type: "audio-select" },

    // --- חלק 3: אצל הרופא ---
    { word: "Doktor", options: ["Doktor", "Sestra", "Pacient"], translation: "רופא", type: "audio-select" },
    { word: "Sestra", options: ["Sestra", "Doktor", "Pacient"], translation: "אחות (אחות רפואית)", type: "audio-select" },
    { word: "Pacient", options: ["Pacient", "Doktor", "Sestra"], translation: "מטופל", type: "audio-select" },
    { word: "Lékař", options: ["Lékař", "Lékárna", "Nemocnice"], translation: "רופא (צורה רשמית)", type: "audio-select" },
    { word: "Nemocnice", options: ["Nemocnice", "Lékárna", "Klinika"], translation: "בית חולים", type: "audio-select" },
    { word: "Lékárna", options: ["Lékárna", "Nemocnice", "Obchod"], translation: "בית מרקחת", type: "audio-select" },

    // --- חלק 4: שאלות שימושיות אצל הרופא ---
    { question: "איך אומרים 'אני מרגישה לא טוב' (נקבה)?", word: "Je mi špatně", options: ["Je mi dobře", "Je mi špatně", "Jsem unavená"], translation: "I feel bad / not well", type: "translate-select" },
    { question: "איך אומרים 'כואבת לי הבטן'?", word: "Bolí mě břicho", options: ["Bolí mě břicho", "Bolí mě hlava", "Bolí mě záda"], translation: "My stomach hurts", type: "translate-select" },
    { question: "איך אומרים 'אני חולה' (זכר)?", word: "Jsem nemocný", options: ["Jsem nemocný", "Jsem zdravý", "Jsem unavený"], translation: "I am sick (m)", type: "translate-select" },
    { question: "איך אומרים 'יש לי חום'?", word: "Mám horečku", options: ["Mám horečku", "Mám rýmu", "Mám kašel"], translation: "I have a fever", type: "translate-select" },
    { question: "איך אומרים 'אני אלרגית ל…' (נקבה)?", word: "Jsem alergická na...", options: ["Jsem alergická na...", "Jsem těhotná", "Jsem nemocná"], translation: "I am allergic to...", type: "translate-select" },

    // --- חלק 5: מחלות ותסמינים ---
    { word: "Rýma", options: ["Rýma", "Kašel", "Horečka"], translation: "נזלת", type: "audio-select" },
    { word: "Kašel", options: ["Rýma", "Kašel", "Bolest"], translation: "שיעול", type: "audio-select" },
    { word: "Horečka", options: ["Rýma", "Horečka", "Bolest"], translation: "חום", type: "audio-select" },
    { word: "Bolest", options: ["Bolest", "Nemoc", "Zdraví"], translation: "כאב", type: "audio-select" },
    { word: "Lék", options: ["Lék", "Lékař", "Lékárna"], translation: "תרופה", type: "audio-select" },

    // --- חלק 6: סידור משפטים (ביקור אצל הרופא) ---
    { type: "word-order", words: ["Mám", "rýmu", "a", "kašel"], translation: "יש לי נזלת ושיעול" },
    { type: "word-order", words: ["Bolí", "mě", "břicho"], translation: "כואבת לי הבטן" },
    { type: "word-order", words: ["Chci", "k", "doktorovi"], translation: "אני רוצה לרופא" },
    { type: "word-order", words: ["Musím", "do", "nemocnice"], translation: "אני חייב/ת לבית חולים" },
    { type: "word-order", words: ["Mám", "alergii", "na", "penicilin"], translation: "יש לי אלרגיה לפניצילין" }
  ]
},
"lesson-14": {
  title: "שיעור 14: כסף ובנק",
  questions: [
    // --- חלק 1: כסף בסיסי ומטבע ---
    { word: "Peníze", options: ["Peníze", "Karta", "Banka"], translation: "כסף", type: "audio-select" },
    { word: "Koruna", options: ["Koruna", "Euro", "Dolar"], translation: "קורונה (מטבע צ'כי)", type: "audio-select" },
    { word: "Euro", options: ["Koruna", "Euro", "Libra"], translation: "אירו", type: "audio-select" },
    { word: "Bankovka", options: ["Bankovka", "Mince", "Karta"], translation: "שטר", type: "audio-select" },
    { word: "Mince", options: ["Mince", "Bankovka", "Účet"], translation: "מטבע", type: "audio-select" },

    // --- חלק 2: בבנק ובחשבון ---
    { word: "Banka", options: ["Banka", "Obchod", "Pošta"], translation: "בנק", type: "audio-select" },
    { word: "Účet", options: ["Účet", "Karta", "Peníze"], translation: "חשבון (בנק / חשבון לתשלום)", type: "audio-select" },
    { word: "Bankovní účet", options: ["Bankovní účet", "Spoření", "Půjčka"], translation: "חשבון בנק", type: "audio-select" },
    { word: "Hotovost", options: ["Hotovost", "Karta", "Půjčka"], translation: "מזומן", type: "audio-select" },
    { word: "Platební karta", options: ["Platební karta", "Hotovost", "Mince"], translation: "כרטיס תשלום (אשראי/דביט)", type: "audio-select" },

    // --- חלק 3: פעולות בנקאיות ---
    { word: "Vklad", options: ["Vklad", "Výběr", "Převod"], translation: "הפקדה", type: "audio-select" },
    { word: "Výběr", options: ["Vklad", "Výběr", "Půjčka"], translation: "משיכה", type: "audio-select" },
    { word: "Převod", options: ["Převod", "Úrok", "Výběr"], translation: "העברה (בנקאית)", type: "audio-select" },
    { word: "Půjčka", options: ["Půjčka", "Spoření", "Účet"], translation: "הלוואה", type: "audio-select" },
    { word: "Spoření", options: ["Spoření", "Půjčka", "Úrok"], translation: "חיסכון", type: "audio-select" },
    { word: "Úrok", options: ["Úrok", "Platba", "Výplata"], translation: "ריבית", type: "audio-select" },

    // --- חלק 4: תשלומים וקניות ---
    { word: "Platba", options: ["Platba", "Výplata", "Sleva"], translation: "תשלום", type: "audio-select" },
    { word: "Výplata", options: ["Výplata", "Půjčka", "Platba"], translation: "משכורת (תשלום שמקבלים)", type: "audio-select" },
    { word: "Sleva", options: ["Sleva", "Cena", "Drahý"], translation: "הנחה", type: "audio-select" },
    { word: "Drahý", options: ["Drahý", "Levný", "Zadarmo"], translation: "יקר", type: "audio-select" },
    { word: "Levný", options: ["Levný", "Drahý", "Zadarmo"], translation: "זול", type: "audio-select" },
    { word: "Zadarmo", options: ["Zadarmo", "Drahý", "Sleva"], translation: "בחינם", type: "audio-select" },

    // --- חלק 5: שאלות שימושיות ---
    { question: "איך שואלים 'כמה זה עולה?'?", word: "Kolik to stojí?", options: ["Kolik to stojí?", "Kolik je hodin?", "Kde to je?"], translation: "כמה זה עולה?", type: "translate-select" },
    { question: "איך אומרים 'אפשר לשלם בכרטיס?'?", word: "Můžu platit kartou?", options: ["Můžu platit kartou?", "Můžu platit hotově?", "Můžu to zkusit?"], translation: "אפשר לשלם בכרטיס?", type: "translate-select" },
    { question: "איך אומרים 'איפה הכספומט?'?", word: "Kde je bankomat?", options: ["Kde je bankomat?", "Kde je banka?", "Kde je pokladna?"], translation: "איפה הכספומט?", type: "translate-select" },
    { question: "איך אומרים 'אני צריך לפתוח חשבון בנק'?", word: "Potřebuji si otevřít účet v bance.", options: ["Potřebuji si otevřít účet v bance.", "Potřebuji zaplatit účet.", "Potřebuji hotovost."], translation: "אני צריך לפתוח חשבון בנק.", type: "translate-select" },
    { question: "איך אומרים 'אני רוצה להחליף כסף'?", word: "Chci vyměnit peníze.", options: ["Chci vyměnit peníze.", "Chci vybrat peníze.", "Chci vložit peníze."], translation: "אני רוצה להחליף כסף.", type: "translate-select" },

    // --- חלק 6: סידור משפטים (בבנק ובכסף) ---
    { type: "word-order", words: ["Kolik", "to", "stojí?"], translation: "כמה זה עולה?" },
    { type: "word-order", words: ["Můžu", "platit", "kartou?"], translation: "אפשר לשלם בכרטיס?" },
    { type: "word-order", words: ["Chci", "vybrat", "peníze"], translation: "אני רוצה למשוך כסף" },
    { type: "word-order", words: ["Potřebuji", "vyměnit", "eura"], translation: "אני צריך להחליף אירו" },
    { type: "word-order", words: ["Mám", "účet", "v", "české", "bance"], translation: "יש לי חשבון בבנק צ'כי" }
  ]
},
    "lesson-15": {
      title: "שיעור 15: שאלות באוניברסיטה",
      questions: [
        // --- חלק 1: מילים בסיסיות באוניברסיטה (חיזוק לקסיקון) ---
        { word: "Univerzita", options: ["Univerzita", "Škola", "Kancelář"], translation: "אוניברסיטה", type: "audio-select" },
        { word: "Fakulta", options: ["Fakulta", "Nemocnice", "Banka"], translation: "פקולטה", type: "audio-select" },
        { word: "Knihovna", options: ["Knihovna", "Kavárna", "Menza"], translation: "ספרייה", type: "audio-select" },
        { word: "Učebna", options: ["Učebna", "Kancelář", "Pokoj"], translation: "כיתת לימוד", type: "audio-select" },
        { word: "Menza", options: ["Menza", "Restaurace", "Kavárna"], translation: "קפיטריה / חדר אוכל סטודנטים", type: "audio-select" },
        { word: "Hodina", options: ["Hodina", "Den", "Týden"], translation: "שיעור / שעה", type: "audio-select" },

        // --- חלק 2: שאלות בסיסיות (מה, איפה, מתי) ---
        { word: "Co?", options: ["Co?", "Kde?", "Kdy?"], translation: "מה?", type: "audio-select" },
        { word: "Kde?", options: ["Co?", "Kde?", "Kdo?"], translation: "איפה?", type: "audio-select" },
        { word: "Kdy?", options: ["Kdy?", "Kolik?", "Jak?"], translation: "מתי?", type: "audio-select" },
        { word: "Kolik?", options: ["Kolik?", "Kdo?", "Co?"], translation: "כמה?", type: "audio-select" },
        { word: "Proč?", options: ["Proč?", "Kde?", "Kdy?"], translation: "למה?", type: "audio-select" },
        { word: "Jak?", options: ["Jak?", "Kdo?", "Kolik?"], translation: "איך?", type: "audio-select" },

        // --- חלק 3: שאלות שימושיות באוניברסיטה ---
        { question: "איך שואלים 'איפה הספרייה?'?", word: "Kde je knihovna?", options: ["Kde je knihovna?", "Kdy je knihovna?", "Co je knihovna?"], translation: "איפה הספרייה?", type: "translate-select" },
        { question: "איך שואלים 'איפה הכיתה 12?'?", word: "Kde je učebna 12?", options: ["Kde je učebna 12?", "Kde je fakulta?", "Co je učebna 12?"], translation: "איפה כיתה 12?", type: "translate-select" },
        { question: "איך שואלים 'מתי השיעור?'?", word: "Kdy je hodina?", options: ["Kdy je hodina?", "Kde je hodina?", "Kolik je hodina?"], translation: "מתי השיעור?", type: "translate-select" },
        { question: "איך שואלים 'איזה קורס יש היום?'?", word: "Jaký kurz je dnes?", options: ["Jaký kurz je dnes?", "Jaký kurz je zítra?", "Jaká je knihovna dnes?"], translation: "איזה קורס יש היום?", type: "translate-select" },
        { question: "איך שואלים 'כמה זמן השיעור?'?", word: "Kolik trvá hodina?", options: ["Kolik trvá hodina?", "Kolik stojí hodina?", "Kdy trvá hodina?"], translation: "כמה זמן השיעור?", type: "translate-select" },
        { question: "איך שואלים 'איזה חדר זה?'?", word: "Jaký je to pokoj?", options: ["Jaký je to pokoj?", "Kde je to pokoj?", "Co je to pokoj?"], translation: "איזה חדר זה?", type: "translate-select" },

        // --- חלק 4: שאלות על לימודים (מחזקים גם מילים מוכרות) ---
        { question: "איך שואלים 'מה את/ה לומד/ת?'?", word: "Co studuješ?", options: ["Co studuješ?", "Kde studuješ?", "Kdy studuješ?"], translation: "מה אתה לומד?", type: "translate-select" },
        { question: "איך שואלים 'איפה את/ה לומד/ת?'?", word: "Kde studuješ?", options: ["Kde studuješ?", "Kdo studuješ?", "Kdy studuješ?"], translation: "איפה אתה לומד?", type: "translate-select" },
        { question: "איך שואלים 'עם מי את/ה לומד/ת?'?", word: "S kým studuješ?", options: ["S kým studuješ?", "Co studuješ?", "Kde studuješ?"], translation: "עם מי אתה לומד?", type: "translate-select" },
        { question: "איך שואלים 'למה את/ה לומד/ת צ'כית?'?", word: "Proč studuješ češtinu?", options: ["Proč studuješ češtinu?", "Kde studuješ češtinu?", "Co je čeština?"], translation: "למה אתה לומד צ'כית?", type: "translate-select" },
        { question: "איך שואלים 'מתי יש לך מבחן?'?", word: "Kdy máš zkoušku?", options: ["Kdy máš zkoušku?", "Kde máš zkoušku?", "Co máš zkoušku?"], translation: "מתי יש לך מבחן?", type: "translate-select" },
        { question: "איך שואלים 'כמה מבחנים יש לך השבוע?'?", word: "Kolik zkoušek máš tento týden?", options: ["Kolik zkoušek máš tento týden?", "Kolik hodin máš dnes?", "Kolik stojí zkouška?"], translation: "כמה מבחנים יש לך השבוע?", type: "translate-select" },

        // --- חלק 5: סידור משפטים עם שאלות ---
        { type: "word-order", words: ["Kde", "je", "univerzita?"], translation: "איפה האוניברסיטה?" },
        { type: "word-order", words: ["Kdy", "máš", "hodinu?"], translation: "מתי יש לך שיעור?" },
        { type: "word-order", words: ["Co", "dnes", "studuješ?"], translation: "מה אתה לומד היום?" },
        { type: "word-order", words: ["Kolik", "zkoušek", "máš?"], translation: "כמה מבחנים יש לך?" },
        { type: "word-order", words: ["Kde", "je", "knihovna?"], translation: "איפה הספרייה?" }
      ]
},
    "lesson-16": {
      title: "שיעור 16: פעלים בזמן הווה בטיולים",
      questions: [
        // --- חלק 1: פעלים מוכרים בהווה (חיזוק אוטומטיות) ---
        { word: "Jdu", options: ["Jdu", "Jedu", "Jím"], translation: "אני הולכת (ברגל)", type: "audio-select" },
        { word: "Jedu", options: ["Jdu", "Jedu", "Čtu"], translation: "אני נוסעת (ברכב/רכבת)", type: "audio-select" },
        { word: "Cestuju", options: ["Cestuju", "Pracuju", "Bydlím"], translation: "אני מטיילת / נוסעת", type: "audio-select" },
        { word: "Bydlím", options: ["Bydlím", "Jím", "Piju"], translation: "אני גרה", type: "audio-select" },
        { word: "Pracuju", options: ["Pracuju", "Cestuju", "Spím"], translation: "אני עובדת", type: "audio-select" },
        { word: "Učím se", options: ["Učím se", "Učím", "Čtu"], translation: "אני לומדת (לעצמי)", type: "audio-select" },

        // --- חלק 2: פעלים לטיול ונוף ---
        { word: "Jdu na procházku", options: ["Jdu na procházku", "Jdu do práce", "Jdu do školy"], translation: "אני הולכת לטיול רגלי", type: "audio-select" },
        { word: "Jdu do parku", options: ["Jdu do parku", "Jdu do města", "Jdu do nemocnice"], translation: "אני הולכת לפארק", type: "audio-select" },
        { word: "Jedu do hor", options: ["Jedu do hor", "Jedu do města", "Jedu do školy"], translation: "אני נוסעת להרים", type: "audio-select" },
        { word: "Jedu k jezeru", options: ["Jedu k jezeru", "Jedu do práce", "Jedu do nemocnice"], translation: "אני נוסעת לאגם", type: "audio-select" },
        { word: "Fotím", options: ["Fotím", "Spím", "Píšu"], translation: "אני מצלמת", type: "audio-select" },
        { word: "Plavu", options: ["Plavu", "Piju", "Jím"], translation: "אני שוחה", type: "audio-select" },

        // --- חלק 3: משפטי הווה על טיול (חיבור בין דברים מוכרים) ---
        { question: "איך אומרים 'אני גרה בפראג ואני מטיילת הרבה'?", word: "Bydlím v Praze a hodně cestuju.", options: ["Bydlím v Praze a hodně cestuju.", "Jsem v Praze a hodně pracuju.", "Bydlím v Praze a málo cestuju."], translation: "אני גרה בפראג ומטיילת הרבה.", type: "translate-select" },
        { question: "איך אומרים 'היום אני הולכת לפארק'?", word: "Dnes jdu do parku.", options: ["Dnes jdu do parku.", "Včera jdu do parku.", "Dnes jedu do práce."], translation: "היום אני הולכת לפארק.", type: "translate-select" },
        { question: "איך אומרים 'מחר אני נוסעת להרים'?", word: "Zítra jedu do hor.", options: ["Zítra jedu do hor.", "Dnes jedu do hor.", "Zítra jdu do školy."], translation: "מחר אני נוסעת להרים.", type: "translate-select" },
        { question: "איך אומרים 'אני אוהבת טבע, אני הולכת ליער'?", word: "Mám ráda přírodu, jdu do lesa.", options: ["Mám ráda přírodu, jdu do lesa.", "Mám ráda město, jdu do práce.", "Mám ráda školu, jdu do školy."], translation: "אני אוהבת טבע, אני הולכת ליער.", type: "translate-select" },
        { question: "איך אומרים 'אני שוחה באגם'?", word: "Plavu v jezeře.", options: ["Plavu v jezeře.", "Plavu v řece.", "Jdu v jezeře."], translation: "אני שוחה באגם.", type: "translate-select" },
        { question: "איך אומרים 'אני מצלמת הרים'?", word: "Fotím hory.", options: ["Fotím hory.", "Fotím město.", "Fotím školu."], translation: "אני מצלמת הרים.", type: "translate-select" },

        // --- חלק 4: ערבוב לימודים + טיול (אותם פעלים, סיטואציות שונות) ---
        { question: "איך אומרים 'אני לומדת צ'כית בפארק'?", word: "Učím se česky v parku.", options: ["Učím se česky v parku.", "Učím se česky v práci.", "Pracuju česky v parku."], translation: "אני לומדת צ'כית בפארק.", type: "translate-select" },
        { question: "איך אומרים 'אני עובדת בפראג ומטיילת בסוף השבוע'?", word: "Pracuju v Praze a o víkendu cestuju.", options: ["Pracuju v Praze a o víkendu cestuju.", "Pracuju v Praze a o víkendu spím.", "Bydlím v Praze a o víkendu pracuju."], translation: "אני עובדת בפראג ומטיילת בסוף השבוע.", type: "translate-select" },
        { question: "איך אומרים 'אני הולכת ברגל לאוניברסיטה'?", word: "Jdu pěšky na univerzitu.", options: ["Jdu pěšky na univerzitu.", "Jedu autem na univerzitu.", "Jdu pěšky do Izraele."], translation: "אני הולכת ברגל לאוניברסיטה.", type: "translate-select" },
        { question: "איך אומרים 'אני נוסעת באוטובוס להרים'?", word: "Jedu autobusem do hor.", options: ["Jedu autobusem do hor.", "Jdu autobusem do hor.", "Jedu vlakem do hor."], translation: "אני נוסעת באוטובוס להרים.", type: "translate-select" },

        // --- חלק 5: סידור משפטים – יומן טיול קטן ---
        { type: "word-order", words: ["Bydlím", "v", "Praze", "a", "cestuju"], translation: "אני גרה בפראג ומטיילת" },
        { type: "word-order", words: ["Dnes", "jdu", "na", "procházku"], translation: "היום אני הולכת לטיול רגלי" },
        { type: "word-order", words: ["Zítra", "jedu", "do", "hor"], translation: "מחר אני נוסעת להרים" },
        { type: "word-order", words: ["Ráda", "fotím", "přírodu"], translation: "אני אוהבת לצלם טבע" },
        { type: "word-order", words: ["Učím", "se", "česky", "každý", "den"], translation: "אני לומדת צ'כית כל יום" }
      ]
    }
    };