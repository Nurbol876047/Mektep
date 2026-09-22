// app.js - SPA Logic and Combined Functionality

// --- Fallback Data ---
const fallbackLessonPlan = {
    aim: "Оқушыларға тақырып бойынша негізгі ұғымдарды түсіндіру, теориялық білімдерін практикамен ұштастыру.",
    results: [
        "Негізгі терминдерді біледі және түсінеді",
        "Алған білімдерін есеп шығаруда немесе талдауда қолдана алады",
        "Топпен жұмыс істеу дағдыларын қалыптастырады"
    ],
    course: {
        intro: "Ұйымдастыру кезеңі. Үй тапсырмасын сұрау. Жаңа сабақтың мақсатымен таныстыру (10 мин).",
        main: "Жаңа тақырыпты түсіндіру. Презентация және нақты мысалдар арқылы көрсету. (25 мин).",
        conclusion: "Сабақты бекіту. Рефлексия. Үйге тапсырма беру (10 мин)."
    },
    tasks: ["Оқулықтағы №1, 2 жаттығуларды орындау", "Қосымша: Тақырып бойынша эссе дайындау"]
};

const fallbackTest = [
    { question: "Абай Құнанбаев кім?", options: ["Ақын, ағартушы", "Батыр", "Хан", "Күйші"], answer: "Ақын, ағартушы" },
    { question: "Ньютонның бірінші заңы қалай аталады?", options: ["Инерция заңы", "Күш заңы", "Бүкіләлемдік тартылыс заңы", "Энергияның сақталу заңы"], answer: "Инерция заңы" },
    { question: "Қазақ хандығы қашан құрылды?", options: ["1465 жылы", "1500 жылы", "1450 жылы", "1730 жылы"], answer: "1465 жылы" },
    { question: "Информатикадағы ең кіші ақпарат өлшем бірлігі?", options: ["Байт", "Бит", "Кбайт", "Мегабайт"], answer: "Бит" },
    { question: "Судың химиялық формуласы қандай?", options: ["CO2", "H2O", "NaCl", "O2"], answer: "H2O" }
];

const fallbackEval = {
    score: 4,
    comment: "Жауабыңыз өте жақсы құрастырылған, негізгі ой анық берілген. Алайда, қосымша нақты мысалдармен толықтыра түссеңіз, жауабыңыз бұдан да мінсіз болар еді."
};

const fallbackAgenda = {
    agenda: [
        { time: "10:00 - 10:15", text: "Өткен жиналыс шешімдерінің орындалуын тексеру" },
        { time: "10:15 - 10:45", text: "Оқу сапасын арттыру және алдағы емтихандарға дайындық барысын талқылау" }
    ],
    roles: ["Төраға: Мектеп директоры", "Баяндамашылар: Оқу ісі меңгерушілері", "Хатшы: Педагог-ұйымдастырушы"],
    resolution: "Дайындық бойынша қосымша сабақтар кестесін бекіту."
};

const fallbackAnalytics = `**Проблема:** 7-сыныптарда математика және физика пәндерінен үлгерім төмен (58%).<br><br>**Мүмкін себептер:** Жаратылыстану бағытындағы пәндердің күрделенуі оқушыларға қиындық туғызып отыр.<br><br>**Ұсыныстар:**<br>1. 7-сыныптар үшін қосымша консультациялар ұйымдастыру.`;

const initialTasks = [
    { id: 1, title: "Жаңа оқу жылының жоспарын бекіту", person: "Директор", date: "2026-08-15", priority: "high", status: "todo" },
    { id: 2, title: "Оқушылардың сабаққа қатысуын тексеру", person: "Тәрбие ісі меңгерушісі", date: "2026-08-14", priority: "high", status: "inprogress" },
    { id: 3, title: "Кабинеттердің санитарлық жағдайын тексеру", person: "Шаруашылық меңгерушісі", date: "2026-08-10", priority: "medium", status: "done" }
];
let tasksArray = [...initialTasks];


// --- TEACHER TIMETABLE (Сабақ кестесі, фотодан) ---
// null = бос сағат. Апта күндері: 1күн..5күн
const TIMETABLE = {
    days: ["Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма"],
    shifts: [
        {
            name: "1-ауысым", icon: "sunrise",
            rows: [
                { n: 1, time: "8:00–8:45",   cells: ["10А", "11а", null,  null,  "8а"] },
                { n: 2, time: "8:50–9:35",   cells: [null,  null,  null,  "10б", null] },
                { n: 3, time: "9:45–10:30",  cells: [null,  "9в",  null,  null,  null] },
                { n: 4, time: "10:35–11:20", cells: [null,  null,  null,  null,  null] },
                { n: 5, time: "11:25–12:10", cells: ["11а", null,  null,  "11ә", "8в"] },
                { n: 6, time: "12:12–13:00", cells: ["10а", null,  "10",  "10ә", "10ә"] },
                { n: 7, time: "",            cells: [null,  "8б",  "9а",  null,  null] },
            ],
        },
        {
            name: "2-ауысым", icon: "sunset",
            rows: [
                { n: 1, time: "14:00–14:45", cells: [null, null,  null, null, "7а"] },
                { n: 2, time: "14:50–15:35", cells: [null, null,  null, null, null] },
                { n: 3, time: "15:45–16:30", cells: [null, null,  null, null, "7б"] },
                { n: 4, time: "16:35–17:20", cells: [null, "7в",  null, null, "6а"] },
                { n: 5, time: "17:25–18:10", cells: [null, null,  null, null, null] },
                { n: 6, time: "18:15–19:00", cells: [null, null,  null, null, null] },
            ],
        },
    ],
};

