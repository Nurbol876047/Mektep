const fs = require('fs');
const path = require('path');

const additionalContentApp = `
                    <h3 style="margin: 24px 0 16px; color: var(--primary);">ІІІ Тоқсан | Қаңтар – наурыз</h3>
                    <div style="overflow-x: auto; margin-bottom: 32px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 20px;">
                        <table class="plan-table">
                            <thead>
                                <tr><th>№</th><th>Жұмыс мазмұны</th><th>Мақсаты</th><th>Түрі</th><th>Мерзімі</th><th>Жауапты</th><th>Қайда қаралады</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>22</td><td>ІІ тоқсан және І жартыжылдық қорытындысы бойынша оқу бағдарламасының орындалуын, бағалау сапасын талдау.</td><td>Мемлекеттік стандарт талаптарының орындалуын бақылау.</td><td>Анықтама, мониторинг</td><td>Қаңтар</td><td>ӘБ жетекшісі, пән мұғалімдері</td><td>ӘБ отырысы</td></tr>
                                <tr><td>23</td><td>Аттестаттаудан өтетін педагогтердің портфолиосын, сабақ зерттеуі мен кәсіби жетістіктерін талдау және әдістемелік қолдау көрсету.</td><td>Педагогтердің кәсіби дамуын қолдау.</td><td>Кеңес, анықтама</td><td>Қаңтар–сәуір</td><td>ӘБ жетекшісі, оқу ісі жөніндегі орынбасар</td><td>ӘБ отырысы</td></tr>
                                <tr><td>24</td><td>«ЖИ көмегімен тапсырма әзірлеу және оны верификациялау» тақырыбында әдістемелік тренинг.</td><td>ЖИ материалдарының дұрыстығын, сенімділігін және оқу бағдарламасына сәйкестігін тексеру мәдениетін қалыптастыру.</td><td>Тренинг</td><td>Қаңтар</td><td>Аяпова М</td><td>ӘБ отырысы</td></tr>
                                <tr><td>25</td><td>Физика зертханалық жұмыстары мен информатика практикалық жұмыстарының орындалуын және есептерінің рәсімделуін тексеру.</td><td>Практикалық дағды, ғылыми адалдық және қауіпсіздік талаптарының орындалуын анықтау.</td><td>Анықтама</td><td>Ақпан</td><td>ӘБ жетекшісі, пән мұғалімдері</td><td>ӘБ отырысы</td></tr>
                                <tr><td>26</td><td>9, 11-сыныптар бойынша байқау тестілеулерін өткізу, нәтижелерін тақырыптық талдау және жеке түзету маршрутын жасау.</td><td>Қорытынды аттестаттау мен ҰБТ нәтижесін жақсарту.</td><td>Байқау тесті, талдау</td><td>Ақпан–сәуір</td><td>Пән мұғалімдері</td><td>ӘБ отырысы, директор жанындағы кеңес</td></tr>
                                <tr><td>27</td><td>Педагогтердің кәсіби байқауларға, конференцияларға, вебинарларға және әдістемелік жарияланымдарға қатысуын ұйымдастыру.</td><td>Кәсіби құзыреттілікті және озық тәжірибені тарату.</td><td>Байқау, жарияланым</td><td>Жыл бойы</td><td>ӘБ жетекшісі, пән мұғалімдері</td><td>ӘБ отырысы</td></tr>
                                <tr><td>28</td><td>Оқушылардың ғылыми, инженерлік және бағдарламалау жобаларының аралық қорғауын өткізу; ЖИ қолданылған жағдайда автордың жеке үлесін көрсету.</td><td>Зерттеу нәтижесін дәлелдеу, таныстыру және академиялық адалдық дағдыларын дамыту.</td><td>Аралық қорғау</td><td>Наурыз</td><td>ӘБ жетекшісі, жоба жетекшілері</td><td>ӘБ отырысы</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style="margin: 24px 0 16px; color: var(--primary);">ІV Тоқсан | Сәуір – маусым</h3>
                    <div style="overflow-x: auto; margin-bottom: 32px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 20px;">
                        <table class="plan-table">
                            <thead>
                                <tr><th>№</th><th>Жұмыс мазмұны</th><th>Мақсаты</th><th>Түрі</th><th>Мерзімі</th><th>Жауапты</th><th>Қайда қаралады</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>29</td><td>ІІІ тоқсан қорытындысын талдау; ББЖМ бағыттары бойынша қайта диагностика өткізу.</td><td>Түзету жұмыстарының тиімділігін бағалау және қалған олқылықтарды анықтау.</td><td>Мониторинг</td><td>Сәуір</td><td>ӘБ жетекшісі, математика мұғалімдері</td><td>ӘБ отырысы</td></tr>
                                <tr><td>30</td><td>Физика сабақтарында қауіпсіздік, экологиялық және құқықтық сауаттылықты кіріктіру бойынша тапсырмалар жинағын таныстыру.</td><td>Физикалық ұғымдарды өмірлік жағдайлармен байланыстырып, азаматтық жауапкершілікті қалыптастыру.</td><td>Дөңгелек үстел, жинақ</td><td>Сәуір</td><td>Жұмабекова С</td><td>ӘБ отырысы</td></tr>
                                <tr><td>31</td><td>Дарынды және үлгерімі төмен оқушылармен, олимпиада және ғылыми жоба бағытындағы жұмыстардың жылдық қорытындысын шығару.</td><td>Жеке жұмыс нәтижелілігін бағалау және келесі оқу жылына ұсыныс әзірлеу.</td><td>Есеп, рейтинг</td><td>Мамыр</td><td>Оңдасын Г</td><td>ӘБ отырысы</td></tr>
                                <tr><td>32</td><td>Оқу бағдарламасының орындалуын, жылдық білім сапасын, қорытынды аттестаттау/ҰБТ нәтижелерін және педагогтердің кәсіби қызметін қорытындылау; 2027–2028 оқу жылына міндеттер жобасын әзірлеу.</td><td>Бірлестік жұмысының нәтижесін бағалау және келесі кезеңді жоспарлау.</td><td>Жылдық есеп, хаттама</td><td>Мамыр–маусым</td><td>ӘБ жетекшісі, пән мұғалімдері</td><td>ӘБ отырысы, педагогикалық кеңес</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style="margin: 24px 0 16px; color: var(--primary);">Пән мұғалімдерінің құрамы және ашық сабақ өткізу кестесі</h3>
                    <p style="color: var(--text-muted); margin-bottom: 12px;">Апталық тақырыбы: «Алгоритмнен ғарышқа дейін: МИФ құпиялары» (қараша)</p>
                    <div style="overflow-x: auto; margin-bottom: 32px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 20px;">
                        <table class="plan-table" style="width: 100%; max-width: 800px;">
                            <thead>
                                <tr>
                                    <th style="width: 10%;">№</th>
                                    <th style="width: 60%;">Мұғалімнің аты-жөні</th>
                                    <th style="width: 30%;">Ашық сабақ өткізетін мерзімі</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>Төребаева Сәндігүл Әбеншеқызы</td><td>Сәуір</td></tr>
                                <tr><td>2</td><td>Баекешова Аигерим Сериккалиевна</td><td>Ақпан</td></tr>
                                <tr><td>3</td><td>Емберген Гүлдана Бегімбайқызы</td><td>Қараша</td></tr>
                                <tr><td>4</td><td>Маханов Айдос Нұрханович</td><td>Қазан</td></tr>
                                <tr><td>5</td><td>Серікбаев Қонысбек Бақытбекұлы</td><td>Наурыз</td></tr>
                                <tr><td>6</td><td>Калмаханов Берден Игенбаевич</td><td>Желтоқсан</td></tr>
                                <tr><td>7</td><td>Жұмабекова Сауле Күнтуарқызы</td><td>Желтоқсан</td></tr>
                                <tr><td>8</td><td>Ондасын Гүлфайруз Бақытқызы</td><td>Қаңтар</td></tr>
                                <tr><td>9</td><td>Утемуратова Нургул Даражаевна</td><td>Желтоқсан</td></tr>
                                <tr><td>10</td><td>Аяпова Маржан Абилмазимовна</td><td>Қараша</td></tr>
                                <tr><td>11</td><td>Шәймерден Аякоз Берекетқызы</td><td>Наурыз</td></tr>
                            </tbody>
                        </table>
                    </div>
`;

