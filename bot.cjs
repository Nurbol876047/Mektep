const cron = require('node-cron');
const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');

const token = process.env.TELEGRAM_BOT_TOKEN || '8608019899:AAEpL9P9usVsIC4V_rZRz8dtDphTM9YhT2c';
const apiUrl = `https://api.telegram.org/bot${token}`;
const CHATS_FILE = path.join(process.cwd(), 'chat_ids.json');

function getChatIds() {
    if (!fs.existsSync(CHATS_FILE)) return [];
    try {
        return JSON.parse(fs.readFileSync(CHATS_FILE));
    } catch (e) {
        return [];
    }
}

function saveChatId(id) {
    const ids = getChatIds();
    if (!ids.includes(id)) {
        ids.push(id);
        fs.writeFileSync(CHATS_FILE, JSON.stringify(ids));
        console.log(`Saved new chat ID: ${id}`);
    }
}

async function sendMessage(chatId, text) {
    try {
        await fetch(`${apiUrl}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' })
        });
    } catch (e) {
        console.error(`Failed to send message to ${chatId}:`, e);
    }
}

let offset = 0;
async function poll() {
    try {
        const res = await fetch(`${apiUrl}/getUpdates?offset=${offset}&timeout=10`);
        const data = await res.json();
        if (data.ok && data.result.length > 0) {
            for (const update of data.result) {
                offset = update.update_id + 1;
                if (update.message) {
                    const chatId = update.message.chat.id;
                    saveChatId(chatId);
                    if (update.message.text === '/start') {
                        await sendMessage(chatId, 'Сәлеметсіз бе! Мен сабақ кестесінің ботымын. Сабақ басталуына 5 минут қалғанда ескерту жіберіп отырамын.');
                    }
                }
            }
        }
    } catch (e) {
        console.error("Polling error:", e.message);
    }
    setTimeout(poll, 1000);
}

poll();

const schedule = [
    // Дүйсенбі (Monday)
    { day: 1, time: "08:00", class: "10A" },
    { day: 1, time: "11:25", class: "11A" },
    { day: 1, time: "12:15", class: "10A" },
  
    // Сейсенбі (Tuesday)
    { day: 2, time: "08:00", class: "11A" },
    { day: 2, time: "09:45", class: "9В" },
    { day: 2, time: "13:05", class: "8Б (қосымша)" },
    { day: 2, time: "16:35", class: "7В" },
  
    // Сәрсенбі (Wednesday)
    { day: 3, time: "12:15", class: "10" },
    { day: 3, time: "13:05", class: "9А (қосымша)" },
  
    // Бейсенбі (Thursday)
    { day: 4, time: "08:50", class: "10Б" },
    { day: 4, time: "11:25", class: "11Ә" },
    { day: 4, time: "12:15", class: "10Ә" },
  
    // Жұма (Friday)
    { day: 5, time: "08:00", class: "8A" },
    { day: 5, time: "11:25", class: "8В" },
    { day: 5, time: "12:15", class: "10Ә" },
    { day: 5, time: "14:00", class: "7А" },
    { day: 5, time: "15:45", class: "7Б" },
    { day: 5, time: "16:35", class: "6А" }
];

cron.schedule('* * * * *', () => {
    const now = moment().tz('Asia/Almaty');
    const targetTime = now.clone().add(5, 'minutes');
    const targetDay = targetTime.isoWeekday(); // 1 = Monday, 7 = Sunday
    const targetTimeStr = targetTime.format('HH:mm');

    const lessons = schedule.filter(l => l.day === targetDay && l.time === targetTimeStr);

    if (lessons.length > 0) {
        const chatIds = getChatIds();
        lessons.forEach(lesson => {
            const message = `🔔 *Ескерту!*\n\n*${lesson.class}* сыныбына арналған сабақ 5 минуттан кейін басталады! (${lesson.time})`;
            chatIds.forEach(chatId => {
                sendMessage(chatId, message);
            });
        });
    }
});

console.log('Bot is running and polling for messages...');
