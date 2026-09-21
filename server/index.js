import 'dotenv/config';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';
import multer from 'multer';
import OpenAI, { toFile } from 'openai';
import { EdgeTTS } from 'edge-tts-universal';

const currentDir = dirname(fileURLToPath(import.meta.url));
const distPath = resolve(currentDir, '../dist');
const app = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 18 * 1024 * 1024 } });
const port = Number(process.env.PORT || 8787);
const geminiApiKeyNames = [
  'GEMINI_API_KEY',
  'GOOGLE_API_KEY',
  'GOOGLE_GENERATIVE_AI_API_KEY',
  'GOOGLE_GEMINI_API_KEY',
];
const geminiApiKeyName = geminiApiKeyNames.find((keyName) => Boolean(process.env[keyName]?.trim()));
const geminiApiKey = geminiApiKeyName ? process.env[geminiApiKeyName].trim() : '';
const geminiModel = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';
const geminiThinkingBudget = Number(process.env.GEMINI_THINKING_BUDGET ?? 0);
const geminiApiBaseUrl = (process.env.GEMINI_API_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta').replace(
  /\/$/,
  '',
);
const openaiModel = process.env.OPENAI_MODEL || 'gpt-5-mini';
const transcribeModel = process.env.OPENAI_TRANSCRIBE_MODEL || 'gpt-4o-mini-transcribe';
const ttsModel = process.env.OPENAI_TTS_MODEL || 'gpt-4o-mini-tts';
const ttsVoice = process.env.OPENAI_TTS_VOICE || 'marin';
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
const activeProvider = geminiApiKey ? 'gemini' : openai ? 'openai' : 'mock';
const activeModel = geminiApiKey ? geminiModel : openai ? openaiModel : 'mock';
const hasStaticBuild = existsSync(resolve(distPath, 'index.html'));

app.use(cors({ origin: '*' })); // Allow all origins for local development
app.use(express.json({ limit: '1mb' }));

// Кәсіби (аналитикалық) режимдер: сабақ жоспары, тест, бағалау, кеңес жоспары, есеп аналитикасы.
// Бұл режимдерде мотивациялық фразалар мен әзілдер қосылмайды — жауап таза, JSON бұзылмайды.
function professionalInstructions(locale = 'kk', mode = 'teacher') {
  const isRu = locale === 'ru';
  const roleLine = mode === 'director'
    ? 'Сен — мектеп директорының ЖИ-көмекшісі және бас аналитигісің. Мектеп басқаруы, педагогикалық кеңестер, есептер мен статистика бойынша нақты, кәсіби жауап бересің.'
    : 'Сен — тәжірибелі мектеп мұғалімінің ЖИ-көмекшісісің. Сабақ жоспарлары, тест сұрақтары, оқушы жұмысын бағалау және әдістемелік кеңестер бойынша нақты, кәсіби жауап бересің.';

  const languageRules = isRu
    ? [
        'ТІЛ ЕРЕЖЕСІ: Жауапты тек орыс тілінде жаз. Ағылшын сөздерін қолданба. "AI" орнына "ЖИ" деп жаз.',
      ]
    : [
        'ТІЛ ЕРЕЖЕСІ (МІНДЕТТІ): Жауапты ТЕК қазақ тілінде жаз. Орыс немесе ағылшын сөздерін, транслитерацияны қолданба.',
        'Қазақ әліпбиінің барлық әріптерін дұрыс қолдан: ә, і, ң, ғ, ү, ұ, қ, ө, һ. Мысалы: "мұғалім", "оқушы", "сабақ", "тапсырма".',
        '"AI" орнына "ЖИ" деп жаз. Пән атаулары, терминдер, түсіндірмелер — бәрі қазақша.',
        'JSON ішіндегі барлық мәтіндік мәндер (мақсат, нәтиже, сұрақ, жауап нұсқалары, пікір, тармақ, шешім) да тек қазақ тілінде болуы керек. JSON кілттерін (keys) өзгертпе — олар пайдаланушы сұрағандай қалады.',
      ];

  return [
    roleLine,
    ...languageRules,
    'ФОРМАТ ЕРЕЖЕСІ: Егер пайдаланушы JSON сұраса — ТЕК ҚАНА жарамды JSON қайтар: Markdown (```), кіріспе сөз, түсіндірме, қорытынды фраза, эмодзи қоспа. Пайдаланушы көрсеткен JSON құрылымын (кілттер мен типтер) дәл сақта.',
    'Егер JSON сұралмаса — құрылымды, түсінікті мәтін жаз: қысқа тақырыпшалар, нөмірленген немесе маркерленген тізімдер. Артық су сөз, мотивациялық фразалар мен әзілдер қоспа.',
    'МАЗМҰН ЕРЕЖЕСІ: Қазақстан мектептерінің оқу бағдарламасына (жаңартылған білім мазмұны, сынып деңгейі, оқу мақсаттары) сәйкес жауап бер. Нақты, практикалық, мұғалім бірден қолдана алатындай.',
    'Деректер жеткіліксіз болса — шынайы, логикалық болжам жаса, бірақ бос жауап, нөл немесе "белгісіз" қайтарма.',
    'Медициналық немесе психиатриялық диагноз қойма. Оқушылар туралы кемсітушілік, қорлау сипатындағы мәтін жазба.',
    `Қазіргі режим: ${mode}.`,
  ].join('\n');
}

