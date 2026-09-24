// director.js



const fallbackAgenda = {
    agenda: [
        { time: "10:00 - 10:15", text: "Өткен жиналыс шешімдерінің орындалуын тексеру" },
        { time: "10:15 - 10:45", text: "Оқу сапасын арттыру және алдағы емтихандарға дайындық барысын талқылау" },
        { time: "10:45 - 11:15", text: "Мұғалімдердің біліктілігін арттыру және жаңа әдістемелерді енгізу қорытындысы" }
    ],
    roles: [
        "Төраға: Мектеп директоры",
        "Баяндамашылар: Оқу ісі меңгерушілері, пән мұғалімдері",
        "Хатшы: Педагог-ұйымдастырушы"
    ],
    resolution: "Дайындық бойынша қосымша сабақтар кестесін бекіту. Пән мұғалімдеріне оқу сапасы төмен сыныптармен жеке жұмыс жоспарын құруды тапсыру."
};

const fallbackAnalytics = `
**Проблема:** 7-сыныптарда математика және физика пәндерінен үлгерім төмен (58%), сондай-ақ 3-тоқсанда сабаққа қатысу деңгейі (88%) айтарлықтай төмендеген.
<br><br>
**Мүмкін себептер:** Жаратылыстану бағытындағы пәндердің күрделенуі оқушыларға қиындық туғызып отыр. Оған қоса, 3-тоқсандағы ауа райының қолайсыздығы мен маусымдық аурулар сабақты жиі босатуға алып келді. Бұл екі фактор бірігіп, үлгерімнің түсуіне тікелей әсер етті.
<br><br>
**Ұсыныстар:**
1. 7-сыныптар үшін математика және физика пәндерінен сабақтан тыс қосымша консультациялар ұйымдастыру.
2. Мұғалімдерге осы пәндер бойынша сабақты интерактивті, цифрлық ресурстарды қолдана отырып өтуді тапсыру.
3. Жиі сабақ босататын оқушылардың ата-аналарымен жеке кездесулер өткізіп, үлгерімді бақылауды күшейту.
`;

const initialTasks = [
    { id: 1, title: "Жаңа оқу жылының жоспарын бекіту", person: "Директор", date: "2026-08-15", priority: "high", status: "todo" },
    { id: 2, title: "7-сыныптарға арналған математикадан қосымша сабақ", person: "Оқу ісі меңгерушісі", date: "2026-08-20", priority: "medium", status: "todo" },
    { id: 3, title: "Оқушылардың сабаққа қатысуын тексеру", person: "Тәрбие ісі меңгерушісі", date: "2026-08-14", priority: "high", status: "inprogress" },
    { id: 4, title: "Кабинеттердің санитарлық жағдайын тексеру", person: "Шаруашылық меңгерушісі", date: "2026-08-10", priority: "medium", status: "done" },
    { id: 5, title: "Ата-аналар жиналысының кестесін жасау", person: "Сынып жетекшілері", date: "2026-08-25", priority: "low", status: "todo" }
];
let tasksArray = [...initialTasks];

