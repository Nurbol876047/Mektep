const fs = require('fs');
const path = require('path');

let appJsFile = path.join(__dirname, 'app.js');
let appJsContent = fs.readFileSync(appJsFile, 'utf8');

const pisaLogic = `
    // --- MODULE: PISA / ICILS ---
    const pisaForm = document.getElementById('pisaForm');
    if (pisaForm) {
        pisaForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const pisaType = document.getElementById('pisaType').value;
            const pisaGrade = document.getElementById('pisaGrade').value;
            const pisaTopic = document.getElementById('pisaTopic').value;

            const pisaResult = document.getElementById('pisaResult');
            const pisaOutput = document.getElementById('pisaOutput');
            
            pisaResult.style.display = 'block';
            pisaOutput.innerHTML = getSkeletonHTML();

            Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Тапсырма генерациялануда...', showConfirmButton: false, timer: 3000 });

            try {
                const prompt = \`Сен PISA және ICILS халықаралық зерттеулерінің форматын жақсы білетін сарапшы мұғалімсің.
Сынып: \${pisaGrade}.
Бағыты: \${pisaType} (\${pisaType === 'icils' ? 'Компьютерлік және ақпараттық сауаттылық' : 'Функционалдық сауаттылық'}).
Тақырып/Жағдаят: \${pisaTopic}.

Талаптар:
1. Өмірлік (шынайы) немесе ғылыми жағдаятты сипаттайтын қысқаша мәтін (стимул) жаз.
2. Осы мәтінге сүйеніп 3 тапсырма құрастыр:
   - 1-тапсырма: Ақпаратты табу / Бастапқы деңгей (Жеңіл).
   - 2-тапсырма: Ақпаратты талдау немесе есептеу / Орташа деңгей.
   - 3-тапсырма: Қорытынды жасау, бағалау немесе шешім ұсыну / Күрделі деңгей (Жоғары танымдық деңгей).
3. Әр тапсырманың дұрыс жауабын және бағалау критерийін (қандай жауап толық, қандай жауап жартылай саналатынын) соңында көрсет.
4. Қазақ тілінде, түсінікті етіп жаз.\`;

                const [data] = await Promise.all([
                    fetchWithTimeout('/api/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ message: prompt, locale: 'kk', mode: 'teacher' })
                    }),
                    new Promise(r => setTimeout(r, 2000))
                ]);
                
                if (!data.ok) throw new Error("API қателігі");
                const resJson = await data.json();
                
                let htmlRes = typeof marked !== 'undefined' ? marked.parse(resJson.message) : resJson.message.replace(/\\n/g, '<br>');
                pisaOutput.innerHTML = htmlRes;
                
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Тапсырма дайын!', showConfirmButton: false, timer: 3000 });
            } catch (error) {
                console.error("PISA қатесі:", error);
                pisaOutput.innerHTML = '<div style="color:red;">Қате пайда болды. Сервермен байланысты тексеріңіз.</div>';
            }
        });
    }

`;

if (!appJsContent.includes('// --- MODULE: PISA / ICILS ---')) {
    appJsContent = appJsContent.replace('    // --- MODULE 3: EVALUATION ---', pisaLogic + '    // --- MODULE 3: EVALUATION ---');
    fs.writeFileSync(appJsFile, appJsContent);
    console.log("app.js updated with PISA logic");
} else {
    console.log("app.js already has PISA logic");
}