function systemInstructions(locale = 'kk', mode = 'support', role = 'teacher', customContext = '') {
  if (customContext) {
    return `${customContext}\nЖауапты ${locale === 'ru' ? 'орыс' : 'қазақ'} тілінде қайтар.`;
  }

  if (mode === 'teacher' || mode === 'director') {
    return professionalInstructions(locale, mode);
  }
  
  const language = locale === 'ru' ? 'Russian' : 'Kazakh';

  const noEnglish = locale === 'kk'
    ? 'User-facing replies must be fully in Kazakh. Do not use English or Russian words. Write "ЖИ" instead of "AI".'
    : 'User-facing replies must not contain English words; write "ЖИ" instead of "AI".';

  const modeHint = {
    support: 'General module: listen first, reflect briefly, then suggest one gentle next step.',
    'voice-support': 'Voice module: respond naturally as if speaking aloud. Use 2-4 short sentences, no lists unless asked.',
    'camera-mood': 'Camera mood module: you receive only client-side numeric visual cues, never an image. Treat them as tentative external signals, not proof of emotion or diagnosis.',
    diary: 'Diary module: help the user name the feeling, normalize it, and turn it into a short reflection.',
    stress: 'Anti-stress module: guide grounding, breathing, and body relaxation with clear micro-steps.',
  }[mode] ?? 'General support module.';

  if (role === 'student') {
    return [
      `You are Оқушыға көмек ЖИ, a warm, friendly, calm, and highly supportive AI companion for school students. Reply in ${language}.`,
      noEnglish,
      'Your core mission is to answer usefully, friendly, and clearly. ALWAYS add warm emotional support and motivation at the end of every response.',
      'Style guidelines:',
      '- Tone: Kind, supportive, friendly, simple (like a caring older sibling or friend). No toxicity, no overly dramatic or official/robotic tones.',
      '- Emojis: Use maximum 1-2 positive emojis.',
      '- NEVER diagnose medical or psychiatric conditions.',
      'At the end of your main useful response, you MUST append a separate block with a short motivating phrase related to student life.',
      'You MUST integrate these Kazakh/Russian phrases naturally at the end of your responses:',
      '- "Сен жалғыз емессің, бәрі жақсы болады 🙂"',
      '- "Баға сенің кім екеніңді көрсетпейді."',
      '- "Сенің қолыңнан келеді!"',
      '- "Өзіңе сен, сен мықтысың."',
      '- "Демалып ал, бәрі өз орнына келеді."',
      '- "Все решаемо, не переживай 🙂"',
      '- "Ты молодец, даже если сегодня было трудно."',
      '- "Оценки - это не главное, главное - твои знания."',
      modeHint,
      `Current product mode: ${mode}.`,
    ].join('\n');
  }

  return [
    `You are Ұстазға көмек ЖИ, a warm, friendly, calm, and highly supportive AI companion for school teachers. Reply in ${language}.`,
    noEnglish,
    'Your core mission is to answer usefully, professionally, and clearly, but ALWAYS add warm emotional support, motivation, and positive light phrases at the end of every response.',
    'Style guidelines:',
    '- Tone: Kind, supportive, respectful, and calm (like a caring colleague or trusted friend). No toxicity, no overly dramatic or official/robotic tones.',
    '- Emojis: Use maximum 1-2 positive emojis in your support/jokes section.',
    '- NEVER diagnose medical or psychiatric conditions, and do not claim that camera/facial expression proves a real inner emotion.',
    'At the end of your main useful response, you MUST append a separate block with 1-3 short motivating phrases related to teacher life (e.g. salary, students, tiredness, coffee, workloads) and sometimes a warm mini-joke.',
    'You MUST integrate these Kazakh/Russian phrases naturally at the end of your responses:',
    '- "Айлык туседы скоро, сал шыданыз 🙂"',
    '- "Балалар сызды жаксы кореды."',
    '- "Оқушы шабыт алады сенен."',
    '- "Сиздин сабагыныз биреуге мотивация болуы мумкин."',
    '- "Шаршап кетсениз де, жасап жаткан еңбегіңіз маңызды."',
    '- "Устаз болу — оңай емес, бірақ әсері үлкен."',
    '- "Балалар сізді күтіп отырады 🙂"',
    '- "Бүгін де жақсы жұмыс жасап жатырсыз."',
    '- "Сизден көп адам энергия алады."',
    '- "Кофе + шыдам = мұғалімнің суперсиласы 😄"',
    '- "Сабақтан кейін міндетті түрде демалыңыз."',
    '- "Ертенги кун де жаксы отеди иншаллах."',
    '- "Окушылар барин байкайды, сиз ойлаганнан коп."',
    'You may also use these mini-jokes for teachers:',
    '- "Мұғалім режимі: 2% энергия, 100% ответственность 😄"',
    '- "Кунделик толтыру — отдельный boss fight 😅"',
    '- "Чай ішіп алыңыз, system reboot керек 😄"',
    modeHint,
    `Current product mode: ${mode}.`,
  ].join('\n');
}