// App HTML insertion
let appFile = path.join(__dirname, 'app.html');
let appContent = fs.readFileSync(appFile, 'utf8');
// Find the end of sec-plan
let searchStrApp = '                        </table>\n                    </div>\n                </section>';
if (appContent.includes(searchStrApp)) {
    appContent = appContent.replace(searchStrApp, '                        </table>\n                    </div>\n' + additionalContentApp + '                </section>');
    fs.writeFileSync(appFile, appContent);
    console.log("App HTML updated");
} else {
    console.log("Could not find the insertion point in app.html");
}

// Director HTML insertion (similar format but the divs might be slightly different in the target file, let's adapt)
const additionalContentDirector = additionalContentApp.replace(/background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba\(0,0,0,0\.05\); padding: 20px;/g, '');
let dirFile = path.join(__dirname, 'director.html');
let dirContent = fs.readFileSync(dirFile, 'utf8');
let searchStrDir = '                        </table>\n                    </div>\n                </div>\n            </div>';
if (dirContent.includes(searchStrDir)) {
    dirContent = dirContent.replace(searchStrDir, '                        </table>\n                    </div>\n' + additionalContentDirector + '                </div>\n            </div>');
    fs.writeFileSync(dirFile, dirContent);
    console.log("Director HTML updated");
} else {
    console.log("Could not find the insertion point in director.html");
    // let's try a fallback pattern
    let searchStrDirFallback = '                        </table>\n                    </div>\n                </div>\n            </div>';
}