document.addEventListener('DOMContentLoaded', () => {

    // --- Tab Switching Logic ---
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active to current
            btn.classList.add('active');
            const targetId = 'tab-' + btn.getAttribute('data-tab');
            const target = document.getElementById(targetId);
            target.classList.add('active');
            
            // Fade animation
            gsap.fromTo(target, {opacity: 0, y: 15}, {opacity: 1, y: 0, duration: 0.3, ease: "power2.out"});
            
            // Re-render specific components on tab show
            if (btn.getAttribute('data-tab') === 'dashboard') {
                initOrUpdateCharts();
            }
        });
    });

    const getSkeletonHTML = () => `
        <div class="agenda-card">
            <div class="skeleton" style="height: 32px; width: 60%; margin-bottom: 24px;"></div>
            <div class="skeleton" style="height: 20px; width: 100%;"></div>
            <div class="skeleton" style="height: 20px; width: 100%;"></div>
            <div class="skeleton" style="height: 20px; width: 80%; margin-bottom: 32px;"></div>
        </div>
    `;

    const fetchWithTimeout = (url, options, timeout = 120000) => {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
        ]);
    };

    // --- Tab 1: Agenda Generation ---
    const agendaForm = document.getElementById('agendaForm');
    if (agendaForm) {
        agendaForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const type = document.getElementById('agendaType').value;
            const date = document.getElementById('agendaDate').value;
            const topic = document.getElementById('agendaTopic').value;

            const agendaResult = document.getElementById('agendaResult');
            agendaResult.style.display = 'block';
            agendaResult.innerHTML = getSkeletonHTML();
            gsap.fromTo(agendaResult, {opacity: 0}, {opacity: 1, duration: 0.3});

            Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'AI кеңес жоспарын құрастыруда...', showConfirmButton: false, timer: 3000 });

            try {
                const [data] = await Promise.all([
                    fetchAgendaFromGemini(type, topic, date),
                    new Promise(r => setTimeout(r, 2000))
                ]);
                renderAgenda(data);
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Жоспар дайын!', showConfirmButton: false, timer: 3000 });
            } catch (error) {
                console.warn(error);
                renderAgenda(fallbackAgenda);
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Жоспар дайын!', showConfirmButton: false, timer: 3000 });
            }
        });
    }

    async function fetchAgendaFromGemini(type, topic, date) {
        
        const prompt = `Мектеп МИФ бырлестыгы арналған кеңес жоспарын құрастыр.
Кеңес түрі: ${type}. Күні: ${date}. Тақырыбы: ${topic}.
Жауапты міндетті түрде JSON форматында қайтар. Құрылымы:
{
  "agenda": [
    { "time": "Хронометраж (мысалы: 10:00 - 10:15)", "text": "Тармақ мәтіні" }
  ],
  "roles": ["Рөл 1", "Рөл 2"],
  "resolution": "Қорытынды шешім жобасы мәтіні"
}
JSON-нан басқа артық мәтін жазба.`;
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
        let text = data.message;
        text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        const match = text.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
        return match ? JSON.parse(match[0]) : JSON.parse(text);
    }

    function renderAgenda(data) {
        const resultDiv = document.getElementById('agendaResult');
        let agendaList = data.agenda.map(a => `
            <li style="display:flex; gap:16px; margin-bottom: 12px; align-items:flex-start;">
                <span style="background:var(--primary-light); color:var(--primary); padding: 4px 8px; border-radius:4px; font-weight:600; font-size:0.85rem; flex-shrink:0;">${a.time}</span>
                <span style="color:var(--secondary); font-weight: 500;">${a.text}</span>
            </li>
        `).join('');
        let rolesList = data.roles.map(r => `<li style="display:flex; align-items:center; gap:8px;"><i data-lucide="user" style="color:var(--accent-green); width:16px; height:16px;"></i> ${r}</li>`).join('');

        resultDiv.innerHTML = `
            <div class="agenda-card" style="opacity: 0; transform: translateY(20px);">
                <div class="agenda-section">
                    <h4><i data-lucide="list"></i> Күн тәртібі</h4>
                    <ul style="list-style:none; padding:0; margin-top: 16px;">${agendaList}</ul>
                </div>
                <div class="agenda-section">
                    <h4><i data-lucide="users"></i> Жауапты адамдар</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px; color:var(--text-muted); margin-top: 16px;">${rolesList}</ul>
                </div>
                <div class="agenda-section" style="border-bottom:none; margin-bottom:0; padding-bottom:0;">
                    <h4><i data-lucide="file-check"></i> Қорытынды шешім жобасы</h4>
                    <p style="color:var(--text-muted); line-height: 1.6; margin-top: 12px;">${data.resolution}</p>
                </div>
            </div>
        `;
        lucide.createIcons();
        gsap.to(resultDiv.querySelector('.agenda-card'), { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    }

    // --- Tab 2: AI Analytics ---
    const analyticsForm = document.getElementById('analyticsForm');
    if (analyticsForm) {
        analyticsForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const question = document.getElementById('analyticsQuestion').value;

            const analyticsResult = document.getElementById('analyticsResult');
            analyticsResult.style.display = 'block';
            analyticsResult.innerHTML = getSkeletonHTML();
            gsap.fromTo(analyticsResult, {opacity: 0}, {opacity: 1, duration: 0.3});

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
            <div class="analytics-card" style="opacity: 0; transform: translateY(20px);">
                <div class="analytics-header">
                    <div class="analytics-icon">
                        <i data-lucide="sparkles"></i>
                    </div>
                    <div>
                        <h3 style="margin:0; color:var(--secondary);">AI Аналитика нәтижесі</h3>
                        <span style="font-size:0.85rem; color:var(--text-muted);">Мектеп деректер базасы негізінде</span>
                    </div>
                </div>
                <div class="typewriter-text" id="typewriterText"></div>
            </div>
        `;
        lucide.createIcons();
        
        gsap.to(analyticsResult.querySelector('.analytics-card'), { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            ease: "power2.out",
            onComplete: () => {
                const textContainer = document.getElementById('typewriterText');
                textContainer.innerHTML = '';
                let i = 0;
                let text = "";
                let isTag = false;
                
                function type() {
                    if (i < formattedText.length) {
                        let char = formattedText.charAt(i);
                        text += char;
                        if (char === '<') isTag = true;
                        if (char === '>') isTag = false;
                        
                        textContainer.innerHTML = text;
                        i++;
                        
                        if (isTag) {
                            type();
                        } else {
                            setTimeout(type, 10);
                        }
                    }
                }
                type();
            }
        });
    }

    // --- Tab 3: Dashboard ---
    let chartsInitialized = false;
    let lineChart, barChart, doughnutChart;

    function initOrUpdateCharts() {
        if (chartsInitialized) {
            lineChart.update();
            barChart.update();
            doughnutChart.update();
            return;
        }
        chartsInitialized = true;
        
        let qData = [98, 92, 88, 95];
        let barLabels = ['5 сынып', '6 сынып', '7 сынып', '8 сынып', '9 сынып', '10 сынып', '11 сынып'];
        let barData = [85, 72, 58, 80, 90, 75, 92];
        
        if (window.schoolMockData) {
            try {
                const qs = window.schoolMockData.education_quality.quarters;
                qData = [qs[0].quality_percent, qs[1].quality_percent, qs[2].quality_percent, qs[3].quality_percent];
                
                const annualQuality = window.schoolMockData.education_quality.annual.quality_percent;
                const att1 = window.schoolMockData.attendance.shift_1.overall_attendance_percent;
                const att2 = window.schoolMockData.attendance.shift_2.overall_attendance_percent;
                const overallAtt = ((att1 + att2) / 2).toFixed(1);

                const metrics = document.querySelectorAll('.metric-value');
                if (metrics.length >= 2) {
                    metrics[0].textContent = annualQuality + '%';
                    metrics[1].textContent = overallAtt + '%';
                }

                const breakdown = qs[3].class_breakdown;
                barLabels = ['5 сынып', '6 сынып', '7 сынып', '8 сынып', '9 сынып'];
                barData = [breakdown.class_5.quality_pct, breakdown.class_6.quality_pct, breakdown.class_7.quality_pct, breakdown.class_8.quality_pct, breakdown.class_9.quality_pct];
            } catch (e) {
                console.error("Error parsing schoolMockData for charts:", e);
            }
        }
        
        // 1. Line Chart
        const lineCtx = document.getElementById('lineChart').getContext('2d');
        lineChart = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['1-тоқсан', '2-тоқсан', '3-тоқсан', '4-тоқсан'],
                datasets: [{
                    label: 'Білім сапасы (%)',
                    data: qData,
                    borderColor: '#2563EB',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#2563EB',
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { min: 40, max: 100, grid: { color: '#E2E8F0' } },
                    x: { grid: { display: false } }
                }
            }
        });

        // 2. Bar Chart
        const barCtx = document.getElementById('barChart').getContext('2d');
        barChart = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: barLabels,
                datasets: [{
                    label: 'Білім сапасы (%)',
                    data: barData,
                    backgroundColor: '#10B981',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { min: 0, max: 100, grid: { color: '#E2E8F0' } },
                    x: { grid: { display: false } }
                }
            }
        });

        // 3. Doughnut Chart
        const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
        doughnutChart = new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Орындалды', 'Орындалуда', 'Күтуде'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: ['#10B981', '#F59E0B', '#94A3B8'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 12, padding: 16, font: { family: 'Inter' } } }
                }
            }
        });
    }

    // --- Tab 4: Kanban Tasks ---
    function renderTasks() {
        document.getElementById('kb-todo').innerHTML = '';
        document.getElementById('kb-inprogress').innerHTML = '';
        document.getElementById('kb-done').innerHTML = '';
        
        const priorityLabels = { high: 'Жоғары', medium: 'Орташа', low: 'Төмен' };
        
        tasksArray.forEach(t => {
            const cardHtml = `
                <div class="task-card" data-id="${t.id}">
                    <div class="task-title">${t.title}</div>
                    <div class="task-meta">
                        <i data-lucide="user"></i> ${t.person}
                    </div>
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
        ['todo', 'inprogress', 'done'].forEach(col => {
            const el = document.getElementById(`kb-${col}`);
            const count = el.children.length;
            el.previousElementSibling.querySelector('.task-count').innerText = count;
        });
    }

    function initKanban() {
        renderTasks();
        const kbCols = ['kb-todo', 'kb-inprogress', 'kb-done'];
        kbCols.forEach(colId => {
            new Sortable(document.getElementById(colId), {
                group: 'kanban',
                animation: 150,
                ghostClass: 'sortable-ghost',
                onEnd: function (evt) {
                    const item = evt.item;
                    const taskId = parseInt(item.getAttribute('data-id'));
                    const newStatus = evt.to.id.replace('kb-', '');
                    
                    const task = tasksArray.find(t => t.id === taskId);
                    if(task) task.status = newStatus;
                    updateTaskCounts();
                }
            });
        });
    }

    const taskForm = document.getElementById('taskForm');
    if(taskForm) {
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('taskTitle').value;
            const person = document.getElementById('taskPerson').value;
            const date = document.getElementById('taskDate').value;
            const priority = document.getElementById('taskPriority').value;
            
            tasksArray.push({
                id: Date.now(),
                title, person, date, priority, status: 'todo'
            });
            renderTasks();
            
            taskForm.reset();
            Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Тапсырма қосылды!', showConfirmButton: false, timer: 3000 });
        });
    }

    // Initialize Kanban on load
    initKanban();
});