function formatHistory(history = []) {
  return history
    .slice(-8)
    .map((item) => {
      const speaker = item.role === 'ai' || item.role === 'assistant' ? 'AI' : 'Teacher';
      return `${speaker}: ${item.content}`;
    })
    .join('\n');
}

function formatGeminiHistory(history = []) {
  return history.slice(-8).reduce((items, item) => {
    const text = String(item.content ?? '').trim();
    if (!text || item.source === 'error' || text.includes('AI backend')) return items;

    const role = item.role === 'ai' || item.role === 'assistant' || item.role === 'model' ? 'model' : 'user';
    if (items.length === 0 && role === 'model') return items;

    const previous = items.at(-1);
    if (previous?.role === role) {
      previous.parts[0].text = `${previous.parts[0].text}\n${text}`;
      return items;
    }

    items.push({ role, parts: [{ text }] });
    return items;
  }, []);
}

function appendGeminiUserMessage(contents, message) {
  const previous = contents.at(-1);
  if (previous?.role === 'user') {
    previous.parts[0].text = `${previous.parts[0].text}\n${message}`;
    return contents;
  }

  return [...contents, { role: 'user', parts: [{ text: message }] }];
}

function geminiEndpoint(modelName = geminiModel) {
  const modelPath = modelName.startsWith('models/') ? modelName : `models/${modelName}`;
  return `${geminiApiBaseUrl}/${modelPath}:generateContent`;
}

function extractGeminiText(data) {
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  return parts
    .map((part) => part.text ?? '')
    .join('')
    .trim();
}