function renderTimetable() {
    const host = document.getElementById('teacherTimetable');
    if (!host) return;
    // Бүгінгі күн бағанын белгілеу (Дс=0 … Жм=4)
    const today = (new Date().getDay() + 6) % 7;
    const gradeOf = (c) => parseInt(c, 10);
    const total = TIMETABLE.shifts.reduce((a, s) => a + s.rows.reduce((b, r) => b + r.cells.filter(Boolean).length, 0), 0);
    const classes = [...new Set(TIMETABLE.shifts.flatMap(s => s.rows.flatMap(r => r.cells.filter(Boolean).map(c => c.toUpperCase()))))];

    const initials = (window.USER_NAME || "").split(/\s+/).slice(0, 2).map(w => w[0] || "").join("");
    const phone = window.USER_PHONE || "";
    const tel = phone.replace(/[^\d+]/g, "");

    const shiftHTML = TIMETABLE.shifts.map(sh => `
        <div class="tt-shift">
            <div class="tt-shift-title"><i data-lucide="${sh.icon}"></i> ${sh.name}</div>
            <div class="tt-scroll">
            <table class="tt-table">
                <thead>
                    <tr>
                        <th class="tt-num">№</th>
                        <th class="tt-time">Уақыт</th>
                        ${TIMETABLE.days.map((d, i) => `<th class="${i === today ? 'tt-today' : ''}"><span class="tt-day">${d}</span><span class="tt-daynum">${i + 1}-күн</span></th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${sh.rows.map(r => `
                        <tr>
                            <td class="tt-num">${r.n}</td>
                            <td class="tt-time">${r.time || '<span class="tt-muted">қосымша</span>'}</td>
                            ${r.cells.map((c, i) => `<td class="${i === today ? 'tt-today' : ''}">${c ? `<span class="tt-pill g${gradeOf(c)}">${c.toUpperCase()}</span>` : '<span class="tt-empty"></span>'}</td>`).join('')}
                        </tr>`).join('')}
                </tbody>
            </table>
            </div>
        </div>`).join('');

    host.innerHTML = `
        <div class="tt-head">
            <div>
                <div class="tt-title"><i data-lucide="calendar-days"></i> Сабақ кестесі</div>
                <div class="tt-sub">${window.USER_NAME || ""} · Сыныптары: ${window.USER_CLASSES || ""}</div>
            </div>
            <div class="tt-stats">
                <div class="tt-stat"><b>${total}</b><span>сағат / апта</span></div>
                <div class="tt-stat"><b>${classes.length}</b><span>сынып</span></div>
            </div>
        </div>
        ${shiftHTML}
        <div class="tt-footer">
            <div class="tt-avatar">${initials}</div>
            <div class="tt-contact">
                <div class="tt-contact-label">Оқушылармен байланыс</div>
                <a class="tt-phone" href="tel:${tel}"><i data-lucide="phone"></i> ${phone}</a>
            </div>
            <button type="button" class="tt-copy" id="ttCopyPhone"><i data-lucide="copy"></i> Көшіру</button>
        </div>`;

    const copyBtn = host.querySelector('#ttCopyPhone');
    if (copyBtn) copyBtn.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(phone); } catch { /* clipboard недоступен */ }
        copyBtn.innerHTML = '<i data-lucide="check"></i> Көшірілді';
        lucide.createIcons();
        setTimeout(() => { copyBtn.innerHTML = '<i data-lucide="copy"></i> Көшіру'; lucide.createIcons(); }, 1800);
    });
}

// --- MAIN INIT ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Config variables mapping
    document.getElementById('sidebarSchoolInfo').innerText = window.SCHOOL_INFO || "Мектеп";
    document.getElementById('sidebarUserName').innerText = window.USER_NAME || "Пайдаланушы";
    document.getElementById('topbarUserName').innerText = window.USER_NAME || "Пайдаланушы";

    renderTimetable();
    lucide.createIcons();

    // --- SPA Navigation Logic ---
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.app-section');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobileOverlay');

    function toggleMenu() {
        sidebar.classList.toggle('open');
        mobileOverlay.classList.toggle('open');
    }

    if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if(mobileOverlay) mobileOverlay.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(mi => mi.classList.remove('active'));
            item.classList.add('active');

            const targetId = item.getAttribute('data-target');
            sections.forEach(sec => sec.classList.remove('active'));
            const targetSec = document.getElementById(targetId);
            if(targetSec) targetSec.classList.add('active');

            if(window.innerWidth <= 992) {
                sidebar.classList.remove('open');
                mobileOverlay.classList.remove('open');
            }

            const tabAudioPhrases = {
                'sec-dashboard': 'Мұнда мектеп көрсеткіштерін бақылай аласыз.',
                'sec-agenda': 'Мұнда кеңес беру жоспарын құра аласыз.',
                'sec-analytics': 'Мұнда деректерге жасанды интеллект көмегімен талдау жасай аласыз.',
                'sec-tasks': 'Мұнда тапсырмаларды қарап, орындай аласыз.',
                'sec-lesson': 'Мұнда күнтізбелік-тақырыптық жоспар шаблонын дайындай аласыз.',
                'sec-test': 'Мұнда жасанды интеллект көмегімен тест құра аласыз.',
                'sec-eval': 'Мұнда оқушы жұмысын жасанды интеллект арқылы тексере аласыз.',
                'sec-games': 'Мұнда білім беру ойындарын таба аласыз.'
            };

            if (tabAudioPhrases[targetId]) {
                // playTTS is hoisted
                playTTS(tabAudioPhrases[targetId], false);
            }

            // Init specific modules if needed
            if(targetId === 'sec-dashboard') initOrUpdateCharts();
            if(targetId === 'sec-games') {
                const activeGameBtn = document.querySelector('.tab-btn[data-game-tab].active');
                if(activeGameBtn && activeGameBtn.getAttribute('data-game-tab') === 'match') {
                    if(!document.getElementById('termsPool').hasChildNodes()) initMatchGame();
                }
            }
        });
    });

    // --- Games Tabs Logic ---
    document.querySelectorAll('.tab-btn[data-game-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn[data-game-tab]').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.game-tab-content').forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const target = document.getElementById('gtab-' + btn.getAttribute('data-game-tab'));
            target.classList.add('active');
            gsap.fromTo(target, {opacity: 0, y: 10}, {opacity: 1, y: 0, duration: 0.3});
            
            if(btn.getAttribute('data-game-tab') === 'match') {
                if(!document.getElementById('termsPool').hasChildNodes()) initMatchGame();
            }
        });
    });

    // --- Helpers ---
    const getSkeletonHTML = () => `
        <div class="skeleton" style="height: 32px; width: 60%; margin-bottom: 24px; border-radius: 8px;"></div>
        <div class="skeleton" style="height: 20px; width: 100%; border-radius: 4px; margin-bottom: 8px;"></div>
        <div class="skeleton" style="height: 20px; width: 100%; border-radius: 4px; margin-bottom: 8px;"></div>
        <div class="skeleton" style="height: 20px; width: 80%; border-radius: 4px;"></div>
    `;

    const fetchWithTimeout = (url, options, timeout = 120000) => {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
        ]);
    };

    function safeParseJSON(text) {
        text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        const match = text.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
        if (match) {
            return JSON.parse(match[0]);
        }
        return JSON.parse(text);
    }

    // --- MODULE 1: LESSON PLAN ---
    const lessonPlanForm = document.getElementById('lessonPlanForm');
    if (lessonPlanForm) {
        lessonPlanForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const subject = document.getElementById('lessonSubject').value;
            const grade = document.getElementById('lessonGrade').value;
            const topic = document.getElementById('lessonTopic').value;

            const lessonPlanResult = document.getElementById('lessonPlanResult');
            lessonPlanResult.style.display = 'block';
            lessonPlanResult.innerHTML = `<div class="form-card">${getSkeletonHTML()}</div>`;
            
            Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'AI сабақ жоспарын құрастыруда...', showConfirmButton: false, timer: 3000 });

            try {
                const [data] = await Promise.all([
                    fetchLessonPlanFromGemini(subject, grade, topic),
                    new Promise(r => setTimeout(r, 2000))
                ]);
                renderLessonPlan(data);
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Сәтті жасалды!', showConfirmButton: false, timer: 3000 });
            } catch (error) {
                console.warn("Fallback қолданылды (Сабақ жоспары), себебі:", error);
                renderLessonPlan(fallbackLessonPlan);
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Дайын!', showConfirmButton: false, timer: 3000 });
            }
        });
    }

    async function fetchLessonPlanFromGemini(subject, grade, topic) {
        const prompt = `Сен тәжірибелі мұғалімсің. Мына тақырып бойынша қазақ тілінде сабақ жоспарын жаз.\nПән: ${subject}. Сынып: ${grade}. Тақырып: ${topic}.\nЖауапты JSON форматында қайтар: {"aim": "Мақсаты", "results": ["Нәтиже 1"], "course": {"intro": "Кіріспе", "main": "Негізгі", "conclusion": "Қорытынды"}, "tasks": ["Тапсырма 1"]}`;
        const res = await fetchWithTimeout(`/api/chat`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: prompt, locale: 'kk', mode: 'teacher' })
        });
        if (!res.ok) throw new Error("API Error: " + res.status);
        const data = await res.json();
        return safeParseJSON(data.message);
    }

    function renderLessonPlan(data) {
        const lessonPlanResult = document.getElementById('lessonPlanResult');
        let resultsList = data.results.map(r => `<li><i data-lucide="check" style="color:var(--accent-green); width:16px; height:16px;"></i> ${r}</li>`).join('');
        let tasksList = data.tasks.map(t => `<li><i data-lucide="pen-tool" style="color:var(--primary); width:16px; height:16px;"></i> ${t}</li>`).join('');

        lessonPlanResult.innerHTML = `
            <div class="form-card" style="opacity:0; transform:translateY(20px);">
                <div style="margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid var(--border-color);">
                    <h4 style="color:var(--primary); display:flex; align-items:center; gap:8px; margin-bottom:16px;"><i data-lucide="target"></i> Сабақ мақсаты</h4>
                    <p>${data.aim}</p>
                </div>
                <div style="margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid var(--border-color);">
                    <h4 style="color:var(--primary); display:flex; align-items:center; gap:8px; margin-bottom:16px;"><i data-lucide="award"></i> Күтілетін нәтижелер</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px;">${resultsList}</ul>
                </div>
                <div style="margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid var(--border-color);">
                    <h4 style="color:var(--primary); display:flex; align-items:center; gap:8px; margin-bottom:16px;"><i data-lucide="clock"></i> Сабақ барысы</h4>
                    <div style="display:flex; flex-direction:column; gap:16px;">
                        <div><strong style="color:var(--secondary);">Кіріспе:</strong> <span style="color:var(--text-muted);">${data.course.intro}</span></div>
                        <div><strong style="color:var(--secondary);">Негізгі бөлім:</strong> <span style="color:var(--text-muted);">${data.course.main}</span></div>
                        <div><strong style="color:var(--secondary);">Қорытынды:</strong> <span style="color:var(--text-muted);">${data.course.conclusion}</span></div>
                    </div>
                </div>
                <div>
                    <h4 style="color:var(--primary); display:flex; align-items:center; gap:8px; margin-bottom:16px;"><i data-lucide="clipboard-list"></i> Тапсырмалар</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px;">${tasksList}</ul>
                </div>
            </div>
        `;
        lucide.createIcons();
        gsap.to(lessonPlanResult.querySelector('.form-card'), { opacity: 1, y: 0, duration: 0.5 });
    }

    // --- MODULE 2: TEST GEN ---
    const testGenForm = document.getElementById('testGenForm');
    if (testGenForm) {
        testGenForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const subject = document.getElementById('testSubject').value;
            const grade = document.getElementById('testGrade').value;
            const topic = document.getElementById('testTopic').value;
            const count = parseInt(document.getElementById('testCount').value);

            const testResult = document.getElementById('testResult');
            testResult.style.display = 'block';
            testResult.innerHTML = `<div class="form-card">${getSkeletonHTML()}</div>`;

            Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'AI тест сұрақтарын дайындауда...', showConfirmButton: false, timer: 3000 });

            try {
                const [data] = await Promise.all([
                    fetchTestFromGemini(subject, grade, topic, count),
                    new Promise(r => setTimeout(r, 2000))
                ]);
                renderTest(data, testResult);
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Тест жасалды!', showConfirmButton: false, timer: 3000 });
            } catch (error) {
                console.warn("Fallback қолданылды (Тест), себебі:", error);
                renderTest(fallbackTest.slice(0, count), testResult);
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Тест дайын!', showConfirmButton: false, timer: 3000 });
            }
        });
    }

    async function fetchTestFromGemini(subject, grade, topic, count) {
        const prompt = `Сен тәжірибелі мұғалімсің. Пән: ${subject}. Сынып: ${grade}. Тақырып: ${topic}. Сұрақ саны: ${count}. Тест сұрақтарын құрастыр.\nЖауапты JSON форматында қайтар: [ { "question": "Сұрақ?", "options": ["А", "В", "С", "Д"], "answer": "Дұрыс жауап" } ]`;
        const res = await fetchWithTimeout(`/api/chat`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: prompt, locale: 'kk', mode: 'teacher' })
        });
        if (!res.ok) throw new Error("API Error: " + res.status);
        const data = await res.json();
        return safeParseJSON(data.message);
    }

    function renderTest(questions, container) {
        let cardsHtml = questions.map((q, index) => {
            let optionsHtml = q.options.map(opt => `<div style="padding:12px 16px; border:1px solid var(--border-color); border-radius:8px; background:var(--bg-offset); margin-bottom:8px;">${opt}</div>`).join('');
            return `
                <div class="form-card" style="opacity:0; transform:translateY(20px);">
                    <h5 style="font-size:1.1rem; margin-bottom:16px;">${index + 1}. ${q.question}</h5>
                    <div style="margin-bottom:16px;">${optionsHtml}</div>
                    <div style="cursor:pointer; color:var(--accent-green); font-weight:500; display:flex; align-items:center; gap:8px;" onclick="
                        const content = this.nextElementSibling;
                        const icon = this.querySelector('i');
                        if(content.style.display === 'block') { content.style.display = 'none'; icon.setAttribute('data-lucide', 'eye'); } 
                        else { content.style.display = 'block'; icon.setAttribute('data-lucide', 'eye-off'); }
                        lucide.createIcons();
                    ">
                        <i data-lucide="eye" style="width:18px;height:18px;"></i> Дұрыс жауапты көру
                    </div>
                    <div style="display:none; margin-top:12px; padding:12px; background:var(--accent-green-light); border-left:4px solid var(--accent-green); border-radius:4px;">
                        <strong>Дұрыс жауап:</strong> ${q.answer}
                    </div>
                </div>
            `;
        }).join('');
        container.innerHTML = cardsHtml;
        lucide.createIcons();
        gsap.to(container.querySelectorAll('.form-card'), { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 });
    }

    // --- MODULE 3: EVALUATION ---
    const evaluationForm = document.getElementById('evaluationForm');
    if (evaluationForm) {
        evaluationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const task = document.getElementById('evalTask').value;
            const answer = document.getElementById('evalAnswer').value;
            
            const evalResult = document.getElementById('evalResult');
            evalResult.style.display = 'block';
            evalResult.innerHTML = `<div class="form-card">${getSkeletonHTML()}</div>`;
            
            Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Оқушы жауабы бағалануда...', showConfirmButton: false, timer: 3000 });
            
            try {
                const [data] = await Promise.all([
                    fetchEvalFromGemini(task, answer),
                    new Promise(r => setTimeout(r, 2000))
                ]);
                renderEval(data);
            } catch (error) {
                console.warn("Fallback қолданылды (Бағалау), себебі:", error);
                renderEval(fallbackEval);
            }
        });
    }

    async function fetchEvalFromGemini(task, answer) {
        const prompt = `Сен тәжірибелі мұғалімсің. Оқушының мына тапсырмаға берген жауабын бағала.\nТапсырма: "${task}"\nОқушының жауабы: "${answer}"\n5 балдық жүйемен бағалап, қысқаша пікір жаз.\nJSON қайтар: {"score": 5, "comment": "Пікір"}`;
        const res = await fetchWithTimeout(`/api/chat`, {
            method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ message: prompt, locale: 'kk', mode: 'teacher' })
        });
        const data = await res.json();
        return safeParseJSON(data.message);
    }

    function renderEval(data) {
        const evalResult = document.getElementById('evalResult');
        let scoreColor = data.score >= 4 ? 'var(--accent-green)' : (data.score === 3 ? 'var(--primary)' : 'var(--accent-red)');
        
        evalResult.innerHTML = `
            <div class="form-card" style="opacity:0; transform:translateY(20px); display:flex; gap:24px; align-items:center;">
                <div style="width:80px; height:80px; border-radius:50%; background:${scoreColor}; color:white; display:flex; align-items:center; justify-content:center; font-size:2rem; font-weight:700; flex-shrink:0;">${data.score}</div>
                <div>
                    <h3 style="margin-bottom:8px; color:var(--secondary);">AI Бағалау нәтижесі</h3>
                    <p style="color:var(--text-muted); font-size: 1.1rem; line-height: 1.6;">${data.comment}</p>
                </div>
            </div>
        `;
        gsap.to(evalResult.querySelector('.form-card'), { opacity: 1, y: 0, duration: 0.5 });
    }

    // --- MODULE 4: GAMES (QUIZ & MATCH) ---
    // Quiz
    let quizData = [];
    let currentQ = 0, quizScore = 0;

    const startQuizBtn = document.getElementById('startQuizBtn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', async () => {
            const topicInput = document.getElementById('quizTopicInput');
            const topic = topicInput ? topicInput.value.trim() : "";
            if (!topic) {
                if(window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'warning', title: 'Тақырыпты жазыңыз!', showConfirmButton: false, timer: 3000 });
                return;
            }

            const prevBtnText = startQuizBtn.innerHTML;
            startQuizBtn.innerHTML = 'Жасалуда...';
            startQuizBtn.disabled = true;

            try {
                if(window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Сұрақтар жасалуда...', showConfirmButton: false, timer: 3000 });
                
                const generatedQuiz = await fetchQuizFromGemini(topic);
                quizData = generatedQuiz;
                
                document.getElementById('quizSetup').style.display = 'none';
                document.getElementById('quizPlay').style.display = 'block';
                currentQ = 0; quizScore = 0;
                loadQuestion();
            } catch (error) {
                console.error("Quiz AI error:", error);
                if(window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Қате кетті!', showConfirmButton: false, timer: 3000 });
            } finally {
                startQuizBtn.innerHTML = prevBtnText;
                startQuizBtn.disabled = false;
            }
        });
    }

    async function fetchQuizFromGemini(topic) {
        const prompt = `Сен тәжірибелі мектеп мұғалімісің. "${topic}" тақырыбына оқушыларға арналған 5 сұрақтан тұратын квиз (тест) құрастыр. 
Жауапты міндетті түрде тек қана JSON форматында қайтар. Құрылымы мынадай болсын:
[
  { "q": "Сұрақ мәтіні?", "options": ["Жауап 1", "Жауап 2", "Жауап 3", "Жауап 4"], "a": "Дұрыс жауап" }
]`;

        const res = await fetchWithTimeout(`/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: prompt, locale: 'kk', mode: 'teacher' })
        }, 15000);
        
        if (!res.ok) throw new Error(`API Error: ${res.status}`);
        
        const data = await res.json();
        return safeParseJSON(data.message);
    }
    const restartQuizBtn = document.getElementById('restartQuizBtn');
    if(restartQuizBtn) {
        restartQuizBtn.addEventListener('click', () => {
            document.getElementById('quizResultScreen').style.display = 'none';
            document.getElementById('quizSetup').style.display = 'block';
        });
    }

    function loadQuestion() {
        if (currentQ >= quizData.length) { showQuizResult(); return; }
        const q = quizData[currentQ];
        document.getElementById('quizProgressText').innerText = `${currentQ + 1} / ${quizData.length}`;
        document.getElementById('quizQuestion').innerText = q.q;
        
        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = '';
        q.options.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'quiz-option-btn';
            btn.style.cssText = 'padding:16px; border:1px solid var(--border-color); border-radius:8px; margin-bottom:12px; cursor:pointer; background:var(--bg-offset); transition:all 0.2s; font-weight:500;';
            btn.innerText = opt;
            btn.onclick = () => handleAnswer(opt, btn);
            optionsContainer.appendChild(btn);
        });
        
        gsap.killTweensOf("#quizTimerBar");
        gsap.fromTo("#quizTimerBar", {scaleX: 1}, {scaleX: 0, duration: 10, ease: "none", transformOrigin: "left", onComplete: () => { handleAnswer(null, null); }});
    }

    function handleAnswer(ans, btn) {
        gsap.killTweensOf("#quizTimerBar"); 
        const q = quizData[currentQ];
        const isCorrect = (ans === q.a);
        
        document.querySelectorAll('.quiz-option-btn').forEach(b => {
            b.onclick = null;
            if(b.innerText === q.a) { b.style.background = 'var(--accent-green-light)'; b.style.borderColor = 'var(--accent-green)'; }
        });
        
        if (btn) {
            if (isCorrect) quizScore++;
            else { btn.style.background = '#FEE2E2'; btn.style.borderColor = '#EF4444'; }
        }
        
        setTimeout(() => { currentQ++; loadQuestion(); }, 1200);
    }

    function showQuizResult() {
        document.getElementById('quizPlay').style.display = 'none';
        const resScreen = document.getElementById('quizResultScreen');
        resScreen.style.display = 'block';
        document.getElementById('quizFinalScore').innerText = `${quizScore}/${quizData.length}`;
        document.getElementById('quizFinalScore').style.cssText = 'width:100px; height:100px; border-radius:50%; background:var(--primary); color:white; display:flex; align-items:center; justify-content:center; font-size:2rem; font-weight:700; margin:0 auto 32px;';
        if (quizScore === quizData.length) confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
        gsap.fromTo(resScreen, {opacity:0, scale:0.8}, {opacity:1, scale:1, duration:0.5});
    }

    // Match
    const matchData = [
        { id: "1", term: "Алгоритм", def: "Әрекеттердің нақты реті" },
        { id: "2", term: "Процессор", def: "Компьютердің 'миы'" },
        { id: "3", term: "Монитор", def: "Визуалды шығару құрылғысы" }
    ];

    document.getElementById('restartMatchBtn')?.addEventListener('click', initMatchGame);

    function initMatchGame() {
        const pool = document.getElementById('termsPool');
        const defCol = document.getElementById('definitionsCol');
        if(!pool || !defCol) return;
        
        pool.innerHTML = ''; defCol.innerHTML = '';
        let shuffled = [...matchData].sort(() => Math.random() - 0.5);
        
        shuffled.forEach(item => {
            pool.innerHTML += `<div class="match-item" data-id="${item.id}" style="padding:16px; background:white; border:1px solid var(--border-color); border-radius:8px; margin-bottom:12px; cursor:grab; box-shadow:0 2px 5px rgba(0,0,0,0.05); display:flex; align-items:center;"><i data-lucide="grip-vertical" style="width:16px;margin-right:8px;color:#cbd5e1;"></i><span>${item.term}</span></div>`;
        });
        
        matchData.forEach(item => {
            defCol.innerHTML += `
                <div class="def-row" style="padding:16px; background:var(--bg-offset); border-radius:8px; border:1px solid var(--border-color); min-height:80px; display:flex; flex-direction:column; justify-content:space-between;">
                    <div class="def-text" style="font-weight:500; margin-bottom:12px; color:var(--secondary);">${item.def}</div>
                    <div class="drop-zone" data-def="${item.id}" style="min-height:50px; border:2px dashed var(--border-color); border-radius:8px; display:flex; align-items:center; justify-content:center;"></div>
                </div>
            `;
        });
        lucide.createIcons();
        
        new Sortable(pool, { group: 'shared', animation: 150, sort: false });
        
        document.querySelectorAll('.drop-zone').forEach(zone => {
            new Sortable(zone, {
                group: { name: 'shared', put: function (to) { return to.el.children.length === 0; } },
                animation: 150,
                onAdd: function (evt) {
                    const item = evt.item;
                    if (item.getAttribute('data-id') === evt.to.getAttribute('data-def')) {
                        item.style.border = '2px solid var(--accent-green)';
                        item.style.boxShadow = 'none';
                        item.style.pointerEvents = 'none';
                        updateMatchScore();
                    } else {
                        item.style.border = '2px solid #EF4444';
                        setTimeout(() => item.style.border = '1px solid var(--border-color)', 400);
                        setTimeout(() => pool.appendChild(item), 400);
                    }
                }
            });
        });
        
        document.getElementById('matchScore').innerText = '0';
        document.getElementById('matchResultScreen').style.display = 'none';
    }

    function updateMatchScore() {
        let score = 0;
        document.querySelectorAll('.drop-zone').forEach(z => {
            if(z.children.length > 0 && z.children[0].getAttribute('data-id') === z.getAttribute('data-def')) score++;
        });
        document.getElementById('matchScore').innerText = score;
        if (score === matchData.length) {
            confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
            document.getElementById('matchResultScreen').style.display = 'block';
        }
    }

    // --- MODULE 5: AGENDA ---
    const agendaForm = document.getElementById('agendaForm');
    if (agendaForm) {
        agendaForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const type = document.getElementById('agendaType').value;
            const date = document.getElementById('agendaDate').value;
            const topic = document.getElementById('agendaTopic').value;

            const agendaResult = document.getElementById('agendaResult');
            agendaResult.style.display = 'block';
            agendaResult.innerHTML = `<div class="form-card">${getSkeletonHTML()}</div>`;

            Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'AI кеңес жоспарын құрастыруда...', showConfirmButton: false, timer: 3000 });

            try {
                const [data] = await Promise.all([
                    fetchAgendaFromGemini(type, topic, date),
                    new Promise(r => setTimeout(r, 2000))
                ]);
                renderAgenda(data);
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Жоспар дайын!', showConfirmButton: false, timer: 3000 });
            } catch (error) {
                console.warn("Fallback қолданылды (Кеңес), себебі:", error);
                renderAgenda(fallbackAgenda);
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Жоспар дайын!', showConfirmButton: false, timer: 3000 });
            }
        });
    }

    async function fetchAgendaFromGemini(type, topic, date) {
        const prompt = `Мектеп басшылығына арналған кеңес жоспарын құрастыр.\nКеңес түрі: ${type}. Күні: ${date}. Тақырыбы: ${topic}.\nJSON қайтар: {"agenda": [{"time": "10:00 - 10:15", "text": "Тармақ"}], "roles": ["Рөл 1"], "resolution": "Шешім"}`;
        const res = await fetchWithTimeout(`/api/chat`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: prompt, locale: 'kk', mode: 'director' })
        });
        const data = await res.json();
        return safeParseJSON(data.message);
    }

    function renderAgenda(data) {
        const resultDiv = document.getElementById('agendaResult');
        let agendaList = data.agenda.map(a => `<li style="display:flex; gap:16px; margin-bottom: 12px; align-items:flex-start;"><span style="background:var(--primary-light); color:var(--primary); padding: 4px 8px; border-radius:4px; font-weight:600; font-size:0.85rem; flex-shrink:0;">${a.time}</span><span style="color:var(--secondary); font-weight: 500;">${a.text}</span></li>`).join('');
        let rolesList = data.roles.map(r => `<li style="display:flex; align-items:center; gap:8px;"><i data-lucide="user" style="color:var(--accent-green); width:16px; height:16px;"></i> ${r}</li>`).join('');

        resultDiv.innerHTML = `
            <div class="form-card" style="opacity:0; transform:translateY(20px);">
                <div style="margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid var(--border-color);">
                    <h4 style="color:var(--primary); display:flex; align-items:center; gap:8px; margin-bottom:16px;"><i data-lucide="list"></i> Күн тәртібі</h4>
                    <ul style="list-style:none; padding:0;">${agendaList}</ul>
                </div>
                <div style="margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid var(--border-color);">
                    <h4 style="color:var(--primary); display:flex; align-items:center; gap:8px; margin-bottom:16px;"><i data-lucide="users"></i> Жауапты адамдар</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px;">${rolesList}</ul>
                </div>
                <div>
                    <h4 style="color:var(--primary); display:flex; align-items:center; gap:8px; margin-bottom:16px;"><i data-lucide="file-check"></i> Қорытынды шешім жобасы</h4>
                    <p style="color:var(--text-muted); line-height: 1.6;">${data.resolution}</p>
                </div>
            </div>
        `;
        lucide.createIcons();
        gsap.to(resultDiv.querySelector('.form-card'), { opacity: 1, y: 0, duration: 0.5 });
    }

    // --- MODULE 6: AI ANALYTICS ---
    const analyticsForm = document.getElementById('analyticsForm');
    if (analyticsForm) {
        analyticsForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const question = document.getElementById('analyticsQuestion').value;
            const analyticsResult = document.getElementById('analyticsResult');
            analyticsResult.style.display = 'block';
            analyticsResult.innerHTML = `<div class="form-card">${getSkeletonHTML()}</div>`;

            Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Деректер талдануда...', showConfirmButton: false, timer: 3000 });

            try {
                const [data] = await Promise.all([
                    fetchAnalyticsFromGemini(question),
                    new Promise(r => setTimeout(r, 2000))
                ]);
                renderAnalytics(data.text);
            } catch (error) {
                console.warn("Fallback қолданылды (Аналитика), себебі:", error);
                renderAnalytics(`Қате шықты: ${error.message}`);
            }
        });
    }

    async function fetchAnalyticsFromGemini(question) {
        const prompt = `Сен мектеп директорының AI-көмекшісісің.\nДеректер: ${JSON.stringify(window.schoolMockData || {})}\nСұрақ: "${question}"\nҚазақ тілінде нақты аналитикалық жауап бер.`;
        const res = await fetchWithTimeout(`/api/chat`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: prompt, locale: 'kk', mode: 'director' })
        });
        
        if (!res.ok) {
            let msg = "API Error: " + res.status;
            try { const errData = await res.json(); if(errData.error) msg = errData.error; } catch(e){}
            throw new Error(msg);
        }
        
        const data = await res.json();
        return { text: data.message };
    }

    function renderAnalytics(textHtml) {
        let formattedText = textHtml.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        const analyticsResult = document.getElementById('analyticsResult');
        analyticsResult.innerHTML = `
            <div class="form-card" style="opacity:0; transform:translateY(20px);">
                <div style="display:flex; align-items:center; gap:16px; margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid var(--border-color); justify-content:space-between;">
                    <div style="display:flex; align-items:center; gap:16px;">
                        <div style="width:48px; height:48px; border-radius:50%; background:var(--primary-light); color:var(--primary); display:flex; align-items:center; justify-content:center;"><i data-lucide="sparkles"></i></div>
                        <div>
                            <h3 style="margin:0; color:var(--secondary);">AI Аналитика нәтижесі</h3>
                            <span style="font-size:0.85rem; color:var(--text-muted);">Мектеп деректер базасы негізінде</span>
                        </div>
                    </div>
                    <button id="btnReadAnalytics" class="btn" style="background:var(--primary-light); color:var(--primary); border:none; border-radius:20px; padding: 8px 16px; font-size:0.9rem; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px;" title="Оқу">
                        🔊 Тыңдау
                    </button>
                </div>
                <div id="typewriterText" style="line-height:1.7; color:var(--secondary);"></div>
            </div>
        `;
        lucide.createIcons();
        gsap.to(analyticsResult.querySelector('.form-card'), { 
            opacity: 1, y: 0, duration: 0.5,
            onComplete: () => { 
                document.getElementById('typewriterText').innerHTML = formattedText; 
                playTTS(textHtml);
            } 
        });
        
        document.getElementById('btnReadAnalytics').addEventListener('click', () => {
            playTTS(textHtml);
        });
    }

    async function playTTS(text, showWarning = true) {
        try {
            // Remove markdown syntax for speech
            let cleanText = text.replace(/\*\*/g, '').replace(/\*/g, '').replace(/#/g, '').replace(/-/g, ' ').replace(/\n/g, ' ');
            
            const btn = document.getElementById('btnReadAnalytics');
            if (btn) btn.innerHTML = '<i data-lucide="loader" class="spin"></i> Жүктелуде...';
            if (window.lucide) window.lucide.createIcons();

            const res = await fetch('/api/text-to-speech', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: cleanText, locale: 'kk' })
            });

            if (!res.ok) {
                if(showWarning && window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Қате', text: 'Серверден аудио алу мүмкін болмады.', showConfirmButton: false, timer: 3000 });
                if (btn) btn.innerHTML = '🔊 Тыңдау';
                return;
            }

            const blob = await res.blob();
            const audioUrl = URL.createObjectURL(blob);
            const audio = new Audio(audioUrl);
            audio.play();

            audio.onended = () => {
                if (btn) btn.innerHTML = '🔊 Тыңдау';
            };
        } catch (err) {
            console.error("Playback error:", err);
            if(showWarning && window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Қате', text: 'Аудио ойнатуда қате кетті.', showConfirmButton: false, timer: 3000 });
            const btn = document.getElementById('btnReadAnalytics');
            if (btn) btn.innerHTML = '🔊 Тыңдау';
        }
    }

    // --- MODULE 7: DASHBOARD ---
    let chartsInitialized = false;
    let lineChart, barChart, doughnutChart;

    function initOrUpdateCharts() {
        if (chartsInitialized) {
            if(lineChart) lineChart.update();
            if(barChart) barChart.update();
            if(doughnutChart) doughnutChart.update();
            return;
        }
        chartsInitialized = true;
        
        const lineCtx = document.getElementById('lineChart');
        if(lineCtx) {
            lineChart = new Chart(lineCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['1-тоқсан', '2-тоқсан', '3-тоқсан', '4-тоқсан'],
                    datasets: [{ label: 'Жалпы үлгерім (%)', data: [98, 92, 88, 95], borderColor: '#2563EB', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderWidth: 3, tension: 0.4, fill: true }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { min: 50, max: 100 } } }
            });
        }

        const barCtx = document.getElementById('barChart');
        if(barCtx) {
            barChart = new Chart(barCtx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['5 сынып', '6 сынып', '7 сынып', '8 сынып', '9 сынып'],
                    datasets: [{ label: 'Үлгерім (%)', data: [85, 72, 58, 80, 90], backgroundColor: '#10B981', borderRadius: 4 }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100 } } }
            });
        }

        const dCtx = document.getElementById('doughnutChart');
        if(dCtx) {
            doughnutChart = new Chart(dCtx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Орындалды', 'Орындалуда', 'Күтуде'],
                    datasets: [{ data: [65, 25, 10], backgroundColor: ['#10B981', '#F59E0B', '#94A3B8'], borderWidth: 0 }]
                },
                options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { position: 'bottom' } } }
            });
        }
    }

    // --- MODULE 8: TASKS KANBAN ---
    function renderTasks() {
        if(!document.getElementById('kb-todo')) return;
        document.getElementById('kb-todo').innerHTML = '';
        document.getElementById('kb-inprogress').innerHTML = '';
        document.getElementById('kb-done').innerHTML = '';
        
        const priorityLabels = { high: 'Жоғары', medium: 'Орташа', low: 'Төмен' };
        
        tasksArray.forEach(t => {
            const cardHtml = `
                <div class="task-card" data-id="${t.id}">
                    <div class="task-title">${t.title}</div>
                    <div class="task-meta"><i data-lucide="user"></i> ${t.person}</div>
                    <div class="task-footer">
                        <div class="task-meta" style="margin:0;"><i data-lucide="calendar"></i> ${t.date}</div>
                        <div class="priority-badge priority-${t.priority}">${priorityLabels[t.priority]}</div>
                    </div>
                </div>
            `;
            document.getElementById(`kb-${t.status}`).insertAdjacentHTML('beforeend', cardHtml);
        });
        
        lucide.createIcons();
        updateTaskCounts();
    }

    function updateTaskCounts() {
        if(!document.getElementById('kb-todo')) return;
        ['todo', 'inprogress', 'done'].forEach(col => {
            const el = document.getElementById(`kb-${col}`);
            const count = el.children.length;
            el.previousElementSibling.querySelector('.task-count').innerText = count;
        });
    }

    function initKanban() {
        if(!document.getElementById('kb-todo')) return;
        renderTasks();
        ['kb-todo', 'kb-inprogress', 'kb-done'].forEach(colId => {
            new Sortable(document.getElementById(colId), {
                group: 'kanban', animation: 150, ghostClass: 'sortable-ghost',
                onEnd: function (evt) {
                    const taskId = parseInt(evt.item.getAttribute('data-id'));
                    const task = tasksArray.find(t => t.id === taskId);
                    if(task) task.status = evt.to.id.replace('kb-', '');
                    updateTaskCounts();
                }
            });
        });
    }

    const taskForm = document.getElementById('taskForm');
    if(taskForm) {
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            tasksArray.push({
                id: Date.now(),
                title: document.getElementById('taskTitle').value,
                person: document.getElementById('taskPerson').value,
                date: document.getElementById('taskDate').value,
                priority: document.getElementById('taskPriority').value,
                status: 'todo'
            });
            renderTasks();
            taskForm.reset();
            Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Тапсырма қосылды!', showConfirmButton: false, timer: 3000 });
        });
    }


    // --- MODULE 9: AI DASHBOARD REPORT UPLOAD ---
    const reportUploadInput = document.getElementById('reportUploadInput');
    if(reportUploadInput) {
        reportUploadInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if(!file) return;
            
            const btn = document.getElementById('btnUploadReport');
            const originalBtnHtml = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader" class="spin"></i> AI Талдауда...';
            btn.disabled = true;
            
            try {
                const text = await file.text();
                
                const prompt = `Сен мектеп директорының бас аналитигісің. Пайдаланушы мектептің есебін жүктеді.
Есеп мәтіні:
"""${text}"""

Осы мәтіннен мына деректерді шығарып ал. Егер мәтінде нақты сандар немесе графикке қажетті деректер толық болмаса, есептің жалпы мағынасына сүйеніп, логикалық түрде ШЫНАЙЫ сандарды ӨЗІҢ ОЙЛАП ТАП (генерацияла). Ешқашан бос массив немесе нөл (0) қайтарма.
ТЕК ҚАНА JSON форматында қайтар (Markdownсыз):
{
  "progress": "Жалпы үлгерім пайызы (тек сан, мысалы 85%)",
  "attendance": "Қатысу пайызы (мысалы 90%)",
  "tasks": "Тапсырмалар пайызы (мысалы 88%)",
  "active": "Белсенді оқушылар немесе мұғалімдер саны (тек сан)",
  "lineChart": [1-тоқсан, 2-тоқсан, 3-тоқсан, 4-тоқсан үлгерім сандары],
  "barChart": [5, 6, 7, 8, 9 сыныптар үлгерімі сандары],
  "doughnutChart": [орындалған, орындалуда, күтуде тапсырмалар саны]
}`;

                const res = await fetchWithTimeout(`/api/chat`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: prompt, locale: 'kk', mode: 'director' })
                }, 25000);
                
                if(!res.ok) throw new Error("API Error");
                
                const data = await res.json();
                let jsonText = data.message;
                const match = jsonText.match(/\{[\s\S]*\}/);
                if(!match) throw new Error("No JSON found in response: " + jsonText);
                const parsed = JSON.parse(match[0]);
                
                // Update Metrics
                document.getElementById('metric-progress').innerText = parsed.progress;
                document.getElementById('metric-attendance').innerText = parsed.attendance;
                document.getElementById('metric-tasks').innerText = parsed.tasks;
                document.getElementById('metric-active').innerText = parsed.active;
                
                // Update Charts
                if(lineChart) {
                    lineChart.data.datasets[0].data = parsed.lineChart;
                    lineChart.update();
                }
                if(barChart) {
                    barChart.data.datasets[0].data = parsed.barChart;
                    barChart.update();
                }
                if(doughnutChart) {
                    doughnutChart.data.datasets[0].data = parsed.doughnutChart;
                    doughnutChart.update();
                }
                
                if(window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Есеп сәтті талданды!', showConfirmButton: false, timer: 3000 });
                
            } catch(err) {
                console.error("Upload AI Error:", err);
                if(window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Қате кетті', text: err.message || 'Есепті талдау мүмкін болмады.', showConfirmButton: false, timer: 4000 });
            } finally {
                btn.innerHTML = originalBtnHtml;
                btn.disabled = false;
                if(window.lucide) window.lucide.createIcons();
                e.target.value = ''; // reset input
            }
        });
    }

    initKanban();
    
    // --- MODULE 10: VOICE INPUT FOR ANALYTICS ---
    const btnVoiceInput = document.getElementById('btnVoiceInput');
    const analyticsQuestion = document.getElementById('analyticsQuestion');
    
    if (btnVoiceInput) {
        let isRecording = false;
        let mediaRecorder = null;
        let audioChunks = [];
        let silenceTimer = null;
        let audioContext = null;
        let analyser = null;
        let microphone = null;

        btnVoiceInput.addEventListener('click', async () => {
            if (isRecording) {
                stopRecording();
            } else {
                startRecording();
            }
        });

        async function startRecording() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
                audioChunks = [];
                
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                analyser = audioContext.createAnalyser();
                microphone = audioContext.createMediaStreamSource(stream);
                microphone.connect(analyser);
                analyser.fftSize = 256;
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                let checkInterval;
                
                const checkSilence = () => {
                    if (!isRecording) return;
                    analyser.getByteFrequencyData(dataArray);
                    let sum = 0;
                    for(let i = 0; i < bufferLength; i++) {
                        sum += dataArray[i];
                    }
                    let avgVolume = sum / bufferLength;
                    
                    if (avgVolume < 15) { 
                        if (!silenceTimer) {
                            silenceTimer = setTimeout(() => {
                                if (isRecording) stopRecording();
                            }, 2000); 
                        }
                    } else {
                        if (silenceTimer) {
                            clearTimeout(silenceTimer);
                            silenceTimer = null;
                        }
                    }
                    checkInterval = requestAnimationFrame(checkSilence);
                };
                
                mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) audioChunks.push(e.data);
                };
                
                mediaRecorder.onstop = async () => {
                    if (checkInterval) cancelAnimationFrame(checkInterval);
                    if (silenceTimer) { clearTimeout(silenceTimer); silenceTimer = null; }
                    if (audioContext && audioContext.state !== 'closed') audioContext.close();
                    stream.getTracks().forEach(track => track.stop());
                    
                    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    await processVoice(audioBlob);
                };
                
                mediaRecorder.start();
                isRecording = true;
                btnVoiceInput.style.color = '#ef4444'; // Red for recording
                btnVoiceInput.innerHTML = '<i data-lucide="mic" style="width:24px;height:24px;" class="spin"></i>';
                if(window.lucide) window.lucide.createIcons();
                analyticsQuestion.placeholder = "Тыңдап жатырмын...";
                checkSilence();
            } catch (err) {
                console.error("Mic error:", err);
                if(window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Қате', text: 'Микрофонға рұқсат беріңіз', showConfirmButton: false, timer: 3000 });
            }
        }

        function stopRecording() {
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
            }
            isRecording = false;
            btnVoiceInput.style.color = 'var(--primary)';
            btnVoiceInput.innerHTML = '<i data-lucide="mic" style="width:24px;height:24px;"></i>';
            if(window.lucide) window.lucide.createIcons();
            analyticsQuestion.placeholder = "Сұрағыңызды жазыңыз немесе дауыспен айтыңыз...";
        }

        async function processVoice(audioBlob) {
            btnVoiceInput.innerHTML = '<i data-lucide="loader" style="width:18px;height:18px;" class="spin"></i>';
            if(window.lucide) window.lucide.createIcons();
            analyticsQuestion.placeholder = "Өңделуде...";

            try {
                const formData = new FormData();
                formData.append('audio', audioBlob, 'audio.webm');
                formData.append('locale', 'kk');
                
                const sttRes = await fetch('/api/speech-to-text', {
                    method: 'POST',
                    body: formData
                });
                
                if(!sttRes.ok) throw new Error("STT Failed");
                const sttData = await sttRes.json();
                const transcript = sttData.text;
                
                if(transcript && transcript.trim() !== '') {
                    analyticsQuestion.value = transcript;
                    // Auto submit form
                    setTimeout(() => {
                        document.getElementById('btnAnalyticsGenerate').click();
                    }, 500);
                }
            } catch (err) {
                console.error("Speech recognition error", err);
                if(window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Қате', text: 'Дауысты өңдеу мүмкін болмады.', showConfirmButton: false, timer: 3000 });
            } finally {
                btnVoiceInput.innerHTML = '<i data-lucide="mic" style="width:24px;height:24px;"></i>';
                if(window.lucide) window.lucide.createIcons();
                analyticsQuestion.placeholder = "7-сыныптарда қандай проблема бар?";
            }
        }
    }
    
    // Init charts on load if dashboard is the default active section
    if (document.getElementById('sec-dashboard') && document.getElementById('sec-dashboard').classList.contains('active')) {
        initOrUpdateCharts();
    }
});
