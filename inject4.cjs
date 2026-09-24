const fs = require('fs');
const path = require('path');

let appFile = path.join(__dirname, 'app.html');
let appContent = fs.readFileSync(appFile, 'utf8');

// 1. Add menu item
const menuItemToInsert = '<div class="menu-item" data-target="sec-pisa"><i data-lucide="globe"></i> PISA / ICILS</div>';
if (!appContent.includes('data-target="sec-pisa"')) {
    appContent = appContent.replace(
        '<div class="menu-item" data-target="sec-test"><i data-lucide="list-checks"></i> Тест генерациялау</div>',
        '<div class="menu-item" data-target="sec-test"><i data-lucide="list-checks"></i> Тест генерациялау</div>\n                ' + menuItemToInsert
    );
}

// 2. Add section
const pisaSection = `
                <!-- ================== SECTION: PISA ================== -->
                <section id="sec-pisa" class="app-section">
                    <div style="margin-bottom: 24px;">
                        <h2 style="font-size: 1.75rem; font-weight:800; color:var(--secondary); margin-bottom:8px;">PISA, ICILS бағытындағы тапсырмалар</h2>
                        <p style="color:var(--text-muted);">Оқушылардың функционалдық, математикалық және компьютерлік сауаттылығын дамытуға арналған тапсырмалар.</p>
                    </div>

                    <div class="form-card">
                        <form id="pisaForm">
                            <div class="form-grid">
                                <div class="form-group">
                                    <label>Бағыты</label>
                                    <select id="pisaType" required>
                                        <option value="pisa_math">PISA (Математикалық сауаттылық)</option>
                                        <option value="pisa_science">PISA (Жаратылыстану сауаттылығы)</option>
                                        <option value="pisa_reading">PISA (Оқу сауаттылығы)</option>
                                        <option value="icils">ICILS (Компьютерлік және ақпараттық сауаттылық)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Сынып</label>
                                    <select id="pisaGrade" required>
                                        <option value="5">5-сынып</option>
                                        <option value="6">6-сынып</option>
                                        <option value="7">7-сынып</option>
                                        <option value="8">8-сынып</option>
                                        <option value="9">9-сынып</option>
                                        <option value="10">10-сынып</option>
                                        <option value="11">11-сынып</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group" style="margin-top:16px;">
                                <label>Тақырыбы немесе жағдаят</label>
                                <textarea id="pisaTopic" rows="3" placeholder="Мысалы: 'Экология және энергия үнемдеу' немесе 'Excel-де мәліметтер базасын құру'..." required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" id="btnGenPisa" style="margin-top: 16px;">
                                <i data-lucide="sparkles"></i> Тапсырманы генерациялау
                            </button>
                        </form>
                    </div>

                    <div id="pisaResult" class="form-card" style="display: none; margin-top: 24px;">
                        <h3 style="margin-bottom: 16px; color: var(--primary);">Нәтиже:</h3>
                        <div id="pisaOutput" class="markdown-body" style="background: var(--bg-offset); padding: 20px; border-radius: 12px; border: 1px solid var(--border-color); min-height: 200px;"></div>
                        <div style="margin-top: 16px; display: flex; gap: 12px;">
                            <button class="btn btn-outline" onclick="copyText('pisaOutput')">
                                <i data-lucide="copy"></i> Көшіру
                            </button>
                            <button class="btn btn-outline" onclick="window.print()">
                                <i data-lucide="printer"></i> Басып шығару
                            </button>
                        </div>
                    </div>
                </section>
`;

if (!appContent.includes('id="sec-pisa"')) {
    // insert before sec-eval
    const marker = '<!-- ================== SECTION: EVAL ================== -->';
    appContent = appContent.replace(marker, pisaSection + '\n                ' + marker);
}

fs.writeFileSync(appFile, appContent);
console.log("app.html updated with PISA/ICILS section");