async function generateGeminiText({ contents, instructions, maxOutputTokens = 320, temperature = 0.65 }) {
  if (!geminiApiKey) {
    throw new Error(`${geminiApiKeyNames.join(' or ')} is not configured`);
  }

  const payload = {
    contents,
    generationConfig: {
      temperature,
      maxOutputTokens: maxOutputTokens || 8192,
    },
  };

  if (Number.isFinite(geminiThinkingBudget) && geminiThinkingBudget > 0) {
    payload.generationConfig.thinkingConfig = { thinkingBudget: geminiThinkingBudget };
  }

  if (instructions) {
    payload.systemInstruction = { parts: [{ text: instructions }] };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 55000);
  
  const geminiResponse = await fetch(geminiEndpoint(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': geminiApiKey,
    },
    body: JSON.stringify(payload),
    signal: controller.signal
  });
  
  clearTimeout(timeoutId);
  const data = await geminiResponse.json().catch(() => ({}));

  if (!geminiResponse.ok) {
    throw new Error(data?.error?.message || `Gemini returned ${geminiResponse.status}`);
  }

  const text = extractGeminiText(data);
  if (!text) {
    const finishReason = data?.candidates?.[0]?.finishReason;
    throw new Error(finishReason ? `Gemini returned empty response (${finishReason})` : 'Gemini returned empty response');
  }

  return {
    text,
    requestId: geminiResponse.headers.get('x-request-id'),
  };
}

