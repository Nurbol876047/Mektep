// config.js
// config.js
window.GEMINI_API_KEY = "YOUR_API_KEY_HERE";
window.SCHOOL_INFO = "Т.Жүргенов атындағы #80 мектеп-гимназиясы";
window.USER_NAME = "Утемуратова Нургул Даражаевна";

window.schoolMockData = {
  "attendance": {
    "description": "Оқушылардың күнделікті сабаққа қатысуы (жылдық, ауысым бойынша)",
    "monitoring_note": "Оқушылардың күнделікті сабаққа қатысуы үнемі бақылауда болды.",

    "shift_1": {
      "description": "1, 4, 7, 8, 9-сынып оқушылары",
      "grades": ["1", "4", "7", "8", "9"],
      "overall_attendance_percent": 97.0,
      "absence_percent": 2.2,
      "by_grade": {
        "1": 99.2,
        "4": 98.8,
        "7": 97.4,
        "8": 78.8,
        "9": 74.0
      }
    },

    "shift_2": {
      "description": "2, 3, 5, 6-сынып оқушылары",
      "grades": ["2", "3", "5", "6"],
      "by_grade": {
        "2_3": 98.6,
        "5": 98.0,
        "6": 97.8
      }
    },

    "note": "Кейбір оқушылардың сабаққа келмей қалу себептері дер кезінде анықталып, олардың ата-аналарына түсіндірме жұмыстары жүргізілді."
  },
  "education_quality": {
    "description": "Тоқсандар бойынша білім сапасы мен үлгерім көрсеткіштері (2025-2026 оқу жылы)",
    "legal_basis": "ҚР Оқу-ағарту министрінің 16.09.2022 №399, 21.11.2022 №467, 05.07.2023 №199 бұйрықтарына сәйкес",
    "quarters": [
      {
        "quarter": 1,
        "students_grade1": 207,
        "students_grade2_9": 1691,
        "quality_percent": 59.1,
        "performance_percent": 99.8,
        "excellent_students": 246,
        "good_students": 753,
        "satisfactory_students": 688,
        "failing_students_count": 3,
        "not_certified": [{ "name": "Серік Нұрсаян", "class": "5Г", "reason": "денсаулығына байланысты" }],
        "low_quality_classes": ["6Е", "7А", "7В", "8В", "8Д", "8Ж", "8З", "9А", "9Ә", "9Б", "9В", "9Г", "9Д"],
        "failing_students": [
          { "name": "Шаянбай Сырым", "class": "8Б", "subject": "география" },
          { "name": "Тастандиев Әділет", "class": "8Ж", "subject": "география" },
          { "name": "Ерсеит Ерсұлтан", "class": "8Ж", "subject": "география" }
        ],
        "class_breakdown": {
          "class_2": { "students": 181, "grade5": 34, "grade4": 83, "grade3": 64, "grade2": 0, "performance_pct": 100.0, "quality_pct": 64.4 },
          "class_3": { "students": 188, "grade5": 33, "grade4": 100, "grade3": 55, "grade2": 0, "performance_pct": 100.0, "quality_pct": 70.7 },
          "class_4": { "students": 238, "grade5": 48, "grade4": 120, "grade3": 70, "grade2": 0, "performance_pct": 100.0, "quality_pct": 70.5 },
          "class_5": { "students": 232, "grade5": 38, "grade4": 109, "grade3": 84, "grade2": 0, "not_certified": 1, "performance_pct": 100.0, "quality_pct": 63.3 },
          "class_6": { "students": 248, "grade5": 44, "grade4": 110, "grade3": 94, "grade2": 0, "performance_pct": 100.0, "quality_pct": 61.5 },
          "class_7": { "students": 186, "grade5": 13, "grade4": 76, "grade3": 97, "grade2": 0, "performance_pct": 100.0, "quality_pct": 48.1 },
          "class_8": { "students": 243, "grade5": 17, "grade4": 102, "grade3": 121, "grade2": 3, "performance_pct": 98.7, "quality_pct": 48.7 },
          "class_9": { "students": 175, "grade5": 19, "grade4": 53, "grade3": 103, "grade2": 0, "performance_pct": 100.0, "quality_pct": 41.0 },
          "total": { "students": 1691, "grade5": 246, "grade4": 753, "grade3": 688, "grade2": 3, "performance_pct": 99.8, "quality_pct": 59.1 }
        }
      },
      {
        "quarter": 2,
        "students_grade1": 208,
        "students_grade2_9": 1681,
        "quality_percent": 64.5,
        "performance_percent": 99.9,
        "excellent_students": 280,
        "good_students": 804,
        "satisfactory_students": 595,
        "not_certified": [],
        "low_quality_classes": ["8Б", "8Е", "8Ж", "8З", "9Д"],
        "failing_students": [
          { "name": "Давлетбаев Алдияр", "class": "8Г", "subject": "география" },
          { "name": "Серікбай Нұрислам", "class": "9В", "subject": "география" }
        ],
        "class_breakdown": {
          "class_2": { "students": 182, "grade5": 53, "grade4": 78, "grade3": 51, "grade2": 0, "performance_pct": 100.0, "quality_pct": 72.0 },
          "class_3": { "students": 188, "grade5": 38, "grade4": 105, "grade3": 45, "grade2": 0, "performance_pct": 100.0, "quality_pct": 76.1 },
          "class_4": { "students": 239, "grade5": 58, "grade4": 118, "grade3": 63, "grade2": 0, "performance_pct": 100.0, "quality_pct": 73.6 },
          "class_5": { "students": 229, "grade5": 40, "grade4": 111, "grade3": 78, "grade2": 0, "performance_pct": 100.0, "quality_pct": 65.9 },
          "class_6": { "students": 244, "grade5": 45, "grade4": 116, "grade3": 83, "grade2": 0, "performance_pct": 100.0, "quality_pct": 66.0 },
          "class_7": { "students": 185, "grade5": 14, "grade4": 85, "grade3": 86, "grade2": 0, "performance_pct": 100.0, "quality_pct": 53.5 },
          "class_8": { "students": 241, "grade5": 15, "grade4": 112, "grade3": 113, "grade2": 1, "performance_pct": 99.6, "quality_pct": 52.7 },
          "class_9": { "students": 173, "grade5": 17, "grade4": 79, "grade3": 76, "grade2": 1, "performance_pct": 99.4, "quality_pct": 55.5 },
          "total": { "students": 1681, "grade5": 280, "grade4": 804, "grade3": 595, "grade2": 2, "performance_pct": 99.9, "quality_pct": 64.5 }
        }
      },
      {
        "quarter": 3,
        "students_grade1": 193,
        "students_grade2_9": 1666,
        "quality_percent": 65.2,
        "quality_change_vs_prev_quarter": 0.7,
        "performance_percent": 99.5,
        "excellent_students": 338,
        "good_students": 748,
        "satisfactory_students": 572,
        "low_quality_classes": ["7Б", "7В", "7Г"],
        "not_certified_students": [
          { "class": "9А", "name": "Асил Руслан", "reason": "Футболдан ҚР чемпионаты, Шымкент қ. (6-17.03.2026), №98 бұйрық" },
          { "class": "9А", "name": "Бауыржанұлы Алишер", "reason": "Футболдан ҚР чемпионаты, Шымкент қ. (6-17.03.2026), №98 бұйрық" },
          { "class": "8Б", "name": "Мұратова Нұрдана", "reason": "Дзюдо ҚР чемпионаты, Қарағанды қ. (13-30.03.2026), №100 бұйрық" },
          { "class": "9Г", "name": "Балықбай Нұрасқан", "reason": "Ауру есебімен, анықтама бар (аяғы сынған)" },
          { "class": "9В", "name": "Есенгелді Еркежан", "reason": "ҚР чемпионаты, жоғарғы лига, Хромтау қ. (10-19.03.2026), №101 бұйрық" },
          { "class": "7Б", "name": "Сәбит Назерке", "reason": "Ауру есебімен, анықтама бар (12.03.2026-19.03.2026)" },
          { "class": "9Ә", "name": "Қыдыржан Арнат", "reason": "Халықаралық кикбоксинг, Қырғызстан, Қарақол қ. (9-20.03.2026), №99 бұйрық" }
        ],
        "class_breakdown": {
          "class_2": { "students": 185, "grade5": 61, "grade4": 75, "grade3": 49, "grade2": 0, "performance_pct": 100.0, "quality_pct": 73.5 },
          "class_3": { "students": 189, "grade5": 52, "grade4": 95, "grade3": 42, "grade2": 0, "performance_pct": 100.0, "quality_pct": 77.8 },
          "class_4": { "students": 236, "grade5": 60, "grade4": 115, "grade3": 61, "grade2": 0, "performance_pct": 100.0, "quality_pct": 74.2 },
          "class_5": { "students": 227, "grade5": 49, "grade4": 98, "grade3": 80, "grade2": 0, "performance_pct": 100.0, "quality_pct": 64.8 },
          "class_6": { "students": 242, "grade5": 54, "grade4": 109, "grade3": 79, "grade2": 0, "performance_pct": 100.0, "quality_pct": 67.4 },
          "class_7": { "students": 183, "grade5": 17, "grade4": 80, "grade3": 85, "grade2": 0, "not_certified": 1, "performance_pct": 99.5, "quality_pct": 53.0 },
          "class_8": { "students": 233, "grade5": 23, "grade4": 100, "grade3": 108, "grade2": 0, "not_certified": 2, "performance_pct": 99.1, "quality_pct": 52.8 },
          "class_9": { "students": 171, "grade5": 22, "grade4": 76, "grade3": 68, "grade2": 0, "not_certified": 5, "performance_pct": 97.1, "quality_pct": 57.3 },
          "total": { "students": 1666, "grade5": 338, "grade4": 748, "grade3": 572, "grade2": 0, "not_certified": 8, "performance_pct": 99.5, "quality_pct": 65.2 }
        }
      },
      {
        "quarter": 4,
        "students_grade1": 207,
        "students_grade2_9": 1663,
        "pre_school_students": 98,
        "quality_percent": 65.8,
        "quality_change_vs_prev_quarter": 0.6,
        "performance_percent": 100,
        "excellent_students": 337,
        "good_students": 754,
        "satisfactory_students": 572,
        "low_quality_classes": ["7В", "7Г", "8Ж", "8Е"],
        "class_breakdown": {
          "class_2": { "students": 185, "grade5": 63, "grade4": 78, "grade3": 44, "grade2": 0, "performance_pct": 100.0, "quality_pct": 76.2 },
          "class_3": { "students": 187, "grade5": 50, "grade4": 93, "grade3": 44, "grade2": 0, "performance_pct": 100.0, "quality_pct": 76.5 },
          "class_4": { "students": 235, "grade5": 60, "grade4": 116, "grade3": 59, "grade2": 0, "performance_pct": 100.0, "quality_pct": 74.9 },
          "class_5": { "students": 226, "grade5": 52, "grade4": 94, "grade3": 80, "grade2": 0, "performance_pct": 100.0, "quality_pct": 64.6 },
          "class_6": { "students": 242, "grade5": 56, "grade4": 108, "grade3": 78, "grade2": 0, "performance_pct": 100.0, "quality_pct": 67.8 },
          "class_7": { "students": 184, "grade5": 18, "grade4": 83, "grade3": 83, "grade2": 0, "performance_pct": 100.0, "quality_pct": 54.9 },
          "class_8": { "students": 233, "grade5": 20, "grade4": 104, "grade3": 109, "grade2": 0, "performance_pct": 100.0, "quality_pct": 53.2 },
          "class_9": { "students": 171, "grade5": 18, "grade4": 78, "grade3": 75, "grade2": 0, "performance_pct": 100.0, "quality_pct": 56.1 },
          "total": { "students": 1663, "grade5": 337, "grade4": 754, "grade3": 572, "grade2": 0, "performance_pct": 100.0, "quality_pct": 65.8 }
        }
      }
    ],
    "annual": {
      "quality_percent": 68.2,
      "performance_percent": 100,
      "excellent_students": 334,
      "good_students": 773,
      "satisfactory_students": 526,
      "quality_change_vs_q4": 2.4,
      "quality_change_vs_last_year": -1.9,
      "note": "Жылдық білім сапасы соңғы тоқсанмен салыстырғанда өсті, бірақ өткен оқу жылымен салыстырғанда 1,9%-ға төмендеді.",
      "class_breakdown": {
        "class_2": { "students": 185, "grade5": 64, "grade4": 72, "grade3": 49, "grade2": 0, "performance_pct": 100.0, "quality_pct": 73.5 },
        "class_3": { "students": 187, "grade5": 55, "grade4": 96, "grade3": 36, "grade2": 0, "performance_pct": 100.0, "quality_pct": 80.7 },
        "class_4": { "students": 235, "grade5": 67, "grade4": 114, "grade3": 54, "grade2": 0, "performance_pct": 100.0, "quality_pct": 77.0 },
        "class_5": { "students": 226, "grade5": 53, "grade4": 104, "grade3": 69, "grade2": 0, "performance_pct": 100.0, "quality_pct": 69.5 },
        "class_6": { "students": 242, "grade5": 60, "grade4": 112, "grade3": 70, "grade2": 0, "performance_pct": 100.0, "quality_pct": 71.1 },
        "class_7": { "students": 184, "grade5": 19, "grade4": 87, "grade3": 78, "grade2": 0, "performance_pct": 100.0, "quality_pct": 57.6 },
        "class_8": { "students": 233, "grade5": 24, "grade4": 107, "grade3": 102, "grade2": 0, "performance_pct": 100.0, "quality_pct": 56.2 },
        "class_9": { "students": 171, "grade5": 22, "grade4": 81, "grade3": 68, "grade2": 0, "performance_pct": 100.0, "quality_pct": 60.2 },
        "total": { "students": 1663, "grade5": 364, "grade4": 773, "grade3": 526, "grade2": 0, "performance_pct": 100.0, "quality_pct": 68.2 }
      }
    },
    "year_over_year_quality_dynamics": {
      "description": "2024-2025 және 2025-2026 оқу жылдарының тоқсандық білім сапасын салыстыру",
      "2024_2025": { "q1": null, "q2": 67.2, "q3": 67.4, "q4": 69.3, "annual": 70.1 },
      "2025_2026": { "q1": 59.1, "q2": 64.5, "q3": 65.2, "q4": 65.8, "annual": 68.2 },
      "dynamics": { "q2": -2.7, "q3": -2.2, "q4": -3.5, "annual": -2.9 }
    },
    "subjects_quality_comparison": {
      "description": "Пәндер бойынша білім сапасының 2024-2025 және 2025-2026 оқу жылдарымен салыстырмалы көрсеткіштері.",
      "subjects": [
        { "subject": "Қазақ тілі", "quality_2024_2025_pct": 72.7, "quality_2025_2026_pct": 74.6, "dynamics": 1.9 },
        { "subject": "Қазақ әдебиеті", "quality_2024_2025_pct": 75.5, "quality_2025_2026_pct": 76.0, "dynamics": 0.5 },
        { "subject": "Орыс тілі мен әдебиеті", "quality_2024_2025_pct": 75.2, "quality_2025_2026_pct": 79.1, "dynamics": 3.9 },
        { "subject": "Алгебра", "quality_2024_2025_pct": 68.0, "quality_2025_2026_pct": 65.6, "dynamics": -2.4 },
        { "subject": "Геометрия", "quality_2024_2025_pct": 69.1, "quality_2025_2026_pct": 65.0, "dynamics": -4.1 },
        { "subject": "Физика", "quality_2024_2025_pct": 73.4, "quality_2025_2026_pct": 69.9, "dynamics": -3.5 },
        { "subject": "Биология", "quality_2024_2025_pct": 77.1, "quality_2025_2026_pct": 70.6, "dynamics": -6.5 },
        { "subject": "География", "quality_2024_2025_pct": 82.5, "quality_2025_2026_pct": 71.8, "dynamics": -10.7 },
        { "subject": "Химия", "quality_2024_2025_pct": 78.1, "quality_2025_2026_pct": 70.4, "dynamics": -7.7 },
        { "subject": "Қазақстан тарихы", "quality_2024_2025_pct": 77.4, "quality_2025_2026_pct": 78.5, "dynamics": 1.1 },
        { "subject": "Дүниежүзі тарихы", "quality_2024_2025_pct": 78.3, "quality_2025_2026_pct": 82.8, "dynamics": 4.5 },
        { "subject": "Ағылшын тілі", "quality_2024_2025_pct": 74.3, "quality_2025_2026_pct": 85.9, "dynamics": 11.6 },
        { "subject": "Информатика", "quality_2024_2025_pct": 96.4, "quality_2025_2026_pct": 91.4, "dynamics": -5.0 },
        { "subject": "Құқық негіздері", "quality_2024_2025_pct": null, "quality_2025_2026_pct": 76.6, "dynamics": null }
      ],
      "note": "Кейбір пәндердің былтырғы жылмен салыстырғанда төмен көрсеткіш көрсетуі (әсіресе география -10.7, химия -7.7, биология -6.5) жылдық білім сапасының жалпы төмендеуіне сәйкес келеді."
    }
  },
  "internal_control_q1_2025_2026": {
    "meta": {
      "country": "Қазақстан Республикасы",
      "organization": "Жамбыл облысы әкімдігінің білім басқармасы Тараз қаласының білім бөлімінің №66 орта мектебі КММ",
      "document_title": "І тоқсан бойынша ішкі бақылау кесінділерінің қорытындысы",
      "academic_year": "2025-2026",
      "test_period": "13.10.2025 - 17.10.2025",
      "purpose": "5-9 сынып білім алушыларынан білім сапасының деңгейін анықтап, талдау, білім алушылардың оқу жетістігінің ілгерілеуіне ықпал ету",
      "responsible_for_execution": "ДҒӘІЖО Н.Ногаева"
    },
    "grades": [
      {
        "grade": 5,
        "subjects_tested": ["қазақ тілі", "орыс тілі", "математика"],
        "total_questions": 60,
        "best_class": {"class": "5 А,В,Г,Ж,З", "result_percent": 70},
        "worst_class": {"class": "5 Д", "result_percent": 65},
        "classes": [
          {"class": "5 А", "kazakh_tili": {"percent": 65, "avg_score": 13}, "orys_tili": {"percent": 70, "avg_score": 14}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Отарбаева М.", "Бейсеева Л.", "Нурбекова А.", "Клышбекова А."]},
          {"class": "5 Ә", "kazakh_tili": {"percent": 65, "avg_score": 13}, "orys_tili": {"percent": 65, "avg_score": 13}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Карасаева Ж.", "Дуанакулова А.", "Нурбекова А.", "Баймұратқызы А."]},
          {"class": "5 Б", "kazakh_tili": {"percent": 65, "avg_score": 13}, "orys_tili": {"percent": 70, "avg_score": 14}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Ногаева Н.", "Дуанакулова А.", "Нурбекова А.", "Баймұратқызы А."]},
          {"class": "5 В", "kazakh_tili": {"percent": 65, "avg_score": 13}, "orys_tili": {"percent": 70, "avg_score": 14}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Ногаева Н.", "Наметов А.", "Хабдирова Н.", "Иманбекова А."]},
          {"class": "5 Г", "kazakh_tili": {"percent": 70, "avg_score": 14}, "orys_tili": {"percent": 65, "avg_score": 13}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Карасаева Ж.", "Клышбекова А.", "Хабдирова Н.", "Баймұратқызы А."]},
          {"class": "5 Д", "kazakh_tili": {"percent": 65, "avg_score": 13}, "orys_tili": {"percent": 55, "avg_score": 11}, "matematika": {"percent": 65, "avg_score": 13}, "teachers": ["Омарова А.", "Наметов А.", "Бейсеева Л.", "Махамбетова С."]},
          {"class": "5 Е", "kazakh_tili": {"percent": 60, "avg_score": 12}, "orys_tili": {"percent": 65, "avg_score": 13}, "matematika": {"percent": 75, "avg_score": 15}, "teachers": ["Омарова А.", "Бейсеева Л.", "Иманбекова А.", "Жаңабай А."]},
          {"class": "5 Ж", "kazakh_tili": {"percent": 60, "avg_score": 12}, "orys_tili": {"percent": 70, "avg_score": 14}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Карасаева Ж.", "Бейсеева Л.", "Иманбекова А.", "Жаңабай А."]},
          {"class": "5 З", "kazakh_tili": {"percent": 55, "avg_score": 11}, "orys_tili": {"percent": 72, "avg_score": 14}, "matematika": {"percent": 75, "avg_score": 15}, "teachers": ["Отарбаева М.", "Баймұратқызы А.", "Иманбекова А.", "Наметов А."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "5 З", "percent": 55, "avg_score": 11, "teacher": "Заурбекова М."}, "highest": {"class": "5 Г", "percent": 70, "avg_score": 14}},
          "orys_tili": {"lowest": {"class": "5 Д", "percent": 55, "avg_score": 11, "teachers": ["Махамбетова С.", "Жұматаева А."]}, "highest": {"class": "5 З", "percent": 72, "avg_score": 14}},
          "matematika": {"lowest": {"class": "5 Д", "percent": 65, "avg_score": 13, "teacher": "Наметов А."}, "highest": {"class": "5 З", "percent": 75, "avg_score": 15}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "5 А", "kazakh_tili": {"control_percent": 65, "TZhB_score": "92 (of 20)", "TZhB_percent": 92, "quarter_quality_percent": 92, "difference": -27}, "orys_tili": {"control_percent": 70, "TZhB_score": "92.76 (of 20)", "TZhB_percent": null, "quarter_quality_percent": 88, "difference": -18}, "matematika": {"control_percent": 70, "TZhB_score": "46 (of 20)", "quarter_quality_percent": 73, "difference": -3}},
          {"class": "5 Ә", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 62, "quarter_quality_percent": 62, "difference": null}, "orys_tili": {"control_percent": 65, "TZhB_percent": 57.69, "quarter_quality_percent": 66, "difference": -1}, "matematika": {"control_percent": 70, "TZhB_percent": 66, "quarter_quality_percent": 66, "difference": 4}},
          {"class": "5 Б", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 92, "quarter_quality_percent": 85, "difference": -20}, "orys_tili": {"control_percent": 70, "TZhB_percent": 84.85, "quarter_quality_percent": 85, "difference": -15}, "matematika": {"control_percent": 70, "TZhB_percent": 92, "quarter_quality_percent": 92, "difference": -22}},
          {"class": "5 В", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 75, "quarter_quality_percent": 75, "difference": -10}, "orys_tili": {"control_percent": 70, "TZhB_percent": 83.66, "quarter_quality_percent": 79, "difference": -9}, "matematika": {"control_percent": 70, "TZhB_percent": 41, "quarter_quality_percent": 66, "difference": -4}},
          {"class": "5 Г", "kazakh_tili": {"control_percent": 70, "TZhB_percent": 70, "quarter_quality_percent": 70, "difference": null}, "orys_tili": {"control_percent": 65, "TZhB_percent": 100.83, "quarter_quality_percent": 91, "difference": -26}, "matematika": {"control_percent": 70, "TZhB_percent": 45, "quarter_quality_percent": 66, "difference": -4}},
          {"class": "5 Д", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 68, "quarter_quality_percent": 72, "difference": -7}, "orys_tili": {"control_percent": 55, "TZhB_percent": 53.58, "quarter_quality_percent": 56, "difference": -1}, "matematika": {"control_percent": 65, "TZhB_percent": 56, "quarter_quality_percent": 64, "difference": -1}},
          {"class": "5 Е", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 92, "quarter_quality_percent": 75, "difference": -15}, "orys_tili": {"control_percent": 65, "TZhB_percent": 64.71, "quarter_quality_percent": 71, "difference": -6}, "matematika": {"control_percent": 75, "TZhB_percent": 78, "quarter_quality_percent": 57, "difference": -18}},
          {"class": "5 Ж", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 69, "quarter_quality_percent": 57, "difference": 3}, "orys_tili": {"control_percent": 70, "TZhB_percent": 76.69, "quarter_quality_percent": 76, "difference": -6}, "matematika": {"control_percent": 70, "TZhB_percent": 92, "quarter_quality_percent": 61, "difference": -9}},
          {"class": "5 З", "kazakh_tili": {"control_percent": 55, "TZhB_percent": 88, "quarter_quality_percent": 88, "difference": -33}, "orys_tili": {"control_percent": 72, "TZhB_percent": 66.76, "quarter_quality_percent": 76, "difference": -4}, "matematika": {"control_percent": 75, "TZhB_percent": 40, "quarter_quality_percent": 60, "difference": -15}}
        ]
      },
      {
        "grade": 6,
        "subjects_tested": ["қазақ тілі", "математика", "жаратылыстану"],
        "total_questions": 60,
        "best_class": {"class": "6 В", "result_percent": 70},
        "worst_class": {"class": "6 И", "result_percent": 69},
        "classes": [
          {"class": "6 А", "kazakh_tili": {"percent": 80, "avg_score": 16}, "matematika": {"percent": 70, "avg_score": 14}, "zharatylystanu": {"percent": 70, "avg_score": 14}, "teachers": ["Қарасаева Ж.", "Дуанакулова А.", "Ерікқызы Г."]},
          {"class": "6 Ә", "kazakh_tili": {"percent": 75, "avg_score": 15}, "matematika": {"percent": 65, "avg_score": 13}, "zharatylystanu": {"percent": 65, "avg_score": 13}, "teachers": ["Қарасаева Ж.", "Дуанакулова А.", "Ерікқызы Г."]},
          {"class": "6 Б", "kazakh_tili": {"percent": 75, "avg_score": 15}, "matematika": {"percent": 65, "avg_score": 13}, "zharatylystanu": {"percent": 75, "avg_score": 15}, "teachers": ["Дуанакулова А.", "Байлиева Ж.", "Ерікқызы Г."]},
          {"class": "6 В", "kazakh_tili": {"percent": 80, "avg_score": 16}, "matematika": {"percent": 75, "avg_score": 15}, "zharatylystanu": {"percent": 80, "avg_score": 16}, "teachers": ["Отарбаева М.", "Әбсаттар П.", "Ерікқызы Г."]},
          {"class": "6 Г", "kazakh_tili": {"percent": 75, "avg_score": 15}, "matematika": {"percent": 60, "avg_score": 12}, "zharatylystanu": {"percent": 75, "avg_score": 15}, "teachers": ["Қарасаева Ж.", "Әбсаттар П.", "Ерікқызы Г."]},
          {"class": "6 Д", "kazakh_tili": {"percent": 65, "avg_score": 13}, "matematika": {"percent": 60, "avg_score": 14}, "zharatylystanu": {"percent": 65, "avg_score": 14}, "teachers": ["Даурен Қ.", "Әбсаттар П.", "Қалтаева Ф."]},
          {"class": "6 Е", "kazakh_tili": {"percent": 75, "avg_score": 15}, "matematika": {"percent": 70, "avg_score": 14}, "zharatylystanu": {"percent": 75, "avg_score": 15}, "teachers": ["Омарова А.", "Жаңабай А.", "Исраилов Н."]},
          {"class": "6 Ж", "kazakh_tili": {"percent": 65, "avg_score": 13}, "matematika": {"percent": 70, "avg_score": 14}, "zharatylystanu": {"percent": 70, "avg_score": 14}, "teachers": ["Жаңабай А.", "Исраилов Н.", "Заурбекова М."]},
          {"class": "6 З", "kazakh_tili": {"percent": 75, "avg_score": 15}, "matematika": {"percent": 70, "avg_score": 14}, "zharatylystanu": {"percent": 80, "avg_score": 16}, "teachers": ["Шаханова З.", "Исраилов Н.", "Ерікқызы Г.", "Отарбаева М."]},
          {"class": "6 И", "kazakh_tili": {"percent": 70, "avg_score": 14}, "matematika": {"percent": 55, "avg_score": 11}, "zharatylystanu": {"percent": 75, "avg_score": 15}, "teachers": ["Отарбаева М.", "Хожа Ахмедов Бауыржан", "Исраилов Н."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"classes": ["6 Ж", "6 Д"], "percent": 65, "avg_score": 13, "teachers": ["Заурбекова М.", "Даурен Қ."]}, "highest": {"classes": ["6 А", "6 В"], "percent": 80, "avg_score": 16}},
          "matematika": {"lowest": {"class": "6 И", "percent": 55, "avg_score": 11, "teacher": "Хожа Ахмедов Б."}, "highest": {"class": "6 В", "percent": 75, "avg_score": 15}},
          "zharatylystanu": {"lowest": {"classes": ["6 Ә", "6 Д"], "percent": 65, "avg_score": 13, "teacher": "Ерікқызы Г."}, "highest": {"classes": ["6 В", "6 З"], "percent": 80, "avg_score": 16}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "6 А", "kazakh_tili": {"control_score_percent": "16/80", "TZhB_percent": 96, "quarter_quality_percent": 96, "difference": -16}, "matematika": {"control_score_percent": "14/70", "TZhB_percent": 92, "quarter_quality_percent": 88, "difference": -18}, "zharatylystanu": {"control_score_percent": "14/70", "TZhB_percent": 77, "quarter_quality_percent": 81, "difference": -11}},
          {"class": "6 Ә", "kazakh_tili": {"control_score_percent": "15/75", "TZhB_percent": 88, "quarter_quality_percent": 88, "difference": -13}, "matematika": {"control_score_percent": "13/65", "TZhB_percent": 74, "quarter_quality_percent": 74, "difference": -9}, "zharatylystanu": {"control_score_percent": "13/65", "TZhB_percent": 77, "quarter_quality_percent": 77, "difference": -12}},
          {"class": "6 Б", "kazakh_tili": {"control_score_percent": "15/75", "TZhB_percent": 73, "quarter_quality_percent": 76, "difference": null}, "matematika": {"control_score_percent": "13/65", "TZhB_percent": 88, "quarter_quality_percent": 73, "difference": -8}, "zharatylystanu": {"control_score_percent": "15/75", "TZhB_percent": 76, "quarter_quality_percent": 76, "difference": 1}},
          {"class": "6 В", "kazakh_tili": {"control_score_percent": "16/80", "TZhB_percent": 92, "quarter_quality_percent": 96, "difference": -16}, "matematika": {"control_score_percent": "15/75", "TZhB_percent": 84, "quarter_quality_percent": 84, "difference": -9}, "zharatylystanu": {"control_score_percent": "16/80", "TZhB_percent": 88, "quarter_quality_percent": 92, "difference": -12}},
          {"class": "6 Г", "kazakh_tili": {"control_score_percent": "15/75", "TZhB_percent": 74, "quarter_quality_percent": 74, "difference": 1}, "matematika": {"control_score_percent": "12/60", "TZhB_percent": 51, "quarter_quality_percent": 59, "difference": 1}, "zharatylystanu": {"control_score_percent": "15/75", "TZhB_percent": 81, "quarter_quality_percent": 81, "difference": -6}},
          {"class": "6 Д", "kazakh_tili": {"control_score_percent": "13/65", "TZhB_percent": 72, "quarter_quality_percent": 68, "difference": -3}, "matematika": {"control_score_percent": "13/67", "TZhB_percent": 59, "quarter_quality_percent": 68, "difference": -1}, "zharatylystanu": {"control_score_percent": "12/60", "TZhB_percent": 68, "quarter_quality_percent": 72, "difference": -12}},
          {"class": "6 Е", "kazakh_tili": {"control_score_percent": "15/75", "TZhB_percent": 64, "quarter_quality_percent": 68, "difference": 7}, "matematika": {"control_score_percent": "14/70", "TZhB_percent": 64, "quarter_quality_percent": 52, "difference": 18}, "zharatylystanu": {"control_score_percent": "15/75", "TZhB_percent": 100, "quarter_quality_percent": 84, "difference": -9}},
          {"class": "6 Ж", "kazakh_tili": {"control_score_percent": "14/70", "TZhB_percent": 73, "quarter_quality_percent": 78, "difference": -8}, "matematika": {"control_score_percent": "14/70", "TZhB_percent": 91, "quarter_quality_percent": 60, "difference": 10}, "zharatylystanu": {"control_score_percent": "14/70", "TZhB_percent": 95, "quarter_quality_percent": 91, "difference": -21}},
          {"class": "6 З", "kazakh_tili": {"control_score_percent": "15/75", "TZhB_percent": 80, "quarter_quality_percent": 80, "difference": -5}, "matematika": {"control_score_percent": "14/70", "TZhB_percent": 42, "quarter_quality_percent": 52, "difference": 18}, "zharatylystanu": {"control_score_percent": "16/80", "TZhB_percent": 100, "quarter_quality_percent": null, "difference": -20}},
          {"class": "6 И", "kazakh_tili": {"control_score_percent": "14/70", "TZhB_percent": 66, "quarter_quality_percent": 66, "difference": 4}, "matematika": {"control_score_percent": "11/55", "TZhB_percent": 58, "quarter_quality_percent": 58, "difference": 3}, "zharatylystanu": {"control_score_percent": "15/75", "TZhB_percent": 54, "quarter_quality_percent": 54, "difference": 19}}
        ]
      },
      {
        "grade": 7,
        "subjects_tested": ["қазақ тілі", "алгебра", "ағылшын тілі", "қазақстан тарихы"],
        "total_questions": 80,
        "best_class": {"class": "7 А", "result_percent": 65},
        "worst_class": {"class": "7 Г", "result_percent": 42},
        "classes": [
          {"class": "7 А", "kazakh_tili": {"percent": 85, "avg_score": 17}, "algebra": {"percent": 55, "avg_score": 11}, "agylshyn": {"percent": 55, "avg_score": 11}, "kazakhstan_tarihy": {"percent": 60, "avg_score": 12}, "teachers": ["Әбсаттар П.", "Жумагалиева А.", "Тамабекова Н.", "Қарасаева Ж."]},
          {"class": "7 Ә", "kazakh_tili": {"percent": 80, "avg_score": 16}, "algebra": {"percent": 45, "avg_score": 9}, "agylshyn": {"percent": 45, "avg_score": 9}, "kazakhstan_tarihy": {"percent": 35, "avg_score": 7}, "teachers": ["Клышбекова А.", "Шырханова А.", "Тұрғынбек М.", "Байлиева Ж.", "Кадырбаева Д."]},
          {"class": "7 Б", "kazakh_tili": {"percent": 70, "avg_score": 14}, "algebra": {"percent": 50, "avg_score": 10}, "agylshyn": {"percent": 50, "avg_score": 10}, "kazakhstan_tarihy": {"percent": 55, "avg_score": 11}, "teachers": ["Хожа Ахмедов Б.", "Жумагалиева А.", "Шырханова А.", "Омарова А."]},
          {"class": "7 В", "kazakh_tili": {"percent": 65, "avg_score": 13}, "algebra": {"percent": 40, "avg_score": 8}, "agylshyn": {"percent": 40, "avg_score": 8}, "kazakhstan_tarihy": {"percent": 40, "avg_score": 8}, "teachers": ["Хожа Ахмедов Б.", "Шырханова А.", "Тұрғынбек М.", "Жақсылыкпаева П."]},
          {"class": "7 Г", "kazakh_tili": {"percent": 45, "avg_score": 9}, "algebra": {"percent": 35, "avg_score": 7}, "agylshyn": {"percent": 30, "avg_score": 6}, "kazakhstan_tarihy": {"percent": 45, "avg_score": 9}, "teachers": ["Клышбекова А.", "Усенов Т.", "Шырханова А.", "Омарова А."]},
          {"class": "7 Д", "kazakh_tili": {"percent": 65, "avg_score": 13}, "algebra": {"percent": 60, "avg_score": 12}, "agylshyn": {"percent": 60, "avg_score": 12}, "kazakhstan_tarihy": {"percent": 50, "avg_score": 10}, "teachers": ["Әбсаттар П.", "Байлиева Ж.", "Кулбаракова А."]},
          {"class": "7 Е", "kazakh_tili": {"percent": 70, "avg_score": 14}, "algebra": {"percent": 55, "avg_score": 11}, "agylshyn": {"percent": 70, "avg_score": 14}, "kazakhstan_tarihy": {"percent": 45, "avg_score": 9}, "teachers": ["Наметов А.", "Ахметова Л.", "Кулбаракова А.", "Байлиева Ж."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "7 Г", "percent": 45, "avg_score": 9, "teacher": "Омарова А."}, "highest": {"class": "7 А", "percent": 85, "avg_score": 17}},
          "algebra": {"lowest": {"class": "7 Г", "percent": 35, "avg_score": 7, "teacher": "Клышбекова А."}, "highest": {"class": "7 А", "percent": 80, "avg_score": 16}},
          "agylshyn": {"lowest": {"class": "7 Г", "percent": 30, "avg_score": 6, "teacher": "Шырханова А., Усенов Т."}, "highest": {"class": "7 Е", "percent": 70, "avg_score": 14}},
          "kazakhstan_tarihy": {"lowest": {"class": "7 Ә", "percent": 35, "avg_score": 7, "teacher": "Кадырбаева Д."}, "highest": {"class": "7 А", "percent": 60, "avg_score": 12}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "7 А", "kazakh_tili": {"control_score_percent": "17/85", "TZhB_percent": 85, "quarter_quality_percent": 89}, "algebra": {"control_score_percent": "11/55", "TZhB_percent": 53, "quarter_quality_percent": 53}, "agylshyn": {"control_score_percent": "11/55", "TZhB_percent": 57, "quarter_quality_percent": 64}, "kazakhstan_tarihy": {"control_score_percent": "12/60", "TZhB_percent": 89, "quarter_quality_percent": 71}},
          {"class": "7 Ә", "kazakh_tili": {"control_score_percent": "16/80", "TZhB_percent": 57, "quarter_quality_percent": 69}, "algebra": {"control_score_percent": "9/45", "TZhB_percent": 57, "quarter_quality_percent": 61}, "agylshyn": {"control_score_percent": "9/45", "TZhB_percent": 85, "quarter_quality_percent": 69}, "kazakhstan_tarihy": {"control_score_percent": "7/35", "TZhB_percent": 50, "quarter_quality_percent": 68}},
          {"class": "7 Б", "kazakh_tili": {"control_score_percent": "14/70", "TZhB_percent": 76, "quarter_quality_percent": 76}, "algebra": {"control_score_percent": "10/50", "TZhB_percent": 57, "quarter_quality_percent": 61}, "agylshyn": {"control_score_percent": "10/50", "TZhB_percent": 61, "quarter_quality_percent": 84}, "kazakhstan_tarihy": {"control_score_percent": "11/55", "TZhB_percent": 92, "quarter_quality_percent": 88}},
          {"class": "7 В", "kazakh_tili": {"control_score_percent": "13/65", "TZhB_percent": 80, "quarter_quality_percent": 76}, "algebra": {"control_score_percent": "8/40", "TZhB_percent": 50, "quarter_quality_percent": 50}, "agylshyn": {"control_score_percent": "8/40", "TZhB_percent": 69, "quarter_quality_percent": 61}, "kazakhstan_tarihy": {"control_score_percent": "8/40", "TZhB_percent": 57, "quarter_quality_percent": 61}},
          {"class": "7 Г", "kazakh_tili": {"control_score_percent": "9/45", "TZhB_percent": 20, "quarter_quality_percent": 65}, "algebra": {"control_score_percent": "7/35", "TZhB_percent": 37, "quarter_quality_percent": 41}, "agylshyn": {"control_score_percent": "6/30", "TZhB_percent": 64, "quarter_quality_percent": 55}, "kazakhstan_tarihy": {"control_score_percent": "9/45", "TZhB_percent": 86, "quarter_quality_percent": 58}},
          {"class": "7 Д", "kazakh_tili": {"control_score_percent": "13/65", "TZhB_percent": 61, "quarter_quality_percent": 69}, "algebra": {"control_score_percent": "12/60", "TZhB_percent": 73, "quarter_quality_percent": 73}, "agylshyn": {"control_score_percent": "12/60", "TZhB_percent": 78, "quarter_quality_percent": 76}, "kazakhstan_tarihy": {"control_score_percent": "10/50", "TZhB_percent": 76, "quarter_quality_percent": 80}},
          {"class": "7 Е", "kazakh_tili": {"control_score_percent": "14/70", "TZhB_percent": 64, "quarter_quality_percent": 72}, "algebra": {"control_score_percent": "11/55", "TZhB_percent": 48, "quarter_quality_percent": 68}, "agylshyn": {"control_score_percent": "14/70", "TZhB_percent": 91, "quarter_quality_percent": 76}, "kazakhstan_tarihy": {"control_score_percent": "9/45", "TZhB_percent": 52, "quarter_quality_percent": 76}}
        ]
      },
      {
        "grade": 8,
        "subjects_tested": ["қазақ тілі", "алгебра", "жаратылыстану"],
        "total_questions": 60,
        "best_class": {"class": "8 В", "result_avg_score": 64},
        "worst_class": {"class": "8 Ә", "result_avg_score": 48},
        "note": "best/worst class scores as stated in source text (балл values), may refer to total average score not percent",
        "classes": [
          {"class": "8 А", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 55, "avg_score": 11}, "zharatylystanu": {"percent": 60, "avg_score": 12}, "teachers": ["Сағынтай Л.", "Риспаева Г.", "Сейтжан Ә.", "Омарова А.", "Қуантай А."]},
          {"class": "8 Ә", "kazakh_tili": {"percent": 65, "avg_score": 13}, "algebra": {"percent": 50, "avg_score": 10}, "zharatylystanu": {"percent": 70, "avg_score": 14}, "teachers": ["Холбаева Ф.", "Сағынтай Л.", "Көбеева М.", "Риспаева Г.", "Дүйсебай А."]},
          {"class": "8 Б", "kazakh_tili": {"percent": 50, "avg_score": 10}, "algebra": {"percent": 45, "avg_score": 9}, "zharatylystanu": {"percent": 50, "avg_score": 10}, "teachers": ["Холбаева Ф.", "Ибрагим Н.", "Кыдырәлі А.", "Сейтжан Ә.", "Дүйсебай А."]},
          {"class": "8 В", "kazakh_tili": {"percent": 50, "avg_score": 10}, "algebra": {"percent": 60, "avg_score": 12}, "zharatylystanu": {"percent": 55, "avg_score": 11}, "teachers": ["Шортанбекова Ф.", "Шаханова З.", "Кыдырәлі А.", "Көбеева М.", "Ерболқызы А."]},
          {"class": "8 Г", "kazakh_tili": {"percent": 55, "avg_score": 11}, "algebra": {"percent": 55, "avg_score": 11}, "zharatylystanu": {"percent": 60, "avg_score": 12}, "teachers": ["Байлиева Ж.", "Риспаева Г.", "Сейтжан Ә.", "Дүйсебай А."]},
          {"class": "8 Д", "kazakh_tili": {"percent": 55, "avg_score": 11}, "algebra": {"percent": 60, "avg_score": 12}, "zharatylystanu": {"percent": 50, "avg_score": 10}, "teachers": ["Нусипжанов Е.", "Шаханова З.", "Риспаева Г.", "Көбеева М.", "Қуантай А."]},
          {"class": "8 Е", "kazakh_tili": {"percent": 50, "avg_score": 10}, "algebra": {"percent": 50, "avg_score": 10}, "zharatylystanu": {"percent": 55, "avg_score": 11}, "teachers": ["Омарова А.", "Хожа Ахмедов Б.", "Кыдырәлі А.", "Көбеева М.", "Дүйсебай А."]},
          {"class": "8 Ж", "kazakh_tili": {"percent": 45, "avg_score": 9}, "algebra": {"percent": 50, "avg_score": 10}, "zharatylystanu": {"percent": 48, "avg_score": 9}, "teachers": ["Абдрахманова Қ.", "Ізбасар Е.", "Көбеева М.", "Кыдырәлі А.", "Қуантай А."]},
          {"class": "8 З", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 55, "avg_score": 11}, "zharatylystanu": {"percent": 50, "avg_score": 10}, "teachers": ["Абдрахманова Қ.", "Ибрагим Н.", "Көбеева М.", "Кыдырәлі А.", "Ерболқызы А."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "8 Ж", "percent": 45, "avg_score": 9, "teacher": "Абдрахманова Қ."}, "highest": {"class": "8 Ә", "percent": 65, "avg_score": 13}},
          "algebra": {"lowest": {"class": "8 Б", "percent": 45, "avg_score": 9, "teacher": "Ибрагим Н."}, "highest": {"classes": ["8 В", "8 Д"], "percent": 60, "avg_score": 12}},
          "zharatylystanu": {"lowest": {"class": "8 Ж", "percent": 48, "avg_score": 9}, "highest": {"class": "8 Ә", "percent": 70, "avg_score": 14}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "8 А", "kazakh_tili": {"control_score_percent": "12/60", "TZhB_percent": 73, "quarter_quality_percent": 76, "difference": -16}, "algebra": {"control_score_percent": "11/55", "TZhB_percent": 63, "quarter_quality_percent": 63, "difference": -8}, "zharatylystanu": {"control_score_percent": "12/60"}},
          {"class": "8 Ә", "kazakh_tili": {"control_score_percent": "13/65", "TZhB_percent": 60, "quarter_quality_percent": 67, "difference": -2}, "algebra": {"control_score_percent": "10/50", "TZhB_percent": 71, "quarter_quality_percent": 64, "difference": -14}, "zharatylystanu": {"control_score_percent": "14/70"}},
          {"class": "8 Б", "kazakh_tili": {"control_score_percent": "10/50", "TZhB_percent": 33, "quarter_quality_percent": 66, "difference": -16}, "algebra": {"control_score_percent": "9/45", "TZhB_percent": 58, "quarter_quality_percent": 58, "difference": -13}, "zharatylystanu": {"control_score_percent": "10/50"}},
          {"class": "8 В", "kazakh_tili": {"control_score_percent": "10/50", "TZhB_percent": 58, "quarter_quality_percent": 65, "difference": -15}, "algebra": {"control_score_percent": "12/60", "TZhB_percent": 51, "quarter_quality_percent": 55, "difference": 5}, "zharatylystanu": {"control_score_percent": "11/55"}},
          {"class": "8 Г", "kazakh_tili": {"control_score_percent": "11/55", "TZhB_percent": 66, "quarter_quality_percent": 70, "difference": -25}, "algebra": {"control_score_percent": "11/55", "TZhB_percent": 59, "quarter_quality_percent": 59, "difference": -4}, "zharatylystanu": {"control_score_percent": "12/60"}},
          {"class": "8 Д", "kazakh_tili": {"control_score_percent": "11/55", "TZhB_percent": 33, "quarter_quality_percent": 70, "difference": -25}, "algebra": {"control_score_percent": "12/60", "TZhB_percent": 59, "quarter_quality_percent": 59, "difference": -1}, "zharatylystanu": {"control_score_percent": "10/50"}},
          {"class": "8 Е", "kazakh_tili": {"control_score_percent": "10/50", "TZhB_percent": 69, "quarter_quality_percent": 69, "difference": -19}, "algebra": {"control_score_percent": "10/50", "TZhB_percent": 57, "quarter_quality_percent": 65, "difference": -15}, "zharatylystanu": {"control_score_percent": "11/55"}},
          {"class": "8 Ж", "kazakh_tili": {"control_score_percent": "9/45", "TZhB_percent": 50, "quarter_quality_percent": 50, "difference": -5}, "algebra": {"control_score_percent": "10/50", "TZhB_percent": 61, "quarter_quality_percent": 57, "difference": -7}, "zharatylystanu": {"control_score_percent": "10/50"}},
          {"class": "8 З", "kazakh_tili": {"control_score_percent": "12/60", "TZhB_percent": 38, "quarter_quality_percent": 38, "difference": 22}, "algebra": {"control_score_percent": "11/55", "TZhB_percent": 57, "quarter_quality_percent": 57, "difference": -2}, "zharatylystanu": {"control_score_percent": "10/50"}}
        ]
      },
      {
        "grade": 9,
        "subjects_tested": ["қазақ тілі", "алгебра", "физика", "биология"],
        "total_questions": 80,
        "best_class": {"class": "9 А", "result_avg_score": 73},
        "worst_class": {"class": "9 Г", "result_avg_score": 27},
        "classes": [
          {"class": "9 А", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 50, "avg_score": 10}, "fizika": {"percent": 70, "avg_score": 14}, "biologiya": {"percent": 70, "avg_score": 14}, "teachers": ["Отарбаева М.", "Абдрахманова Қ.", "Сағынтай Л.", "Сейтжан Ә.", "Дүйсебай А."]},
          {"class": "9 Ә", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 70, "avg_score": 14}, "fizika": {"percent": 75, "avg_score": 15}, "biologiya": {"percent": 80, "avg_score": 16}, "teachers": ["Холбаева Ф.", "Шаханова З.", "Көбеева М.", "Дүйсебай А."]},
          {"class": "9 Б", "kazakh_tili": {"percent": 55, "avg_score": 11}, "algebra": {"percent": 40, "avg_score": 8}, "fizika": {"percent": 45, "avg_score": 9}, "biologiya": {"percent": 60, "avg_score": 12}, "teachers": ["Холбаева Ф.", "Сағынтай Л.", "Сейтжан Ә.", "Дүйсебай А."]},
          {"class": "9 В", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 50, "avg_score": 10}, "fizika": {"percent": 75, "avg_score": 15}, "biologiya": {"percent": 75, "avg_score": 15}, "teachers": ["Шортанбекова Ф.", "Сағынтай Л.", "Сейтжан Ә.", "Дүйсебай А."]},
          {"class": "9 Г", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 70, "avg_score": 14}, "fizika": {"percent": 75, "avg_score": 15}, "biologiya": {"percent": 80, "avg_score": 16}, "teachers": ["Шаханова З.", "Ногаева Н.", "Дүйсебай А.", "Көбеева М."]},
          {"class": "9 Д", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 50, "avg_score": 10}, "fizika": {"percent": 70, "avg_score": 14}, "biologiya": {"percent": 70, "avg_score": 14}, "teachers": ["Абдрахманова Қ.", "Шаханова З.", "Сейтжан Ә.", "Дүйсебай А."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "9 Б", "percent": 55, "avg_score": 11, "teacher": "Холбаева Ф."}, "highest": {"note": "жоғары нәтиже көрсеткен жоқ (no class showed a top result)"}},
          "algebra": {"lowest": {"class": "9 Б", "percent": 40, "avg_score": 8, "teacher": "Сағынтай Л."}, "highest": {"classes": ["9 Ә", "9 Г"], "percent": 70, "avg_score": 14}},
          "biologiya": {"lowest": {"class": "9 Б", "percent": 55, "avg_score": 11, "teacher": "Дүйсебай А."}, "highest": {"classes": ["9 Ә", "9 Г"], "percent": 80, "avg_score": 16}},
          "fizika": {"lowest": {"class": "9 Б", "percent": 45, "avg_score": 9, "teacher": "Көбеева М."}, "highest": {"classes": ["9 Ә", "9 В", "9 Г"], "percent": 75, "avg_score": 15}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "9 А", "kazakh_tili": {"control_score_percent": "12/60", "TZhB_percent": 78, "quarter_quality_percent": 78}, "algebra": {"control_score_percent": "10/50", "TZhB_percent": 50, "quarter_quality_percent": 39}, "biologiya": {"control_score_percent": "14/70", "TZhB_percent": 89, "quarter_quality_percent": 85}, "fizika": {"control_score_percent": "14/70", "TZhB_percent": 50, "quarter_quality_percent": 53}},
          {"class": "9 Ә", "kazakh_tili": {"control_score_percent": "12/60", "TZhB_percent": 48, "quarter_quality_percent": 65}, "algebra": {"control_score_percent": "14/70", "TZhB_percent": 51, "quarter_quality_percent": 51}, "biologiya": {"control_score_percent": "16/80", "TZhB_percent": 93, "quarter_quality_percent": 79}, "fizika": {"control_score_percent": "15/75", "TZhB_percent": 58, "quarter_quality_percent": 62}},
          {"class": "9 Б", "kazakh_tili": {"control_score_percent": "11/55", "TZhB_percent": 55, "quarter_quality_percent": 55}, "algebra": {"control_score_percent": "8/40", "TZhB_percent": 37, "quarter_quality_percent": 44}, "biologiya": {"control_score_percent": "9/45", "TZhB_percent": 55, "quarter_quality_percent": 58}, "fizika": {"control_score_percent": "12/45", "TZhB_percent": 31, "quarter_quality_percent": 55}},
          {"class": "9 В", "kazakh_tili": {"control_score_percent": "12/60", "TZhB_percent": 76, "quarter_quality_percent": 80}, "algebra": {"control_score_percent": "10/50", "TZhB_percent": 60, "quarter_quality_percent": 56}, "biologiya": {"control_score_percent": "15/75", "TZhB_percent": 76, "quarter_quality_percent": 76}, "fizika": {"control_score_percent": "15/75", "TZhB_percent": 56, "quarter_quality_percent": 63}},
          {"class": "9 Г", "kazakh_tili": {"control_score_percent": "14/70", "TZhB_percent": 80, "quarter_quality_percent": 66}, "algebra": {"control_score_percent": "14/70", "TZhB_percent": 46, "quarter_quality_percent": 53}, "biologiya": {"control_score_percent": "16/80", "TZhB_percent": 83, "quarter_quality_percent": 86}, "fizika": {"control_score_percent": "15/75", "TZhB_percent": 66, "quarter_quality_percent": 70}},
          {"class": "9 Д", "kazakh_tili": {"control_score_percent": "12/60", "TZhB_percent": 44, "quarter_quality_percent": 44}, "algebra": {"control_score_percent": "10/50", "TZhB_percent": 58, "quarter_quality_percent": 62}, "biologiya": {"control_score_percent": "14/70", "TZhB_percent": 82, "quarter_quality_percent": 89}, "fizika": {"control_score_percent": "14/70", "TZhB_percent": 65, "quarter_quality_percent": 72}}
        ]
      }
    ],
    "recommendations": [
      "І тоқсанның әкімшілік ішкі бақылау кесінділерінің қорытындысы бойынша төмен пайыз көрсеткен сыныптар бақылауға алынсын.",
      "Сынып жетекшілер мен пән мұғалімдер төмен балл алған білім алушылардан жеке тапсырмалар алсын.",
      "Осы бұйрықтың орындалуын ДҒӘІЖО Н.Ногаеваға жүктелсін."
    ]
  },
  "internal_control_q2_2025_2026": {
    "meta": {
      "country": "Қазақстан Республикасы",
      "organization": "Жамбыл облысы әкімдігінің білім басқармасы Тараз қаласының білім бөлімінің №66 орта мектебі КММ",
      "document_title": "ІІ тоқсан бойынша ішкі бақылау кесінділерінің қорытындысы",
      "academic_year": "2025-2026",
      "test_period": "08.12.2025 - 15.12.2025",
      "purpose": "5-9 сынып білім алушыларынан білім сапасының деңгейін анықтап, талдау, білім алушылардың оқу жетістігінің ілгерілеуіне ықпал ету",
      "responsible_for_execution": "ДҒӘІЖО Н.Ногаева"
    },
    "grades": [
      {
        "grade": 5,
        "subjects_tested": ["қазақ тілі", "ағылшын тілі", "математика"],
        "total_questions": 60,
        "best_class": {"class": "5 А,Б", "result_percent": 75},
        "worst_class": {"class": "5 Ж", "result_percent": 52},
        "classes": [
          {"class": "5 А", "kazakh_tili": {"percent": 80, "avg_score": 16}, "agylshyn_tili": {"percent": 60, "avg_score": 12}, "matematika": {"percent": 75, "avg_score": 15}, "teachers": ["Отарбаева М.", "Клышбекова А.", "Жанабай Д.", "Усенов Т."]},
          {"class": "5 Ә", "kazakh_tili": {"percent": 75, "avg_score": 15}, "agylshyn_tili": {"percent": 65, "avg_score": 12}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Карасаева Ж.", "Дуанакулова А.", "Рахметилда А.", "Джатканбаева А."]},
          {"class": "5 Б", "kazakh_tili": {"percent": 70, "avg_score": 14}, "agylshyn_tili": {"percent": 60, "avg_score": 12}, "matematika": {"percent": 75, "avg_score": 15}, "teachers": ["Ногаева Н.", "Дуанакулова А.", "Ануарбекова А.", "Усенов Т."]},
          {"class": "5 В", "kazakh_tili": {"percent": 60, "avg_score": 12}, "agylshyn_tili": {"percent": 60, "avg_score": 12}, "matematika": {"percent": 75, "avg_score": 15}, "teachers": ["Ногаева Н.", "Наметов А.", "Ахметова Л.", "Джатканбаева А."]},
          {"class": "5 Г", "kazakh_tili": {"percent": 70, "avg_score": 14}, "agylshyn_tili": {"percent": 60, "avg_score": 12}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Карасаева Ж.", "Клышбекова А.", "Рахметилда А.", "Мейрманова А."]},
          {"class": "5 Д", "kazakh_tili": {"percent": 60, "avg_score": 12}, "agylshyn_tili": {"percent": 40, "avg_score": 8}, "matematika": {"percent": 60, "avg_score": 12}, "teachers": ["Омарова А.", "Наметов А.", "Жанабай Д.", "Джатканбаева А."]},
          {"class": "5 Е", "kazakh_tili": {"percent": 60, "avg_score": 12}, "agylshyn_tili": {"percent": 50, "avg_score": 10}, "matematika": {"percent": 75, "avg_score": 15}, "teachers": ["Омарова А.", "Жаңабай А.", "Ануарбекова А.", "Қырбасова А."]},
          {"class": "5 Ж", "kazakh_tili": {"percent": 45, "avg_score": 9}, "agylshyn_tili": {"percent": 45, "avg_score": 9}, "matematika": {"percent": 70, "avg_score": 14}, "teachers": ["Шортанбекова Ф.", "Жаңабай А.", "Ануарбекова А.", "Қырбасова А."]},
          {"class": "5 З", "kazakh_tili": {"percent": 71, "avg_score": 13}, "agylshyn_tili": {"percent": 70, "avg_score": 12}, "matematika": {"percent": 71, "avg_score": 13}, "teachers": ["Отарбаева М.", "Мейрманова А.", "Усенов Т.", "Наметов А."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "5 Ж", "percent": 45, "avg_score": 9, "teacher": "Қарасаева Ж."}, "highest": {"class": "5 А", "percent": 80, "avg_score": 16}},
          "agylshyn_tili": {"lowest": {"class": "5 Д", "percent": 40, "avg_score": 8, "teachers": ["Жанабай Д.", "Джатканбаева А."]}, "highest": {"class": "5 З", "percent": 70, "avg_score": 12}},
          "matematika": {"lowest": {"class": "5 Д", "percent": 60, "avg_score": 12, "teacher": "Наметов А."}, "highest": {"classes": ["5 А", "5 Б", "5 В", "5 Е"], "percent": 75, "avg_score": 15}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "5 А", "kazakh_tili": {"control_percent": 80, "TZhB_percent": 88, "quarter_quality_percent": 88, "difference": -8}, "agylshyn_tili": {"control_percent": 60, "TZhB_percent": "86/64", "quarter_quality_percent": "84/69", "difference": -9}, "matematika": {"control_percent": 75, "TZhB_percent": 77, "quarter_quality_percent": 76, "difference": -1}},
          {"class": "5 Ә", "kazakh_tili": {"control_percent": 75, "TZhB_percent": 81, "quarter_quality_percent": 81, "difference": -6}, "agylshyn_tili": {"control_percent": 65, "TZhB_percent": "64/77", "quarter_quality_percent": "64/76", "difference": -11}, "matematika": {"control_percent": 70, "TZhB_percent": 59, "quarter_quality_percent": 62, "difference": 8}},
          {"class": "5 Б", "kazakh_tili": {"control_percent": 70, "TZhB_percent": 93, "quarter_quality_percent": 81, "difference": -11}, "agylshyn_tili": {"control_percent": 60, "TZhB_percent": "79/100", "quarter_quality_percent": "76/92", "difference": -32}, "matematika": {"control_percent": 75, "TZhB_percent": 89, "quarter_quality_percent": 88, "difference": 13}},
          {"class": "5 В", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 80, "quarter_quality_percent": 72, "difference": -12}, "agylshyn_tili": {"control_percent": 60, "TZhB_percent": "69/83", "quarter_quality_percent": "76/83", "difference": -23}, "matematika": {"control_percent": 75, "TZhB_percent": 68, "quarter_quality_percent": 68, "difference": -7}},
          {"class": "5 Г", "kazakh_tili": {"control_percent": 70, "TZhB_percent": 79, "quarter_quality_percent": 78, "difference": -8}, "agylshyn_tili": {"control_percent": 60, "TZhB_percent": "83/75", "quarter_quality_percent": "83/83", "difference": -23}, "matematika": {"control_percent": 70, "TZhB_percent": 79, "quarter_quality_percent": 70, "difference": null}},
          {"class": "5 Д", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 74, "quarter_quality_percent": 79, "difference": -19}, "agylshyn_tili": {"control_percent": 40, "TZhB_percent": "85/64", "quarter_quality_percent": "91/63", "difference": -23}, "matematika": {"control_percent": 60, "TZhB_percent": 58, "quarter_quality_percent": 65, "difference": 5}},
          {"class": "5 Е", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 70, "quarter_quality_percent": 70, "difference": -10}, "agylshyn_tili": {"control_percent": 50, "TZhB_percent": "86/62", "quarter_quality_percent": "78/61", "difference": -11}, "matematika": {"control_percent": 75, "TZhB_percent": 70, "quarter_quality_percent": 59, "difference": -16}},
          {"class": "5 Ж", "kazakh_tili": {"control_percent": 45, "TZhB_percent": 76, "quarter_quality_percent": 80, "difference": -35}, "agylshyn_tili": {"control_percent": 45, "TZhB_percent": "77/71", "quarter_quality_percent": "76/64", "difference": -19}, "matematika": {"control_percent": 70, "TZhB_percent": 84, "quarter_quality_percent": 72, "difference": 2}},
          {"class": "5 З", "kazakh_tili": {"control_percent": 71, "TZhB_percent": 72, "quarter_quality_percent": 84, "difference": -13}, "agylshyn_tili": {"control_percent": 70, "TZhB_percent": "79/67", "quarter_quality_percent": "78/63", "difference": 13}, "matematika": {"control_percent": 71, "TZhB_percent": 69, "quarter_quality_percent": 68, "difference": -3}}
        ]
      },
      {
        "grade": 6,
        "subjects_tested": ["қазақ тілі", "математика", "жаратылыстану"],
        "total_questions": 60,
        "best_class": {"class": "6 З", "result_percent": 52},
        "worst_class": {"class": "6 И", "result_percent": 37},
        "classes": [
          {"class": "6 А", "kazakh_tili": {"percent": 60, "avg_score": 12}, "matematika": {"percent": 30, "avg_score": 6}, "zharatylystanu": {"percent": 50, "avg_score": 10}, "teachers": ["Қарасаева Ж.", "Дуанакулова А.", "Ерікқызы Г."]},
          {"class": "6 Ә", "kazakh_tili": {"percent": 55, "avg_score": 11}, "matematika": {"percent": 30, "avg_score": 6}, "zharatylystanu": {"percent": 45, "avg_score": 9}, "teachers": ["Қарасаева Ж.", "Дуанакулова А.", "Ерікқызы Г."]},
          {"class": "6 Б", "kazakh_tili": {"percent": 60, "avg_score": 12}, "matematika": {"percent": 35, "avg_score": 7}, "zharatylystanu": {"percent": 40, "avg_score": 8}, "teachers": ["Дуанакулова А.", "Байлиева Ж.", "Ерікқызы Г."]},
          {"class": "6 В", "kazakh_tili": {"percent": 55, "avg_score": 11}, "matematika": {"percent": 30, "avg_score": 6}, "zharatylystanu": {"percent": 45, "avg_score": 7}, "teachers": ["Отарбаева М.", "Әбсаттар П.", "Ерікқызы Г."]},
          {"class": "6 Г", "kazakh_tili": {"percent": 50, "avg_score": 10}, "matematika": {"percent": 35, "avg_score": 7}, "zharatylystanu": {"percent": 45, "avg_score": 9}, "teachers": ["Қарасаева Ж.", "Әбсаттар П.", "Ерікқызы Г."]},
          {"class": "6 Д", "kazakh_tili": {"percent": 60, "avg_score": 12}, "matematika": {"percent": 35, "avg_score": 7}, "zharatylystanu": {"percent": 35, "avg_score": 7}, "teachers": ["Даурен Қ.", "Әбсаттар П.", "Қалтаева Ф."]},
          {"class": "6 Е", "kazakh_tili": {"percent": 45, "avg_score": 9}, "matematika": {"percent": 35, "avg_score": 7}, "zharatylystanu": {"percent": 40, "avg_score": 8}, "teachers": ["Омарова А.", "Жаңабай А.", "Исраилов Н."]},
          {"class": "6 Ж", "kazakh_tili": {"percent": 40, "avg_score": 8}, "matematika": {"percent": 30, "avg_score": 6}, "zharatylystanu": {"percent": 40, "avg_score": 8}, "teachers": ["Жаңабай А.", "Исраилов Н.", "Заурбекова М."]},
          {"class": "6 З", "kazakh_tili": {"percent": 65, "avg_score": 13}, "matematika": {"percent": 40, "avg_score": 8}, "zharatylystanu": {"percent": 45, "avg_score": 9}, "teachers": ["Шаханова З.", "Исраилов Н.", "Ерікқызы Г.", "Отарбаева М."]},
          {"class": "6 И", "kazakh_tili": {"percent": 35, "avg_score": 7}, "matematika": {"percent": 30, "avg_score": 6}, "zharatylystanu": {"percent": 40, "avg_score": 8}, "teachers": ["Отарбаева М.", "Хожа Ахмедов Бауыржан", "Исраилов Н."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "6 И", "percent": 35, "avg_score": 7, "teacher": "Отарбаева М."}, "highest": {"class": "6 З", "percent": 65, "avg_score": 12}},
          "matematika": {"lowest": {"classes": ["6 А", "6 Ә", "6 Ж", "6 И"], "percent": 30, "avg_score": 6, "teachers": ["Дуанакулова А.", "Хожа Ахмедов Б.", "Жаңабай А.", "Әпсаттар П."]}, "highest": {"class": "6 З", "percent": 45, "avg_score": 9}},
          "zharatylystanu": {"lowest": {"class": "6 Д", "percent": 35, "avg_score": 7, "teacher": "Қалтаева Ф."}, "highest": {"class": "6 А", "percent": 50, "avg_score": 10}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "6 А", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 92, "quarter_quality_percent": 96, "difference": -36}, "matematika": {"control_percent": 30, "TZhB_percent": 81, "quarter_quality_percent": 80, "difference": -50}, "zharatylystanu": {"control_percent": 50, "TZhB_percent": 85, "quarter_quality_percent": 88, "difference": -38}},
          {"class": "6 Ә", "kazakh_tili": {"control_percent": 55, "TZhB_percent": 88, "quarter_quality_percent": 88, "difference": -33}, "matematika": {"control_percent": 30, "TZhB_percent": 80, "quarter_quality_percent": 72, "difference": -42}, "zharatylystanu": {"control_percent": 45, "TZhB_percent": 80, "quarter_quality_percent": 80, "difference": -35}},
          {"class": "6 Б", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 76, "quarter_quality_percent": 76, "difference": -16}, "matematika": {"control_percent": 35, "TZhB_percent": 76, "quarter_quality_percent": 76, "difference": -41}, "zharatylystanu": {"control_percent": 40, "TZhB_percent": 76, "quarter_quality_percent": 80, "difference": -40}},
          {"class": "6 В", "kazakh_tili": {"control_percent": 55, "TZhB_percent": 92, "quarter_quality_percent": 96, "difference": -41}, "matematika": {"control_percent": 30, "TZhB_percent": 81, "quarter_quality_percent": 88, "difference": -58}, "zharatylystanu": {"control_percent": 45, "TZhB_percent": 92, "quarter_quality_percent": 92, "difference": -47}},
          {"class": "6 Г", "kazakh_tili": {"control_percent": 50, "TZhB_percent": 70, "quarter_quality_percent": 70, "difference": -20}, "matematika": {"control_percent": 35, "TZhB_percent": 56, "quarter_quality_percent": 62, "difference": -27}, "zharatylystanu": {"control_percent": 45, "TZhB_percent": 70, "quarter_quality_percent": 70, "difference": -25}},
          {"class": "6 Д", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 67, "quarter_quality_percent": 63, "difference": 3}, "matematika": {"control_percent": 35, "TZhB_percent": 52, "quarter_quality_percent": 63, "difference": -28}, "zharatylystanu": {"control_percent": 35, "TZhB_percent": 76, "quarter_quality_percent": 72, "difference": -37}},
          {"class": "6 Е", "kazakh_tili": {"control_percent": 45, "TZhB_percent": 80, "quarter_quality_percent": 72, "difference": -27}, "matematika": {"control_percent": 35, "TZhB_percent": 76, "quarter_quality_percent": 60, "difference": -25}, "zharatylystanu": {"control_percent": 40, "TZhB_percent": 76, "quarter_quality_percent": 68, "difference": -28}},
          {"class": "6 Ж", "kazakh_tili": {"control_percent": 40, "TZhB_percent": 79, "quarter_quality_percent": 79, "difference": -39}, "matematika": {"control_percent": 30, "TZhB_percent": 75, "quarter_quality_percent": 66, "difference": -36}, "zharatylystanu": {"control_percent": 40, "TZhB_percent": 83, "quarter_quality_percent": 83, "difference": -43}},
          {"class": "6 З", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 81, "quarter_quality_percent": 80, "difference": -25}, "matematika": {"control_percent": 40, "TZhB_percent": 62, "quarter_quality_percent": 61, "difference": -21}, "zharatylystanu": {"control_percent": 45, "TZhB_percent": 71, "quarter_quality_percent": 66, "difference": -21}},
          {"class": "6 И", "kazakh_tili": {"control_percent": 35, "TZhB_percent": 61, "quarter_quality_percent": 60, "difference": -25}, "matematika": {"control_percent": 30, "TZhB_percent": 74, "quarter_quality_percent": 65, "difference": -35}, "zharatylystanu": {"control_percent": 40, "TZhB_percent": 70, "quarter_quality_percent": 60, "difference": -20}}
        ]
      },
      {
        "grade": 7,
        "subjects_tested": ["қазақ тілі", "алгебра", "ағылшын тілі", "биология"],
        "total_questions": 80,
        "best_class": {"class": "7 Е", "result_percent": 94},
        "worst_class": {"class": "7 Г", "result_percent": 65},
        "classes": [
          {"class": "7 А", "kazakh_tili": {"percent": 55, "avg_score": 11}, "algebra": {"percent": 55, "avg_score": 11}, "agylshyn": {"percent": 55, "avg_score": 11}, "biologiya": {"percent": 65, "avg_score": 13}, "teachers": ["Әбсаттар П.", "Жумагалиева А.", "Тамабекова Н.", "Қарасаева Ж.", "Дүйсебай А."]},
          {"class": "7 Ә", "kazakh_tili": {"percent": 65, "avg_score": 13}, "algebra": {"percent": 35, "avg_score": 7}, "agylshyn": {"percent": 70, "avg_score": 14}, "biologiya": {"percent": 75, "avg_score": 15}, "teachers": ["Клышбекова А.", "Шырханова А.", "Тұрғынбек М.", "Байлиева Ж.", "Қуантай А."]},
          {"class": "7 Б", "kazakh_tili": {"percent": 65, "avg_score": 13}, "algebra": {"percent": 55, "avg_score": 11}, "agylshyn": {"percent": 65, "avg_score": 13}, "biologiya": {"percent": 75, "avg_score": 15}, "teachers": ["Хожа Ахмедов Б.", "Жумагалиева А.", "Шырханова А.", "Омарова А.", "Қуантай А."]},
          {"class": "7 В", "kazakh_tili": {"percent": 55, "avg_score": 11}, "algebra": {"percent": 40, "avg_score": 8}, "agylshyn": {"percent": 50, "avg_score": 10}, "biologiya": {"percent": 70, "avg_score": 14}, "teachers": ["Хожа Ахмедов Б.", "Шырханова А.", "Тұрғынбек М.", "Жақсылыкпаева П.", "Қуантай А."]},
          {"class": "7 Г", "kazakh_tili": {"percent": 50, "avg_score": 10}, "algebra": {"percent": 30, "avg_score": 6}, "agylshyn": {"percent": 40, "avg_score": 8}, "biologiya": {"percent": 65, "avg_score": 13}, "teachers": ["Клышбекова А.", "Усенов Т.", "Шырханова А.", "Омарова А.", "Қуантай А."]},
          {"class": "7 Д", "kazakh_tili": {"percent": 65, "avg_score": 13}, "algebra": {"percent": 45, "avg_score": 9}, "agylshyn": {"percent": 65, "avg_score": 13}, "biologiya": {"percent": 75, "avg_score": 15}, "teachers": ["Әбсаттар П.", "Байлиева Ж.", "Кулбаракова А.", "Қуантай А."]},
          {"class": "7 Е", "kazakh_tili": {"percent": 65, "avg_score": 13}, "algebra": {"percent": 55, "avg_score": 11}, "agylshyn": {"percent": 70, "avg_score": 14}, "biologiya": {"percent": 85, "avg_score": 17}, "teachers": ["Наметов А.", "Ахметова Л.", "Кулбаракова А.", "Байлиева Ж.", "Қуантай А."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "7 Г", "percent": 50, "avg_score": 10, "teacher": "Омарова А."}, "highest": {"classes": ["7 Ә", "7 Б", "7 Д", "7 Е"], "percent": 65, "avg_score": 13}},
          "algebra": {"lowest": {"class": "7 Г", "percent": 30, "avg_score": 6, "teacher": "Клышбекова А."}, "highest": {"classes": ["7 А", "7 Б", "7 Е"], "percent": 70, "avg_score": 16}},
          "agylshyn": {"lowest": {"class": "7 Г", "percent": 40, "avg_score": 8, "teachers": ["Шырханова А.", "Усенов Т."]}, "highest": {"classes": ["7 Ә", "7 Е"], "percent": 70, "avg_score": 14}},
          "biologiya": {"lowest": {"classes": ["7 А", "7 Г"], "percent": 65, "avg_score": 13, "teachers": ["Дүйсебай А.", "Қуантай А."]}, "highest": {"class": "7 Е", "percent": 85, "avg_score": 17}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "7 А", "kazakh_tili": {"control_percent": 55, "TZhB_percent": 86, "quarter_quality_percent": 89, "difference": -34}, "algebra": {"control_percent": 55, "TZhB_percent": 50, "quarter_quality_percent": 53, "difference": -2}, "agylshyn": {"control_percent": 55, "TZhB_percent": "50/57", "quarter_quality_percent": "57/57", "difference": -2}, "biologiya": {"control_percent": 65, "TZhB_percent": 75, "quarter_quality_percent": 67, "difference": -2}},
          {"class": "7 Ә", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 75, "quarter_quality_percent": 77, "difference": -12}, "algebra": {"control_percent": 35, "TZhB_percent": 74, "quarter_quality_percent": 70, "difference": -35}, "agylshyn": {"control_percent": 70, "TZhB_percent": "54/60", "quarter_quality_percent": "50/71", "difference": -20}, "biologiya": {"control_percent": 75, "TZhB_percent": 14, "quarter_quality_percent": 59, "difference": 16}},
          {"class": "7 Б", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 92, "quarter_quality_percent": 76, "difference": -11}, "algebra": {"control_percent": 55, "TZhB_percent": 64, "quarter_quality_percent": 64, "difference": -9}, "agylshyn": {"control_percent": 65, "TZhB_percent": "42/69", "quarter_quality_percent": "50/84", "difference": -19}, "biologiya": {"control_percent": 75, "TZhB_percent": 52, "quarter_quality_percent": 80, "difference": -5}},
          {"class": "7 В", "kazakh_tili": {"control_percent": 55, "TZhB_percent": 72, "quarter_quality_percent": 68, "difference": -13}, "algebra": {"control_percent": 40, "TZhB_percent": 64, "quarter_quality_percent": 68, "difference": -28}, "agylshyn": {"control_percent": 50, "TZhB_percent": "50/69", "quarter_quality_percent": "58/61", "difference": -11}, "biologiya": {"control_percent": 70, "TZhB_percent": 48, "quarter_quality_percent": 56, "difference": -14}},
          {"class": "7 Г", "kazakh_tili": {"control_percent": 50, "TZhB_percent": 18, "quarter_quality_percent": 64, "difference": -14}, "algebra": {"control_percent": 30, "TZhB_percent": 50, "quarter_quality_percent": 50, "difference": -20}, "agylshyn": {"control_percent": 40, "TZhB_percent": "57/60", "quarter_quality_percent": "57/64", "difference": -24}, "biologiya": {"control_percent": 65, "TZhB_percent": 29, "quarter_quality_percent": 39, "difference": -26}},
          {"class": "7 Д", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 76, "quarter_quality_percent": 80, "difference": -25}, "algebra": {"control_percent": 45, "TZhB_percent": 73, "quarter_quality_percent": 72, "difference": -27}, "agylshyn": {"control_percent": 65, "TZhB_percent": "85/85", "quarter_quality_percent": "83/84", "difference": -19}, "biologiya": {"control_percent": 75, "TZhB_percent": 58, "quarter_quality_percent": 76, "difference": 1}},
          {"class": "7 Е", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 69, "quarter_quality_percent": 69, "difference": -4}, "algebra": {"control_percent": 55, "TZhB_percent": 62, "quarter_quality_percent": 69, "difference": -14}, "agylshyn": {"control_percent": 70, "TZhB_percent": "85/77", "quarter_quality_percent": "84/69", "difference": 1}, "biologiya": {"control_percent": 85, "TZhB_percent": 44, "quarter_quality_percent": 69, "difference": -16}}
        ]
      },
      {
        "grade": 8,
        "subjects_tested": ["қазақ тілі", "алгебра", "химия"],
        "total_questions": 60,
        "best_class": {"class": "8 В", "result_avg_score": 64},
        "worst_class": {"class": "8 Ә", "result_avg_score": 48},
        "note": "best/worst class scores as stated in source text (балл values), may refer to total average score not percent",
        "classes": [
          {"class": "8 А", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 50, "avg_score": 10}, "himiya": {"percent": 50, "avg_score": 10}, "teachers": ["Сағынтай Л.", "Риспаева Г.", "Омарова А."]},
          {"class": "8 Ә", "kazakh_tili": {"percent": 45, "avg_score": 9}, "algebra": {"percent": 40, "avg_score": 8}, "himiya": {"percent": 60, "avg_score": 12}, "teachers": ["Холбаева Ф.", "Сағынтай Л.", "Риспаева Г."]},
          {"class": "8 Б", "kazakh_tili": {"percent": 40, "avg_score": 8}, "algebra": {"percent": 35, "avg_score": 7}, "himiya": {"percent": 35, "avg_score": 7}, "teachers": ["Холбаева Ф.", "Ибрагим Н.", "Кыдырәлі А."]},
          {"class": "8 В", "kazakh_tili": {"percent": 40, "avg_score": 8}, "algebra": {"percent": 35, "avg_score": 7}, "himiya": {"percent": 40, "avg_score": 8}, "teachers": ["Шортанбекова Ф.", "Шаханова З.", "Кыдырәлі А."]},
          {"class": "8 Г", "kazakh_tili": {"percent": 50, "avg_score": 10}, "algebra": {"percent": 40, "avg_score": 8}, "himiya": {"percent": 50, "avg_score": 10}, "teachers": ["Байлиева Ж.", "Риспаева Г.", "Сейтжан Ә."]},
          {"class": "8 Д", "kazakh_tili": {"percent": 50, "avg_score": 10}, "algebra": {"percent": 50, "avg_score": 10}, "himiya": {"percent": 60, "avg_score": 12}, "teachers": ["Нусипжанов Е.", "Шаханова З.", "Риспаева Г."]},
          {"class": "8 Е", "kazakh_tili": {"percent": 55, "avg_score": 11}, "algebra": {"percent": 65, "avg_score": 13}, "himiya": {"percent": 80, "avg_score": 16}, "teachers": ["Омарова А.", "Хожа Ахмедов Б.", "Кыдырәлі А."]},
          {"class": "8 Ж", "kazakh_tili": {"percent": 50, "avg_score": 10}, "algebra": {"percent": 40, "avg_score": 8}, "himiya": {"percent": 50, "avg_score": 10}, "teachers": ["Абдрахманова Қ.", "Ізбасар Е.", "Кыдырәлі А."]},
          {"class": "8 З", "kazakh_tili": {"percent": 40, "avg_score": 8}, "algebra": {"percent": 40, "avg_score": 8}, "himiya": {"percent": 55, "avg_score": 11}, "teachers": ["Абдрахманова Қ.", "Ибрагим Н.", "Кыдырәлі А."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "8 Ж", "percent": 45, "avg_score": 9, "teacher": "Абдрахманова Қ.", "note": "source text says 8 Ж 45% but table lists 8 Ж at 50%; discrepancy present in original document"}, "highest": {"class": "8 Ә", "percent": 65, "avg_score": 13, "note": "narrative claims 65%/13 but table shows 8 Ә at 45%/9; discrepancy present in original document"}},
          "algebra": {"lowest": {"class": "8 Б", "percent": 45, "avg_score": 9, "teacher": "Ибрагим Н.", "note": "narrative value differs from table (35%/7); discrepancy present in original document"}, "highest": {"classes": ["8 В", "8 Д"], "percent": 60, "avg_score": 12, "note": "narrative value differs from table; discrepancy present in original document"}},
          "himiya_zharatylystanu": {"lowest": {"class": "8 Ж", "percent": 48, "avg_score": 9, "note": "narrative text references жаратылыстану/48% though tested subject this quarter was химия; discrepancy present in original document"}, "highest": {"class": "8 Ә", "percent": 70, "avg_score": 14, "note": "discrepancy vs table value of 60%/12; present in original document"}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "8 А", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 70, "quarter_quality_percent": 70, "difference": -10}, "algebra": {"control_percent": 50, "TZhB_percent": 63, "quarter_quality_percent": 63, "difference": -13}, "himiya": {"control_percent": 50, "TZhB_percent": 67, "quarter_quality_percent": 66, "difference": -16}},
          {"class": "8 Ә", "kazakh_tili": {"control_percent": 45, "TZhB_percent": 61, "quarter_quality_percent": 71, "difference": -26}, "algebra": {"control_percent": 40, "TZhB_percent": 71, "quarter_quality_percent": 71, "difference": -31}, "himiya": {"control_percent": 60, "TZhB_percent": 71, "quarter_quality_percent": 71, "difference": -11}},
          {"class": "8 Б", "kazakh_tili": {"control_percent": 40, "TZhB_percent": 58, "quarter_quality_percent": 79, "difference": -39}, "algebra": {"control_percent": 35, "TZhB_percent": 63, "quarter_quality_percent": 62, "difference": -27}, "himiya": {"control_percent": 35, "TZhB_percent": 29, "quarter_quality_percent": 58, "difference": -23}},
          {"class": "8 В", "kazakh_tili": {"control_percent": 40, "TZhB_percent": 66, "quarter_quality_percent": 62, "difference": -22}, "algebra": {"control_percent": 35, "TZhB_percent": 62, "quarter_quality_percent": 58, "difference": -23}, "himiya": {"control_percent": 40, "TZhB_percent": 41, "quarter_quality_percent": 62, "difference": -22}},
          {"class": "8 Г", "kazakh_tili": {"control_percent": 50, "TZhB_percent": 62, "quarter_quality_percent": 61, "difference": -11}, "algebra": {"control_percent": 40, "TZhB_percent": 62, "quarter_quality_percent": 61, "difference": -21}, "himiya": {"control_percent": 50, "TZhB_percent": 65, "quarter_quality_percent": 65, "difference": -15}},
          {"class": "8 Д", "kazakh_tili": {"control_percent": 50, "TZhB_percent": 14, "quarter_quality_percent": 71, "difference": -21}, "algebra": {"control_percent": 50, "TZhB_percent": 86, "quarter_quality_percent": 75, "difference": -25}, "himiya": {"control_percent": 60, "TZhB_percent": 68, "quarter_quality_percent": 67, "difference": 7}},
          {"class": "8 Е", "kazakh_tili": {"control_percent": 55, "TZhB_percent": 92, "quarter_quality_percent": 61, "difference": -6}, "algebra": {"control_percent": 65, "TZhB_percent": 62, "quarter_quality_percent": 57, "difference": -8}, "himiya": {"control_percent": 80, "TZhB_percent": 50, "quarter_quality_percent": 57, "difference": -23}},
          {"class": "8 Ж", "kazakh_tili": {"control_percent": 50, "TZhB_percent": 46, "quarter_quality_percent": 50, "difference": null}, "algebra": {"control_percent": 40, "TZhB_percent": 65, "quarter_quality_percent": 61, "difference": -21}, "himiya": {"control_percent": 50, "TZhB_percent": 50, "quarter_quality_percent": 53, "difference": 3}},
          {"class": "8 З", "kazakh_tili": {"control_percent": 40, "TZhB_percent": 44, "quarter_quality_percent": 44, "difference": -4}, "algebra": {"control_percent": 40, "TZhB_percent": 64, "quarter_quality_percent": 64, "difference": -24}, "himiya": {"control_percent": 55, "TZhB_percent": 56, "quarter_quality_percent": 52, "difference": -3}}
        ]
      },
      {
        "grade": 9,
        "subjects_tested": ["қазақ тілі", "алгебра", "география", "қазақстан тарихы"],
        "total_questions": 80,
        "best_class": {"class": "9 Ә", "result_avg_score": 99},
        "worst_class": {"class": "9 Б", "result_avg_score": 75},
        "classes": [
          {"class": "9 А", "kazakh_tili": {"percent": 70, "avg_score": 14}, "algebra": {"percent": 65, "avg_score": 13}, "geografiya": {"percent": 60, "avg_score": 12}, "kazakhstan_tarihy": {"percent": 85, "avg_score": 17}, "teachers": ["Отарбаева М.", "Абдрахманова Қ.", "Сағынтай Л.", "Нурсейітова М.", "Рыскулбеков А."]},
          {"class": "9 Ә", "kazakh_tili": {"percent": 70, "avg_score": 14}, "algebra": {"percent": 80, "avg_score": 16}, "geografiya": {"percent": 65, "avg_score": 12}, "kazakhstan_tarihy": {"percent": 75, "avg_score": 15}, "teachers": ["Холбаева Ф.", "Шаханова З.", "Амиралиева Г."]},
          {"class": "9 Б", "kazakh_tili": {"percent": 55, "avg_score": 11}, "algebra": {"percent": 55, "avg_score": 11}, "geografiya": {"percent": 50, "avg_score": 10}, "kazakhstan_tarihy": {"percent": 60, "avg_score": 12}, "teachers": ["Холбаева Ф.", "Сағынтай Л.", "Амиралиева Г.", "Рыскулбеков А."]},
          {"class": "9 В", "kazakh_tili": {"percent": 60, "avg_score": 12}, "algebra": {"percent": 65, "avg_score": 13}, "geografiya": {"percent": 50, "avg_score": 10}, "kazakhstan_tarihy": {"percent": 70, "avg_score": 14}, "teachers": ["Шортанбекова Ф.", "Сағынтай Л.", "Нурсейітова М.", "Рыскулбеков А."]},
          {"class": "9 Г", "kazakh_tili": {"percent": 65, "avg_score": 13}, "algebra": {"percent": 60, "avg_score": 12}, "geografiya": {"percent": 60, "avg_score": 12}, "kazakhstan_tarihy": {"percent": 75, "avg_score": 15}, "teachers": ["Шаханова З.", "Ногаева Н.", "Нурсейітова М.", "Рыскулбеков А."]},
          {"class": "9 Д", "kazakh_tili": {"percent": 70, "avg_score": 14}, "algebra": {"percent": 70, "avg_score": 14}, "geografiya": {"percent": 50, "avg_score": 10}, "kazakhstan_tarihy": {"percent": 80, "avg_score": 17}, "teachers": ["Абдрахманова Қ.", "Шаханова З.", "Нурсейітова М.", "Рыскулбеков А."]}
        ],
        "lowest_and_highest_by_subject": {
          "kazakh_tili": {"lowest": {"class": "9 Б", "percent": 55, "avg_score": 11, "teacher": "Холбаева Ф."}, "highest": {"note": "жоғары нәтиже көрсеткен жоқ (no class showed a top result)"}},
          "algebra": {"lowest": {"class": "9 Б", "percent": 55, "avg_score": 11, "teacher": "Сағынтай Л."}, "highest": {"class": "9 Ә", "percent": 80, "avg_score": 16}},
          "geografiya": {"lowest": {"classes": ["9 Б", "9 В"], "percent": 50, "avg_score": 10, "teacher": "Рыскулбеков А."}, "highest": {"class": "9 Ә", "percent": 65, "avg_score": 12}},
          "kazakhstan_tarihy": {"lowest": {"class": "9 Б", "percent": 60, "avg_score": 12, "teacher": "Нурсейітова М."}, "highest": {"class": "9 Д", "percent": 80, "avg_score": 17}}
        },
        "comparison_admin_test_vs_TZhB_vs_quarter": [
          {"class": "9 А", "kazakh_tili": {"control_percent": 70, "TZhB_percent": 62, "quarter_quality_percent": 61, "difference": 11}, "algebra": {"control_percent": 65, "TZhB_percent": 62, "quarter_quality_percent": 61, "difference": -4}, "geografiya": {"control_percent": 60, "TZhB_percent": 38, "quarter_quality_percent": 65, "difference": 5}, "kazakhstan_tarihy": {"control_percent": 85, "TZhB_percent": 15, "quarter_quality_percent": 69, "difference": -16}},
          {"class": "9 Ә", "kazakh_tili": {"control_percent": 70, "TZhB_percent": 63, "quarter_quality_percent": 80, "difference": -10}, "algebra": {"control_percent": 80, "TZhB_percent": 63, "quarter_quality_percent": 63, "difference": 17}, "geografiya": {"control_percent": 65, "TZhB_percent": 67, "quarter_quality_percent": 80, "difference": -15}, "kazakhstan_tarihy": {"control_percent": 75, "TZhB_percent": 73, "quarter_quality_percent": 83, "difference": 8}},
          {"class": "9 Б", "kazakh_tili": {"control_percent": 55, "TZhB_percent": 55, "quarter_quality_percent": 58, "difference": 3}, "algebra": {"control_percent": 55, "TZhB_percent": 55, "quarter_quality_percent": 51, "difference": 4}, "geografiya": {"control_percent": 50, "TZhB_percent": 45, "quarter_quality_percent": 65, "difference": -15}, "kazakhstan_tarihy": {"control_percent": 60, "TZhB_percent": 55, "quarter_quality_percent": 58, "difference": -2}},
          {"class": "9 В", "kazakh_tili": {"control_percent": 60, "TZhB_percent": 77, "quarter_quality_percent": 83, "difference": -23}, "algebra": {"control_percent": 65, "TZhB_percent": 77, "quarter_quality_percent": 66, "difference": -1}, "geografiya": {"control_percent": 50, "TZhB_percent": 67, "quarter_quality_percent": 76, "difference": -26}, "kazakhstan_tarihy": {"control_percent": 70, "TZhB_percent": 57, "quarter_quality_percent": 63, "difference": -7}},
          {"class": "9 Г", "kazakh_tili": {"control_percent": 65, "TZhB_percent": 69, "quarter_quality_percent": 55, "difference": 10}, "algebra": {"control_percent": 60, "TZhB_percent": 69, "quarter_quality_percent": 62, "difference": -2}, "geografiya": {"control_percent": 60, "TZhB_percent": 62, "quarter_quality_percent": 79, "difference": -19}, "kazakhstan_tarihy": {"control_percent": 75, "TZhB_percent": 31, "quarter_quality_percent": 62, "difference": -13}},
          {"class": "9 Д", "kazakh_tili": {"control_percent": 70, "TZhB_percent": 57, "quarter_quality_percent": 51, "difference": -19}, "algebra": {"control_percent": 70, "TZhB_percent": 57, "quarter_quality_percent": 58, "difference": -12}, "geografiya": {"control_percent": 50, "TZhB_percent": 28, "quarter_quality_percent": 72, "difference": -22}, "kazakhstan_tarihy": {"control_percent": 80, "TZhB_percent": 52, "quarter_quality_percent": 68, "difference": -12}}
        ]
      }
    ],
    "recommendations": [
      "ІІ тоқсанның әкімшілік ішкі бақылау кесінділерінің қорытындысы бойынша төмен пайыз көрсеткен сыныптар бақылауға алынсын.",
      "Сынып жетекшілер мен пән мұғалімдер төмен балл алған білім алушылармен жеке жұмыс жүргізсін.",
      "Төмен көрсеткіш көрсеткен мұғалімдерге ескерту түрінде тәртіптік жаза қолданылсын.",
      "Осы бұйрықтың орындалуын ДҒӘІЖО Н.Ногаеваға жүктелсін."
    ]
  },
  "internal_control_q4_2025_2026": {
    "school": "№66 орта мектебі, Тараз қаласы, Жамбыл облысы",
    "meeting_type": "Педагогикалық кеңес",
    "report_title": "IV тоқсан бойынша ішкі бақылау кесінділерінің қорытындысы",
    "academic_year": "2025-2026",
    "testing_period": "27.04-06.05.2026",
    "purpose": "5-9 сынып білім алушыларынан білім сапасының деңгейін анықтап, талдау, оқу жетістігінің ілгерілеуіне ықпал ету",
    "grades": [
      {
        "grade_level": 5,
        "questions_count": 60,
        "subjects_tested": ["Қазақ әдебиеті", "Ағылшын тілі", "Математика"],
        "best_class": { "class": "5 Г", "score_percent": 73 },
        "worst_class": { "class": "5 Ж", "score_percent": 51 },
        "classes": [
          { "class": "5 А", "kaz_edebiet_percent": 65, "kaz_edebiet_avg": 13, "english_percent": 70, "english_avg": 14, "math_percent": 60, "math_avg": 12, "teachers": ["Қарасаева Ж.", "Усенов Т.", "Жаңабаев Д.", "Клышбекова А."] },
          { "class": "5 Ә", "kaz_edebiet_percent": 65, "kaz_edebiet_avg": 13, "english_percent": 75, "english_avg": 15, "math_percent": 40, "math_avg": 8, "teachers": ["Дәурен Қ.", "Рахметілдақызы А.", "Джатканбаева А.", "Дуанакулова А."] },
          { "class": "5 Б", "kaz_edebiet_percent": 70, "kaz_edebiet_avg": 14, "english_percent": 65, "english_avg": 13, "math_percent": 40, "math_avg": 8, "teachers": ["Аскербай А.", "Усенов Т.", "Нарбасова Ә.", "Дуанакулова А."] },
          { "class": "5 В", "kaz_edebiet_percent": 65, "kaz_edebiet_avg": 13, "english_percent": 75, "english_avg": 15, "math_percent": 60, "math_avg": 12, "teachers": ["Ногаева Н.", "Ахметова Л.", "Джатканбаева А.", "Наметов А."] },
          { "class": "5 Г", "kaz_edebiet_percent": 70, "kaz_edebiet_avg": 14, "english_percent": 85, "english_avg": 17, "math_percent": 60, "math_avg": 12, "teachers": ["Белгібаева Ғ.", "Мейрманова А.", "Рахметілдақызы А.", "Клышбекова А."] },
          { "class": "5 Д", "kaz_edebiet_percent": 60, "kaz_edebiet_avg": 12, "english_percent": 45, "english_avg": 9, "math_percent": 55, "math_avg": 11, "teachers": ["Белгібаева Ғ.", "Джатканбаева А.", "Жаңабаев Д.", "Наметов А."] },
          { "class": "5 Е", "kaz_edebiet_percent": 65, "kaz_edebiet_avg": 13, "english_percent": 55, "english_avg": 11, "math_percent": 35, "math_avg": 7, "teachers": ["Жақсылықбаева П.", "Ануарбек А.", "Кырбасова А.", "Жаңабай А."] },
          { "class": "5 Ж", "kaz_edebiet_percent": 60, "kaz_edebiet_avg": 12, "english_percent": 60, "english_avg": 12, "math_percent": 30, "math_avg": 6, "teachers": ["Дәурен Қ.", "Джатканбаева А.", "Кырбасова А.", "Жаңабай А."] },
          { "class": "5 З", "kaz_edebiet_percent": 60, "kaz_edebiet_avg": 12, "english_percent": 65, "english_avg": 13, "math_percent": 55, "math_avg": 11, "teachers": ["Белгібаева Ғ.", "Усенов Т.", "Мейрманова А.", "Наметов А."] }
        ],
        "summary": "Қазақ тілі пәнінен 5 «Д,Ж,З» сыныптары 60% (орташа балл 12) ең төмен, 5 «Б,Г» сыныптары 70% (орташа балл 14) жоғары. Ағылшын пәнінен 5 «Д» сыныбы 45% (орташа балл 9) ең төмен, 5 «Г» сыныбы 85% (орташа балл 17) жоғары. Математика пәнінен 5 «Ж» сыныбы 30% (орташа балл 6) ең төмен, 5 «А,В,Г» сыныптары 60% (орташа балл 12) жоғары.",
        "comparison": [
          { "class": "5 А", "kaz_edebiet": { "bak_kes_percent": 65, "tjb_percent": 88, "quarter_quality_percent": 96, "difference": -31 }, "english": { "bak_kes_percent": 70, "tjb_percent": "86/93", "quarter_quality_percent": "84/92", "difference": -22 }, "math": { "bak_kes_percent": 60, "tjb_percent": 81, "quarter_quality_percent": 80, "difference": -20 } },
          { "class": "5 Ә", "kaz_edebiet": { "bak_kes_percent": 65, "tjb_percent": 78, "quarter_quality_percent": 70, "difference": -5 }, "english": { "bak_kes_percent": 75, "tjb_percent": "57/69", "quarter_quality_percent": "57/69", "difference": 6 }, "math": { "bak_kes_percent": 40, "tjb_percent": 67, "quarter_quality_percent": 59, "difference": -19 } },
          { "class": "5 Б", "kaz_edebiet": { "bak_kes_percent": 70, "tjb_percent": 100, "quarter_quality_percent": 100, "difference": -30 }, "english": { "bak_kes_percent": 65, "tjb_percent": "85/77", "quarter_quality_percent": "91/91", "difference": -26 }, "math": { "bak_kes_percent": 40, "tjb_percent": 92, "quarter_quality_percent": 91, "difference": -51 } },
          { "class": "5 В", "kaz_edebiet": { "bak_kes_percent": 65, "tjb_percent": 72, "quarter_quality_percent": 72, "difference": -7 }, "english": { "bak_kes_percent": 75, "tjb_percent": "77/92", "quarter_quality_percent": "76/83", "difference": -8 }, "math": { "bak_kes_percent": 60, "tjb_percent": 76, "quarter_quality_percent": 76, "difference": -16 } },
          { "class": "5 Г", "kaz_edebiet": { "bak_kes_percent": 70, "tjb_percent": 88, "quarter_quality_percent": 88, "difference": -18 }, "english": { "bak_kes_percent": 85, "tjb_percent": "77/50", "quarter_quality_percent": "76/75", "difference": 9 }, "math": { "bak_kes_percent": 60, "tjb_percent": 72, "quarter_quality_percent": 72, "difference": -12 } },
          { "class": "5 Д", "kaz_edebiet": { "bak_kes_percent": 60, "tjb_percent": 77, "quarter_quality_percent": 62, "difference": -2 }, "english": { "bak_kes_percent": 45, "tjb_percent": "79/53", "quarter_quality_percent": "76/53", "difference": -31 }, "math": { "bak_kes_percent": 55, "tjb_percent": 67, "quarter_quality_percent": 62, "difference": -7 } },
          { "class": "5 Е", "kaz_edebiet": { "bak_kes_percent": 65, "tjb_percent": 73, "quarter_quality_percent": 73, "difference": -8 }, "english": { "bak_kes_percent": 55, "tjb_percent": "71/67", "quarter_quality_percent": "78/66", "difference": -23 }, "math": { "bak_kes_percent": 35, "tjb_percent": 65, "quarter_quality_percent": 65, "difference": -30 } },
          { "class": "5 Ж", "kaz_edebiet": { "bak_kes_percent": 60, "tjb_percent": 82, "quarter_quality_percent": 81, "difference": -21 }, "english": { "bak_kes_percent": 60, "tjb_percent": "75/80", "quarter_quality_percent": "87/78", "difference": -27 }, "math": { "bak_kes_percent": 30, "tjb_percent": 82, "quarter_quality_percent": 77, "difference": -47 } },
          { "class": "5 З", "kaz_edebiet": { "bak_kes_percent": 60, "tjb_percent": 83, "quarter_quality_percent": 79, "difference": -19 }, "english": { "bak_kes_percent": 65, "tjb_percent": "73/67", "quarter_quality_percent": "84/63", "difference": -19 }, "math": { "bak_kes_percent": 55, "tjb_percent": 71, "quarter_quality_percent": 70, "difference": -15 } }
        ]
      },
      {
        "grade_level": 6,
        "questions_count": 60,
        "subjects_tested": ["Қазақ тілі", "Ағылшын тілі", "Математика"],
        "best_class": { "class": "6 В", "score_percent": 68 },
        "worst_class": { "class": "6 И", "score_percent": 33 },
        "classes": [
          { "class": "6 А", "kaz_til_percent": 50, "kaz_til_avg": 10, "english_percent": 40, "english_avg": 8, "math_percent": 60, "math_avg": 12, "teachers": ["Қарасаева Ж.", "Кульбаракова А.", "Ахметова Л.", "Дуанакулова А."] },
          { "class": "6 Ә", "kaz_til_percent": 45, "kaz_til_avg": 9, "english_percent": 65, "english_avg": 13, "math_percent": 35, "math_avg": 7, "teachers": ["Қарасаева Ж.", "Кульбараква А.", "Рахметілдақызы А.", "Дуанакулова А."] },
          { "class": "6 Б", "kaz_til_percent": 55, "kaz_til_avg": 11, "english_percent": 80, "english_avg": 17, "math_percent": 50, "math_avg": 10, "teachers": ["Байлиева Ж.", "Кырбасова А.", "Рахметілдақызы А.", "Дуанакулова А."] },
          { "class": "6 В", "kaz_til_percent": 50, "kaz_til_avg": 10, "english_percent": 85, "english_avg": 17, "math_percent": 60, "math_avg": 12, "teachers": ["Отарбаева М.", "Рахметілдақызы А.", "Ахметова Л.", "Әбсаттар П."] },
          { "class": "6 Г", "kaz_til_percent": 50, "kaz_til_avg": 10, "english_percent": 65, "english_avg": 13, "math_percent": 55, "math_avg": 11, "teachers": ["Отарбаева М.", "Рахметілдақызы А.", "Ануарбекова А.", "Әбсаттар П."] },
          { "class": "6 Д", "kaz_til_percent": 45, "kaz_til_avg": 9, "english_percent": 35, "english_avg": 7, "math_percent": 30, "math_avg": 6, "teachers": ["Дәурен Қ.", "Дузулбаева М.", "Ахметова Л.", "Әбсаттар П."] },
          { "class": "6 Е", "kaz_til_percent": 50, "kaz_til_avg": 10, "english_percent": 40, "english_avg": 8, "math_percent": 50, "math_avg": 10, "teachers": ["Омарова А.", "Дузулбаева М.", "Ахметова Л.", "Жаңабай А."] },
          { "class": "6 Ж", "kaz_til_percent": 45, "kaz_til_avg": 9, "english_percent": 35, "english_avg": 7, "math_percent": 35, "math_avg": 7, "teachers": ["Заурбекова М.", "Дузулбаева М.", "Ануарбекова А.", "Жаңабай А."] },
          { "class": "6 З", "kaz_til_percent": 35, "kaz_til_avg": 7, "english_percent": 25, "english_avg": 5, "math_percent": 35, "math_avg": 7, "teachers": ["Отарбаева М.", "Дузулбаева М.", "Кырбасова А.", "Шаханова З."] },
          { "class": "6 И", "kaz_til_percent": 30, "kaz_til_avg": 6, "english_percent": 30, "english_avg": 6, "math_percent": 25, "math_avg": 5, "teachers": ["Отарбаева М.", "Ахметова Л.", "Рахметілдақызы А.", "Хожа-Ахмедов Б."] }
        ],
        "summary": "Қазақ тілі пәнінен 6 «И» сыныбы 30% (орташа балл 6) ең төмен, 6 «Б» сыныбы 55% (орташа балл 11) жоғары. Ағылшын тілі пәнінен 6 «З,И» сыныптары 25%, 30% (орташа балл 5, 6) ең төмен, 6 «В» сыныбы 85% (орташа балл 17) жоғары. Математика пәнінен 6 «И» сыныбы 25% (орташа балл 5) ең төмен, 6 «А,В» сыныптары 60% (орташа балл 12) жоғары.",
        "comparison": [
          { "class": "6 А", "kaz_til": { "bak_kes_percent": 50, "tjb_percent": 88, "quarter_quality_percent": 92, "difference": -40 }, "english": { "bak_kes_percent": 40, "tjb_percent": "83/77", "quarter_quality_percent": "91/84", "difference": -51 }, "math": { "bak_kes_percent": 60, "tjb_percent": 96, "quarter_quality_percent": 92, "difference": -32 } },
          { "class": "6 Ә", "kaz_til": { "bak_kes_percent": 45, "tjb_percent": 88, "quarter_quality_percent": 88, "difference": -43 }, "english": { "bak_kes_percent": 65, "tjb_percent": "79/93", "quarter_quality_percent": "84/100", "difference": -35 }, "math": { "bak_kes_percent": 35, "tjb_percent": 72, "quarter_quality_percent": 80, "difference": -15 } },
          { "class": "6 Б", "kaz_til": { "bak_kes_percent": 55, "tjb_percent": 84, "quarter_quality_percent": 84, "difference": -29 }, "english": { "bak_kes_percent": 80, "tjb_percent": "69/77", "quarter_quality_percent": "75/92", "difference": -12 }, "math": { "bak_kes_percent": 50, "tjb_percent": 72, "quarter_quality_percent": 80, "difference": -30 } },
          { "class": "6 В", "kaz_til": { "bak_kes_percent": 50, "tjb_percent": 100, "quarter_quality_percent": 100, "difference": -50 }, "english": { "bak_kes_percent": 85, "tjb_percent": "92/85", "quarter_quality_percent": "100/100", "difference": -15 }, "math": { "bak_kes_percent": 60, "tjb_percent": 77, "quarter_quality_percent": 92, "difference": -32 } },
          { "class": "6 Г", "kaz_til": { "bak_kes_percent": 50, "tjb_percent": 74, "quarter_quality_percent": 74, "difference": -24 }, "english": { "bak_kes_percent": 65, "tjb_percent": "62/64", "quarter_quality_percent": "61/78", "difference": -13 }, "math": { "bak_kes_percent": 55, "tjb_percent": 63, "quarter_quality_percent": 62, "difference": -7 } },
          { "class": "6 Д", "kaz_til": { "bak_kes_percent": 45, "tjb_percent": 74, "quarter_quality_percent": 78, "difference": -33 }, "english": { "bak_kes_percent": 35, "tjb_percent": "60/75", "quarter_quality_percent": "54/91", "difference": -31 }, "math": { "bak_kes_percent": 30, "tjb_percent": 61, "quarter_quality_percent": 65, "difference": -35 } },
          { "class": "6 Е", "kaz_til": { "bak_kes_percent": 50, "tjb_percent": 68, "quarter_quality_percent": 68, "difference": -18 }, "english": { "bak_kes_percent": 40, "tjb_percent": "69/58", "quarter_quality_percent": "76/83", "difference": -43 }, "math": { "bak_kes_percent": 50, "tjb_percent": 84, "quarter_quality_percent": 72, "difference": -22 } },
          { "class": "6 Ж", "kaz_til": { "bak_kes_percent": 45, "tjb_percent": 81, "quarter_quality_percent": 85, "difference": -40 }, "english": { "bak_kes_percent": 35, "tjb_percent": "73/90", "quarter_quality_percent": "72/90", "difference": -55 }, "math": { "bak_kes_percent": 35, "tjb_percent": 90, "quarter_quality_percent": 66, "difference": -31 } },
          { "class": "6 З", "kaz_til": { "bak_kes_percent": 35, "tjb_percent": 81, "quarter_quality_percent": 80, "difference": -45 }, "english": { "bak_kes_percent": 25, "tjb_percent": "67/58", "quarter_quality_percent": "55/75", "difference": -50 }, "math": { "bak_kes_percent": 35, "tjb_percent": 67, "quarter_quality_percent": 66, "difference": -31 } },
          { "class": "6 И", "kaz_til": { "bak_kes_percent": 30, "tjb_percent": 67, "quarter_quality_percent": 66, "difference": -36 }, "english": { "bak_kes_percent": 30, "tjb_percent": "50/58", "quarter_quality_percent": "66/66", "difference": -36 }, "math": { "bak_kes_percent": 25, "tjb_percent": 67, "quarter_quality_percent": 66, "difference": -41 } }
        ]
      },
      {
        "grade_level": 7,
        "questions_count": 60,
        "subjects_tested": ["Ағылшын тілі", "Алгебра", "Биология"],
        "best_class": { "class": "7 Е", "score_percent": 67 },
        "worst_class": { "classes": ["7 Б", "7 Г"], "score_percent": 45 },
        "classes": [
          { "class": "7 А", "english_percent": 50, "english_avg": 10, "algebra_percent": 45, "algebra_avg": 9, "biology_percent": 60, "biology_avg": 12, "teachers": ["Жумагалиева А.", "Тамабекова Н.", "Әбсатар П.", "Дуйсебай А."] },
          { "class": "7 Ә", "english_percent": 50, "english_avg": 10, "algebra_percent": 50, "algebra_avg": 10, "biology_percent": 55, "biology_avg": 11, "teachers": ["Тұрғымбек М.", "Қуаныш М.", "Клышбекова А.", "Қуантай А."] },
          { "class": "7 Б", "english_percent": 40, "english_avg": 8, "algebra_percent": 45, "algebra_avg": 9, "biology_percent": 45, "biology_avg": 9, "teachers": ["Қуаныш М.", "Жумагалиева А.", "Хожа-Ахмедов Б.", "Қуантай А."] },
          { "class": "7 В", "english_percent": 45, "english_avg": 9, "algebra_percent": 50, "algebra_avg": 10, "biology_percent": 50, "biology_avg": 10, "teachers": ["Қуаныш М.", "Тұрғымбек М.", "Хожа-Ахмедов Б.", "Қуантай А."] },
          { "class": "7 Г", "english_percent": 45, "english_avg": 9, "algebra_percent": 45, "algebra_avg": 9, "biology_percent": 45, "biology_avg": 9, "teachers": ["Қуаныш М.", "Усенов Т.", "Клышбекова А.", "Қуантай А."] },
          { "class": "7 Д", "english_percent": 40, "english_avg": 8, "algebra_percent": 70, "algebra_avg": 14, "biology_percent": 55, "biology_avg": 11, "teachers": ["Рахметілдақызы А.", "Кульбаракова А.", "Әбсатар П.", "Қуантай А."] },
          { "class": "7 Е", "english_percent": 60, "english_avg": 12, "algebra_percent": 65, "algebra_avg": 13, "biology_percent": 65, "biology_avg": 13, "teachers": ["Кульбаракова А.", "Ахметова Л.", "Наметов А.", "Қуантай А."] }
        ],
        "summary": "Ағылшын тілі пәнінен 7 «Б,Д» сыныптары 40% (орташа балл 8) ең төмен, 7 «Е» сыныбы 60% (орташа балл 12) жоғары. Алгебра пәнінен 7 «А,Б,Г» сыныптары 45% (орташа балл 9) ең төмен, 7 «Д» сыныбы 70% (орташа балл 14) жоғары. Биология пәнінен 7 «Б,Г» сыныптары 45% (орташа балл 9) ең төмен, 7 «Е» сыныбы 65% (орташа балл 13) жоғары.",
        "comparison": [
          { "class": "7 А", "english": { "bak_kes_percent": 50, "tjb_percent": "50/50", "quarter_quality_percent": "61/57", "difference": -11 }, "algebra": { "bak_kes_percent": 45, "tjb_percent": 59, "quarter_quality_percent": 59, "difference": -14 }, "biology": { "bak_kes_percent": 60, "tjb_percent": 63, "quarter_quality_percent": 66, "difference": -6 } },
          { "class": "7 Ә", "english": { "bak_kes_percent": 50, "tjb_percent": "69/83", "quarter_quality_percent": "69/91", "difference": -41 }, "algebra": { "bak_kes_percent": 50, "tjb_percent": 68, "quarter_quality_percent": 64, "difference": -14 }, "biology": { "bak_kes_percent": 55, "tjb_percent": 72, "quarter_quality_percent": 68, "difference": -13 } },
          { "class": "7 Б", "english": { "bak_kes_percent": 40, "tjb_percent": "62/31", "quarter_quality_percent": "61/53", "difference": -21 }, "algebra": { "bak_kes_percent": 45, "tjb_percent": 62, "quarter_quality_percent": 61, "difference": -16 }, "biology": { "bak_kes_percent": 45, "tjb_percent": 50, "quarter_quality_percent": 50, "difference": -5 } },
          { "class": "7 В", "english": { "bak_kes_percent": 45, "tjb_percent": "36/60", "quarter_quality_percent": "53/64", "difference": -19 }, "algebra": { "bak_kes_percent": 50, "tjb_percent": 59, "quarter_quality_percent": 66, "difference": -16 }, "biology": { "bak_kes_percent": 50, "tjb_percent": 48, "quarter_quality_percent": 48, "difference": 2 } },
          { "class": "7 Г", "english": { "bak_kes_percent": 45, "tjb_percent": "43/64", "quarter_quality_percent": "50/69", "difference": -24 }, "algebra": { "bak_kes_percent": 45, "tjb_percent": 48, "quarter_quality_percent": 48, "difference": -3 }, "biology": { "bak_kes_percent": 45, "tjb_percent": 41, "quarter_quality_percent": 40, "difference": 5 } },
          { "class": "7 Д", "english": { "bak_kes_percent": 40, "tjb_percent": "77/86", "quarter_quality_percent": "76/84", "difference": -44 }, "algebra": { "bak_kes_percent": 70, "tjb_percent": 69, "quarter_quality_percent": 69, "difference": 1 }, "biology": { "bak_kes_percent": 55, "tjb_percent": 69, "quarter_quality_percent": 69, "difference": -14 } },
          { "class": "7 Е", "english": { "bak_kes_percent": 60, "tjb_percent": "83/57", "quarter_quality_percent": "91/71", "difference": -31 }, "algebra": { "bak_kes_percent": 65, "tjb_percent": 69, "quarter_quality_percent": 76, "difference": -11 }, "biology": { "bak_kes_percent": 65, "tjb_percent": 77, "quarter_quality_percent": 76, "difference": -11 } }
        ]
      },
      {
        "grade_level": 8,
        "questions_count": 80,
        "subjects_tested": ["Қазақ әдебиеті", "Қазақстан тарихы", "Биология", "Алгебра"],
        "best_class": { "class": "8 А", "score_percent": 63 },
        "worst_class": { "class": "8 В", "score_percent": 47 },
        "classes": [
          { "class": "8 А", "kaz_edebiet_percent": 55, "kaz_edebiet_avg": 11, "history_percent": 60, "history_avg": 12, "biology_percent": 65, "biology_avg": 13, "algebra_percent": 60, "algebra_avg": 12, "teachers": ["Аскербай А.", "Нурсейітова М.", "Қуантай А.", "Сағынтай Л."] },
          { "class": "8 Ә", "kaz_edebiet_percent": 55, "kaz_edebiet_avg": 11, "history_percent": 60, "history_avg": 12, "biology_percent": 55, "biology_avg": 11, "algebra_percent": 60, "algebra_avg": 12, "teachers": ["Холбаева Ф.", "Нурсейітова М.", "Дүйсебай А.", "Сағынтай Л."] },
          { "class": "8 Б", "kaz_edebiet_percent": 50, "kaz_edebiet_avg": 10, "history_percent": 50, "history_avg": 10, "biology_percent": 50, "biology_avg": 10, "algebra_percent": 65, "algebra_avg": 13, "teachers": ["Холбаева Ф.", "Нурсейітова М.", "Дүйсебай А.", "Ибрагим Н."] },
          { "class": "8 В", "kaz_edebiet_percent": 55, "kaz_edebiet_avg": 11, "history_percent": 45, "history_avg": 9, "biology_percent": 35, "biology_avg": 7, "algebra_percent": 45, "algebra_avg": 9, "teachers": ["Белгібаева Ғ.", "Махаметжан М.", "Ерболқызы А.", "Шаханова З."] },
          { "class": "8 Г", "kaz_edebiet_percent": 50, "kaz_edebiet_avg": 10, "history_percent": 60, "history_avg": 12, "biology_percent": 35, "biology_avg": 7, "algebra_percent": 45, "algebra_avg": 9, "teachers": ["Белгібаева Ғ.", "Амиралиева Г.", "Дүйсебай А.", "Ізбасар Е."] },
          { "class": "8 Д", "kaz_edebiet_percent": 55, "kaz_edebiet_avg": 11, "history_percent": 65, "history_avg": 13, "biology_percent": 50, "biology_avg": 10, "algebra_percent": 50, "algebra_avg": 10, "teachers": ["Нусипжанов Е.", "Амиралиева Г.", "Қуантай А.", "Шаханова З."] },
          { "class": "8 Е", "kaz_edebiet_percent": 40, "kaz_edebiet_avg": 8, "history_percent": 65, "history_avg": 13, "biology_percent": 55, "biology_avg": 11, "algebra_percent": 65, "algebra_avg": 13, "teachers": ["Омарова А.", "Махаметжан М.", "Дүйсебай А.", "Хожа-Ахмедов Б."] },
          { "class": "8 Ж", "kaz_edebiet_percent": 60, "kaz_edebiet_avg": 12, "history_percent": 15, "history_avg": 3, "biology_percent": 60, "biology_avg": 12, "algebra_percent": 55, "algebra_avg": 11, "teachers": ["Абдрахманова К.", "Махаметжан М.", "Қуантай А.", "Ізбасар Е."] },
          { "class": "8 З", "kaz_edebiet_percent": 55, "kaz_edebiet_avg": 11, "history_percent": 25, "history_avg": 5, "biology_percent": 50, "biology_avg": 10, "algebra_percent": 50, "algebra_avg": 10, "teachers": ["Абдрахманова К.", "Махаметжан М.", "Ерболқызы А.", "Ибрагим Н."] }
        ],
        "summary": "Қазақ әдебиеті пәнінен 8 «Е» сыныбы 40% (орташа балл 8) ең төмен, 8 «Ж» сыныбы 60% (орташа балл 12) жоғары. Қазақстан тарихы пәнінен 8 «Ж» сыныбы 15% (орташа балл 3) ең төмен, 8 «Д,Е» сыныптары 65% (орташа балл 13) жоғары. Биология пәнінен 8 «В,Г» сыныптары 35% (орташа балл 7) ең төмен, 8 «А» сыныбы 65% (орташа балл 13) жоғары. Алгебра пәнінен 8 «В,Г» сыныптары 45% (орташа балл 9) ең төмен, 8 «Б,Е» сыныптары 65% (орташа балл 13) жоғары.",
        "comparison": [
          { "class": "8 А", "kaz_edebiet": { "bak_kes_percent": 55, "tjb_percent": 73, "quarter_quality_percent": 72, "difference": -17 }, "history": { "bak_kes_percent": 60, "tjb_percent": 68, "quarter_quality_percent": 76, "difference": -16 }, "biology": { "bak_kes_percent": 65, "tjb_percent": 60, "quarter_quality_percent": 64, "difference": 1 }, "algebra": { "bak_kes_percent": 60, "tjb_percent": 64, "quarter_quality_percent": 64, "difference": -4 } },
          { "class": "8 Ә", "kaz_edebiet": { "bak_kes_percent": 55, "tjb_percent": 37, "quarter_quality_percent": 74, "difference": -19 }, "history": { "bak_kes_percent": 60, "tjb_percent": 70, "quarter_quality_percent": 85, "difference": -25 }, "biology": { "bak_kes_percent": 55, "tjb_percent": 78, "quarter_quality_percent": 81, "difference": -26 }, "algebra": { "bak_kes_percent": 60, "tjb_percent": 74, "quarter_quality_percent": 77, "difference": -17 } },
          { "class": "8 Б", "kaz_edebiet": { "bak_kes_percent": 50, "tjb_percent": 39, "quarter_quality_percent": 62, "difference": -12 }, "history": { "bak_kes_percent": 50, "tjb_percent": 52, "quarter_quality_percent": 66, "difference": -16 }, "biology": { "bak_kes_percent": 50, "tjb_percent": 52, "quarter_quality_percent": 66, "difference": -16 }, "algebra": { "bak_kes_percent": 65, "tjb_percent": 67, "quarter_quality_percent": 66, "difference": -6 } },
          { "class": "8 В", "kaz_edebiet": { "bak_kes_percent": 55, "tjb_percent": 66, "quarter_quality_percent": 62, "difference": -7 }, "history": { "bak_kes_percent": 45, "tjb_percent": 72, "quarter_quality_percent": 72, "difference": -27 }, "biology": { "bak_kes_percent": 35, "tjb_percent": 59, "quarter_quality_percent": 55, "difference": -20 }, "algebra": { "bak_kes_percent": 45, "tjb_percent": 68, "quarter_quality_percent": 62, "difference": -19 } },
          { "class": "8 Г", "kaz_edebiet": { "bak_kes_percent": 50, "tjb_percent": 62, "quarter_quality_percent": 61, "difference": -11 }, "history": { "bak_kes_percent": 60, "tjb_percent": 65, "quarter_quality_percent": 69, "difference": -9 }, "biology": { "bak_kes_percent": 35, "tjb_percent": 58, "quarter_quality_percent": 69, "difference": -34 }, "algebra": { "bak_kes_percent": 45, "tjb_percent": 65, "quarter_quality_percent": 65, "difference": -20 } },
          { "class": "8 Д", "kaz_edebiet": { "bak_kes_percent": 55, "tjb_percent": 37, "quarter_quality_percent": 74, "difference": -19 }, "history": { "bak_kes_percent": 65, "tjb_percent": 56, "quarter_quality_percent": 74, "difference": -9 }, "biology": { "bak_kes_percent": 50, "tjb_percent": 63, "quarter_quality_percent": 62, "difference": -12 }, "algebra": { "bak_kes_percent": 50, "tjb_percent": 70, "quarter_quality_percent": 70, "difference": -20 } },
          { "class": "8 Е", "kaz_edebiet": { "bak_kes_percent": 40, "tjb_percent": 68, "quarter_quality_percent": 68, "difference": -28 }, "history": { "bak_kes_percent": 65, "tjb_percent": 76, "quarter_quality_percent": 84, "difference": -19 }, "biology": { "bak_kes_percent": 55, "tjb_percent": 72, "quarter_quality_percent": 68, "difference": -13 }, "algebra": { "bak_kes_percent": 65, "tjb_percent": 64, "quarter_quality_percent": 64, "difference": 1 } },
          { "class": "8 Ж", "kaz_edebiet": { "bak_kes_percent": 60, "tjb_percent": 73, "quarter_quality_percent": 72, "difference": -12 }, "history": { "bak_kes_percent": 15, "tjb_percent": 64, "quarter_quality_percent": 63, "difference": -48 }, "biology": { "bak_kes_percent": 60, "tjb_percent": 41, "quarter_quality_percent": 45, "difference": 15 }, "algebra": { "bak_kes_percent": 55, "tjb_percent": 64, "quarter_quality_percent": 63, "difference": -8 } },
          { "class": "8 З", "kaz_edebiet": { "bak_kes_percent": 55, "tjb_percent": 68, "quarter_quality_percent": 72, "difference": -17 }, "history": { "bak_kes_percent": 25, "tjb_percent": 56, "quarter_quality_percent": 68, "difference": -43 }, "biology": { "bak_kes_percent": 50, "tjb_percent": 56, "quarter_quality_percent": 52, "difference": -2 }, "algebra": { "bak_kes_percent": 50, "tjb_percent": 68, "quarter_quality_percent": 68, "difference": -18 } }
        ]
      },
      {
        "grade_level": 9,
        "questions_count": 80,
        "subjects_tested": ["Қазақ тілі", "Ағылшын тілі", "Қазақстан тарихы", "Алгебра"],
        "best_class": { "class": "9 Г", "score_percent": 72 },
        "worst_class": { "class": "9 Б", "score_percent": 41 },
        "classes": [
          { "class": "9 А", "kaz_til_percent": 45, "kaz_til_avg": 9, "english_percent": 55, "english_avg": 11, "history_percent": 55, "history_avg": 11, "algebra_percent": 50, "algebra_avg": 10, "teachers": ["Отарбаева М.", "Писпекбаева Д.", "Нарбасова Ә.", "Нурсейітова М.", "Сағынтай Л."] },
          { "class": "9 Ә", "kaz_til_percent": 55, "kaz_til_avg": 11, "english_percent": 65, "english_avg": 13, "history_percent": 55, "history_avg": 11, "algebra_percent": 55, "algebra_avg": 11, "teachers": ["Холбаева Ф.", "Ибраимова А.", "Кырбасова А.", "Амиралиева Г.", "Шаханова З."] },
          { "class": "9 Б", "kaz_til_percent": 40, "kaz_til_avg": 8, "english_percent": 45, "english_avg": 9, "history_percent": 40, "history_avg": 8, "algebra_percent": 30, "algebra_avg": 6, "teachers": ["Холбаева Ф.", "Кырбасова А.", "Ибраимова А.", "Амиралиева Г.", "Сағынтай Л."] },
          { "class": "9 В", "kaz_til_percent": 60, "kaz_til_avg": 12, "english_percent": 65, "english_avg": 13, "history_percent": 60, "history_avg": 12, "algebra_percent": 60, "algebra_avg": 12, "teachers": ["Ибраимова А.", "Кырбасова А.", "Амиралиева Г.", "Сағынтай Л."] },
          { "class": "9 Г", "kaz_til_percent": 65, "kaz_til_avg": 13, "english_percent": 75, "english_avg": 15, "history_percent": 70, "history_avg": 14, "algebra_percent": 65, "algebra_avg": 13, "teachers": ["Холбаева Ф.", "Жумагалиева А.", "Нарбасова Ә.", "Нурсейітова М.", "Шаханова З."] },
          { "class": "9 Д", "kaz_til_percent": 55, "kaz_til_avg": 11, "english_percent": 65, "english_avg": 13, "history_percent": 60, "history_avg": 12, "algebra_percent": 60, "algebra_avg": 12, "teachers": ["Абдрахманова Қ.", "Нарбасова Ә.", "Ибраимова А.", "Амиралиева Г.", "Шаханова З."] }
        ],
        "summary": "Қазақ тілі пәнінен 9 «Б» сыныбы 40% (орташа балл 8) ең төмен, 9 «Г» сыныбы 65% (орташа балл 13) жоғары. Ағылшын пәнінен 9 «Б» сыныбы 45% (орташа балл 9) ең төмен, 9 «Г» сыныбы 75% (орташа балл 15) жоғары. Қазақстан тарихы пәнінен 9 «Б» сыныбы 40% (орташа балл 8) ең төмен, 9 «Г» сыныбы 70% (орташа балл 14) жоғары. Алгебра пәнінен 9 «Б» сыныбы 30% (орташа балл 6) ең төмен, 9 «Г» сыныбы 65% (орташа балл 13) жоғары.",
        "comparison": [
          { "class": "9 А", "kaz_til": { "bak_kes_percent": 45, "tjb_percent": 62, "quarter_quality_percent": 61, "difference": -16 }, "english": { "bak_kes_percent": 55, "tjb_percent": "71/43", "quarter_quality_percent": "61/53", "difference": -6 }, "history": { "bak_kes_percent": 55, "tjb_percent": 77, "quarter_quality_percent": 80, "difference": -25 }, "algebra": { "bak_kes_percent": 50, "tjb_percent": 58, "quarter_quality_percent": 57, "difference": -7 } },
          { "class": "9 Ә", "kaz_til": { "bak_kes_percent": 55, "tjb_percent": 43, "quarter_quality_percent": 70, "difference": -15 }, "english": { "bak_kes_percent": 65, "tjb_percent": "53/93", "quarter_quality_percent": "66/93", "difference": -28 }, "history": { "bak_kes_percent": 55, "tjb_percent": 60, "quarter_quality_percent": 80, "difference": -25 }, "algebra": { "bak_kes_percent": 55, "tjb_percent": 70, "quarter_quality_percent": 66, "difference": -11 } },
          { "class": "9 Б", "kaz_til": { "bak_kes_percent": 40, "tjb_percent": 32, "quarter_quality_percent": 60, "difference": -20 }, "english": { "bak_kes_percent": 45, "tjb_percent": "77/73", "quarter_quality_percent": "76/73", "difference": -31 }, "history": { "bak_kes_percent": 40, "tjb_percent": 39, "quarter_quality_percent": 64, "difference": -24 }, "algebra": { "bak_kes_percent": 30, "tjb_percent": 54, "quarter_quality_percent": 53, "difference": -23 } },
          { "class": "9 В", "kaz_til": { "bak_kes_percent": 60, "tjb_percent": 83, "quarter_quality_percent": 82, "difference": -22 }, "english": { "bak_kes_percent": 65, "tjb_percent": "67/79", "quarter_quality_percent": "66/78", "difference": -13 }, "history": { "bak_kes_percent": 60, "tjb_percent": 59, "quarter_quality_percent": 72, "difference": -12 }, "algebra": { "bak_kes_percent": 60, "tjb_percent": 70, "quarter_quality_percent": 68, "difference": -8 } },
          { "class": "9 Г", "kaz_til": { "bak_kes_percent": 65, "tjb_percent": 54, "quarter_quality_percent": 64, "difference": 1 }, "english": { "bak_kes_percent": 75, "tjb_percent": "79/64", "quarter_quality_percent": "78/57", "difference": -3 }, "history": { "bak_kes_percent": 70, "tjb_percent": 64, "quarter_quality_percent": 64, "difference": 6 }, "algebra": { "bak_kes_percent": 65, "tjb_percent": 79, "quarter_quality_percent": 64, "difference": 1 } },
          { "class": "9 Д", "kaz_til": { "bak_kes_percent": 55, "tjb_percent": 62, "quarter_quality_percent": 68, "difference": -13 }, "english": { "bak_kes_percent": 65, "tjb_percent": "73/71", "quarter_quality_percent": "71/80", "difference": -15 }, "history": { "bak_kes_percent": 60, "tjb_percent": 66, "quarter_quality_percent": 75, "difference": -15 }, "algebra": { "bak_kes_percent": 60, "tjb_percent": 66, "quarter_quality_percent": 65, "difference": -5 } }
        ]
      }
    ],
    "recommendations": [
      "ІV тоқсанның әкімшілік ішкі бақылау кесінділерінің қорытындысы бойынша төмен пайыз көрсеткен сыныптар бақылауға алынсын.",
      "Сынып жетекшілер мен пән мұғалімдер төмен балл алған білім алушылармен жеке жұмыс жүргізсін.",
      "Төмен көрсеткіш көрсеткен мұғалімдерге ескерту түрінде тәртіптік жаза қолданылсын.",
      "Осы бұйрықтың орындалуын ДОІЖО А.Жуанышевқа жүктелсін."
    ]
  }
};