function localFallbackReply(locale = 'kk', message = '') {
  const cleanMsg = String(message).toLowerCase();
  
  const kkReplies = [
    "Мен сізді өте жақсы түсінемін. Шаршап кетсеңіз де, жасап жатқан еңбегіңіз маңызды.\n\nБалалар сізді күтіп отырады 🙂\nКофе + шыдам = мұғалімнің суперсиласы 😄",
    "Сабақ беру оңай емес, бірақ сіз бәрін керемет жасап жатырсыз! Бүгін де жақсы жұмыс жасап жатырсыз.\n\nОқушы шабыт алады сенен.\nМұғалім режимі: 2% энергия, 100% ответственность 😄",
    "Шыдамдылық тілеймін! Сабақтан кейін міндетті түрде демалыңыз, сізге күш керек.\n\nАйлык туседы скоро, сал шыданыз 🙂\nЧай ішіп алыңыз, system reboot керек 😄",
    "Керемет жұмыс! Сиздин сабагыныз биреуге мотивация болуы мумкин. Балалар сізді өте жақсы көреді.\n\nБалалар сызды жаксы кореды.\nЕртенги кун де жаксы отеди иншаллах.",
    "Әрбір күн оңай емес, әсіресе журналдар мен есептер толтыру кезінде.\n\nКунделик толтыру — отдельный boss fight 😅\nСизден көп адам энергия алады."
  ];

  const ruReplies = [
    "Я вас очень хорошо понимаю. Работа учителя требует огромных сил, но ваш труд действительно меняет жизни.\n\nБалалар сызды жаксы кореды.\nКофе + шыдам = мұғалімнің суперсиласы 😄",
    "Провести уроки и сохранить спокойствие — это настоящий подвиг. Вы отлично справляетесь!\n\nСиздин сабагыныз биреуге мотивация болуы мумкин.\nМұғалім режимі: 2% энергия, 100% ответственность 😄",
    "Постарайтесь после уроков обязательно отдохнуть и уделить время себе. Вы заслужили полноценный отдых.\n\nАйлык туседы скоро, сал шыданыз 🙂\nЧай ішіп алыңыз, system reboot керек 😄",
    "Помните, что ваши ученики видят вашу заботу и ценят её, даже если не говорят об этом каждый день.\n\nОкушылар барин байкайды, сиз ойлаганнан коп.\nЕртенги кун де жаксы отеди иншаллах."
  ];

  const list = locale === 'ru' ? ruReplies : kkReplies;
  let hash = 0;
  for (let i = 0; i < cleanMsg.length; i++) {
    hash = (hash << 5) - hash + cleanMsg.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % list.length;
  return list[index];
}

function mockReply(locale = 'kk', role = 'teacher') {
  if (role === 'student') {
    return locale === 'ru' 
      ? 'Я рядом и готов тебя выслушать. Не переживай, всё решаемо 🙂\n\nТы молодец, даже если сегодня было трудно.'
      : 'Мен сені тыңдауға дайынмын. Уайымдама, бәрі жақсы болады 🙂\n\nСенің қолыңнан келеді!';
  }

  if (locale === 'ru') {
    return 'Я рядом и готов поддержать вас. Вы делаете невероятно важную работу!\n\nБүгін де жақсы жұмыс жасап жатырсыз.\nКофе + шыдам = мұғалімнің суперсиласы 😄';
  }

  return 'Мен сізді тыңдап, қолдауға дайынмын. Сіздің әрбір сабағыңыз — үлкен еңбек!\n\nБүгін де жақсы жұмыс жасап жатырсыз.\nКофе + шыдам = мұғалімнің суперсиласы 😄';
}

function missingProviderMessage(locale = 'kk') {
  if (locale === 'ru') {
    return 'ЖИ қызметі қосылмаған: серверге құпия кілт енгізіп, қызметті қайта іске қосыңыз.';
  }

  return 'ЖИ қызметі қосылмаған: серверге құпия кілт енгізіп, қызметті қайта іске қосыңыз.';
}

function cleanTextForSpeech(text = '') {
  return String(text).replace(/\s+/g, ' ').trim().slice(0, 2600);
}

function speechInstructions(locale = 'kk') {
  if (locale === 'ru') {
    return [
      'Read the text naturally and calmly as an AI support assistant for a school teacher.',
      'Use warm Central Asian Kazakh intonation, clear diction, and a soft supportive pace.',
      'Do not sound theatrical, robotic, or rushed.',
    ].join(' ');
  }

  return [
    'Read the Kazakh text as a native Kazakh speaker from Kazakhstan.',
    'Use natural Kazakh pronunciation, rhythm, and intonation with no Russian accent.',
    'Keep a warm, calm psychologist-assistant tone for a tired school teacher.',
    'Speak clearly and gently, as if the written answer was meant to be heard aloud.',
  ].join(' ');
}

function mockCameraAdvice(locale = 'kk', state = 'calm') {
  const kk = {
    calm:
      'Сыртқы белгілеріңіз бірқалыпты көрінеді. Осы тыныш ырғақты сақтау үшін 30 секунд баяу дем алып, бүгінгі ең жеңіл бір істі таңдаңыз.',
    tired:
      'Камерада шаршауға ұқсас белгі байқалды. Бұл диагноз емес: су ішіп, көзіңізді 20 секунд демалдырып, бір міндетті кейінге қалдырыңыз.',
    tense:
      'Кернеуге ұқсас белгі бар. Жақты босатып, иықты түсіріңіз, содан кейін ойыңызды “қазір бір ғана не істей аламын?” деген сұраққа бұрыңыз.',
    positive:
      'Жылы энергия байқалады. Осы ресурсты жоғалтпай, күнделікке бір жақсы сәтті жазып қойыңыз.',
  };
  const ru = {
    calm:
      'Внешние признаки выглядят ровно. Чтобы сохранить спокойный ритм, подышите медленно 30 секунд и выберите одно самое лёгкое действие.',
    tired:
      'Камера видит признаки, похожие на усталость. Это не диагноз: выпейте воды, дайте глазам 20 секунд отдыха и отложите одну задачу.',
    tense:
      'Есть признаки, похожие на напряжение. Расслабьте челюсть, опустите плечи и спросите себя: “какой один шаг я могу сделать сейчас?”',
    positive:
      'Видна более тёплая энергия. Пока ресурс рядом, запишите один хороший момент в дневник.',
  };

  return (locale === 'ru' ? ru : kk)[state] ?? (locale === 'ru' ? ru.calm : kk.calm);
}

app.get('/api/health', (_request, response) => {
  response.json({
    ok: true,
    provider: activeProvider,
    gemini: Boolean(geminiApiKey),
    geminiKeyEnv: geminiApiKeyName ?? null,
    acceptedGeminiKeyEnv: geminiApiKeyNames,
    openai: Boolean(openai),
    model: activeModel,
    tts: true,
    ttsModel: 'microsoft-edge-neural-tts',
    ttsVoice: 'kk-KZ-AigulNeural',
    staticBuild: hasStaticBuild,
  });
});

app.post('/api/chat', async (request, response) => {
  const { message = '', history = [], locale = 'kk', mode = 'support', role = 'teacher', systemContext = '' } = request.body ?? {};
  const cleanMessage = String(message).trim();

  if (!cleanMessage) {
    return response.status(400).json({ error: 'message is required' });
  }

  try {
    if (geminiApiKey) {
      const contents = appendGeminiUserMessage(formatGeminiHistory(history), cleanMessage);
      const result = await generateGeminiText({
        instructions: systemInstructions(locale, mode, role, systemContext),
        contents,
        maxOutputTokens: mode === 'voice-support' ? 512 : 8192,
      });

      return response.json({
        message: result.text || mockReply(locale, role),
        source: 'gemini',
        requestId: result.requestId,
      });
    }

    if (!openai) {
      return response.status(503).json({
        error: 'ai_provider_missing',
        message: missingProviderMessage(locale),
        source: 'error',
      });
    }

    const historyText = formatHistory(history);
    const result = await openai.responses.create({
      model: openaiModel,
      instructions: systemInstructions(locale, mode, role),
      input: `${historyText ? `Conversation so far:\n${historyText}\n\n` : ''}User: ${cleanMessage}`,
      max_output_tokens: mode === 'voice-support' ? 220 : 360,
    });

    return response.json({
      message: result.output_text || mockReply(locale, role),
      source: 'openai',
      requestId: result._request_id,
    });
  } catch (error) {
    console.error(`${activeProvider} chat error:`, error);
    const fallbackText = localFallbackReply(locale, cleanMessage) || mockReply(locale, role);
    return response.status(500).json({
      message: fallbackText,
      source: 'fallback',
      degraded: true,
      error: error.message
    });
  }
});

app.post('/api/text-to-speech', async (request, response) => {
  const locale = request.body?.locale === 'ru' ? 'ru' : 'kk';
  const input = cleanTextForSpeech(request.body?.text);

  if (!input) {
    return response.status(400).json({ error: 'text is required' });
  }

  try {
    // Select Microsoft Edge's stunning native neural voice for Kazakh or Russian
    const voice = locale === 'kk' ? 'kk-KZ-AigulNeural' : 'ru-RU-SvetlanaNeural';
    
    // Synthesize using EdgeTTS
    const tts = new EdgeTTS(input, voice);
    const result = await tts.synthesize();
    const audioBuffer = Buffer.from(await result.audio.arrayBuffer());

    response.setHeader('Content-Type', 'audio/mpeg');
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-TTS-Model', 'microsoft-edge-neural-tts');
    response.setHeader('X-TTS-Voice', voice);
    return response.send(audioBuffer);
  } catch (error) {
    console.error('Edge TTS error, trying OpenAI fallback if configured:', error);
    
    if (openai) {
      try {
        const audio = await openai.audio.speech.create({
          model: ttsModel,
          voice: ttsVoice,
          input,
          instructions: speechInstructions(locale),
          response_format: 'mp3',
        });
        const audioBuffer = Buffer.from(await audio.arrayBuffer());

        response.setHeader('Content-Type', 'audio/mpeg');
        response.setHeader('Cache-Control', 'no-store');
        response.setHeader('X-TTS-Model', ttsModel);
        response.setHeader('X-TTS-Voice', ttsVoice);
        return response.send(audioBuffer);
      } catch (openAiError) {
        console.error('openai tts error:', openAiError);
        return response.status(500).json({ error: 'openai_tts_failed' });
      }
    }

    return response.status(500).json({ error: 'tts_failed', message: error.message });
  }
});

app.post('/api/camera-advice', async (request, response) => {
  const { signals = {}, locale = 'kk', context = '' } = request.body ?? {};
  const face = signals.face ?? {};
  const hand = signals.hand ?? {};
  const faceState = String(face.state || 'calm');
  const cleanLocale = locale === 'ru' ? 'ru' : 'kk';

  try {
    if (geminiApiKey) {
      const result = await generateGeminiText({
        instructions: systemInstructions(cleanLocale, 'camera-mood'),
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: [
                  'Give one concise wellbeing recommendation for a teacher.',
                  'Do not diagnose. Do not overstate camera accuracy. Mention that these are only external cues if useful.',
                  `Context: ${String(context).slice(0, 500) || 'mood camera scan'}`,
                  `Face signals: detected=${Boolean(face.detected)}, state=${faceState}, moodKey=${face.moodKey}, balance=${face.balance}, smile=${face.smile}, tension=${face.tension}, fatigue=${face.fatigue}`,
                  `Hand signals: detected=${Boolean(hand.detected)}, gesture=${hand.gesture}, squeeze=${hand.squeeze}`,
                ].join('\n'),
              },
            ],
          },
        ],
        maxOutputTokens: 220,
        temperature: 0.55,
      });

      return response.json({
        message: result.text || mockCameraAdvice(cleanLocale, faceState),
        source: 'gemini',
        requestId: result.requestId,
      });
    }

    if (!openai) {
      return response.json({
        message: mockCameraAdvice(cleanLocale, faceState),
        source: 'mock-backend',
      });
    }

    const result = await openai.responses.create({
      model: openaiModel,
      instructions: systemInstructions(cleanLocale, 'camera-mood'),
      input: [
        'Give one concise wellbeing recommendation for a teacher.',
        'Do not diagnose. Do not overstate camera accuracy. Mention that these are only external cues if useful.',
        `Context: ${String(context).slice(0, 500) || 'mood camera scan'}`,
        `Face signals: detected=${Boolean(face.detected)}, state=${faceState}, moodKey=${face.moodKey}, balance=${face.balance}, smile=${face.smile}, tension=${face.tension}, fatigue=${face.fatigue}`,
        `Hand signals: detected=${Boolean(hand.detected)}, gesture=${hand.gesture}, squeeze=${hand.squeeze}`,
      ].join('\n'),
      max_output_tokens: 220,
    });

    return response.json({
      message: result.output_text || mockCameraAdvice(cleanLocale, faceState),
      source: 'openai',
      requestId: result._request_id,
    });
  } catch (error) {
    console.error(`${activeProvider} camera advice error:`, error);
    return response.status(500).json({
      error: `${activeProvider}_camera_advice_failed`,
      message: mockCameraAdvice(cleanLocale, faceState),
    });
  }
});

app.post('/api/speech-to-text', upload.single('audio'), async (request, response) => {
  const locale = request.body?.locale === 'ru' ? 'ru' : 'kk';

  if (!request.file) {
    return response.status(400).json({ error: 'audio file is required' });
  }

  try {
    if (geminiApiKey) {
      const languageName = locale === 'ru' ? 'Russian' : 'Kazakh';
      const result = await generateGeminiText({
        instructions: [
          `Transcribe short teacher voice notes into ${languageName}.`,
          'Return only the spoken text. Do not add commentary, labels, or translation unless the audio itself asks for it.',
        ].join('\n'),
        contents: [
          {
            role: 'user',
            parts: [
              { text: `Transcribe this ${languageName} audio clip.` },
              {
                inlineData: {
                  mimeType: request.file.mimetype || 'audio/webm',
                  data: request.file.buffer.toString('base64'),
                },
              },
            ],
          },
        ],
        maxOutputTokens: 260,
        temperature: 0.1,
      });

      return response.json({ text: result.text ?? '', source: 'gemini' });
    }

    if (!openai) {
      return response.json({ text: '', source: 'mock-backend' });
    }

    const file = await toFile(request.file.buffer, request.file.originalname || 'audio.webm', {
      type: request.file.mimetype || 'audio/webm',
    });
    const result = await openai.audio.transcriptions.create({
      file,
      model: transcribeModel,
      language: locale,
    });

    return response.json({ text: result.text ?? '', source: 'openai' });
  } catch (error) {
    console.error(`${activeProvider} transcription error:`, error);
    return response.status(500).json({ error: `${activeProvider}_transcription_failed` });
  }
});

if (hasStaticBuild) {
  app.use(express.static(distPath));
  app.get(/^(?!\/api).*/, (_request, response) => {
    response.sendFile(resolve(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Teacher Support AI backend listening on http://localhost:${port}`);
  console.log(`${activeProvider} provider enabled with model ${activeModel}`);
  console.log(
    geminiApiKey
      ? `Gemini key loaded from ${geminiApiKeyName}`
      : `Gemini key missing. Set one of: ${geminiApiKeyNames.join(', ')}`,
  );
  console.log(hasStaticBuild ? `Serving frontend from ${distPath}` : 'Static frontend build not found; API-only mode');
});
