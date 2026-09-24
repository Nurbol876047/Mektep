// widget.js
document.addEventListener('DOMContentLoaded', () => {
    // Внедряем HTML виджета
    const aiWidgetHTML = `
    <div class="ai-widget-wrapper">
        <div class="ai-chat-window" id="aiChatWindow">
            <div class="ai-chat-header">
                <div class="ai-chat-title">
                    <i data-lucide="bot"></i>
                    <span>МЕКТЕП AI</span>
                </div>
                <button class="ai-chat-close" id="aiChatClose">
                    <i data-lucide="x"></i>
                </button>
            </div>
            <div class="ai-chat-messages" id="aiChatMessages">
                <div class="ai-msg ai-msg-bot">Сәлеметсіз бе! Мен МЕКТЕП AI көмекшісімін. Сізге қандай көмек қажет?</div>
            </div>
            <div class="ai-chat-input-area">
                <form id="aiChatForm" style="display:flex; width:100%; gap:8px;">
                    <input type="text" id="aiChatInput" placeholder="Сұрағыңызды жазыңыз..." autocomplete="off">
                    <button type="button" class="ai-chat-voice" id="aiVoiceBtn" style="border:1px solid var(--primary); background:rgba(37, 99, 235, 0.1); width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--primary); transition:0.3s; box-shadow: 0 4px 10px rgba(37,99,235,0.15);">
                        <i data-lucide="mic" style="width:24px;height:24px;"></i>
                    </button>
                    <button type="submit" class="ai-chat-send">
                        <i data-lucide="send"></i>
                    </button>
                </form>
            </div>
        </div>
        <button class="ai-widget-btn" id="aiWidgetBtn">
            <i data-lucide="message-square"></i>
        </button>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', aiWidgetHTML);
    lucide.createIcons();

    const chatBtn = document.getElementById('aiWidgetBtn');
    const chatWindow = document.getElementById('aiChatWindow');
    const closeBtn = document.getElementById('aiChatClose');
    const chatForm = document.getElementById('aiChatForm');
    const chatInput = document.getElementById('aiChatInput');
    const chatMessages = document.getElementById('aiChatMessages');
    
    let isChatOpen = false;
    const path = window.location.pathname.toLowerCase();
    
    // Определяем контекст по URL
    let systemContext = "Сен МЕКТЕП AI білім беру платформасының жалпы көмекшісісің. Қолданушыларға платформа мүмкіндіктерін түсіндіресің.";
    if (window.location.pathname.includes('teacher') || window.location.pathname.includes('app')) {
        systemContext = "Сен МЕКТЕП AI платформасының мұғалімдерге арналған көмекшісісің. Мұғалімдерге сабақ жоспарын құру, тест дайындау, оқушыларды бағалау сияқты сұрақтар бойынша көмектесесің.";
    } else if (window.location.pathname.includes('director')) {
        systemContext = "Сен МЕКТЕП AI платформасының МИФ бырлестыгы (директорларға) арналған көмекшісісің. Мектеп деректерін талдау, кеңес жоспарларын құру, тапсырмаларды басқару сұрақтары бойынша көмектесесің.";
    }

    if (window.schoolMockData) {
        systemContext += "\n\nМектеп статистикасы (осы деректерге сүйеніп нақты жауап беріңіз):\n" + JSON.stringify(window.schoolMockData);
    }

    chatBtn.addEventListener('click', () => {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            chatWindow.style.display = 'flex';
            gsap.fromTo(chatWindow, 
                { opacity: 0, y: 30, scale: 0.95 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.2)' }
            );
            chatInput.focus();
        } else {
            closeChat();
        }
    });
    
    closeBtn.addEventListener('click', closeChat);
    
    function closeChat() {
        gsap.to(chatWindow, { 
            opacity: 0, y: 20, scale: 0.95, duration: 0.2, 
            onComplete: () => {
                chatWindow.style.display = 'none';
                isChatOpen = false;
            }
        });
    }

    const appendMessage = (text, isUser) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-msg ${isUser ? 'ai-msg-user' : 'ai-msg-bot'}`;
        msgDiv.innerHTML = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return msgDiv;
    };
    
    const appendTyping = () => {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'ai-msg ai-msg-bot';
        msgDiv.innerHTML = '<div style="display:flex;gap:4px;"><span style="width:6px;height:6px;background:var(--primary);border-radius:50%;animation:waveform 1s infinite;"></span><span style="width:6px;height:6px;background:var(--primary);border-radius:50%;animation:waveform 1s infinite 0.2s;"></span><span style="width:6px;height:6px;background:var(--primary);border-radius:50%;animation:waveform 1s infinite 0.4s;"></span></div>';
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return msgDiv;
    };

    // Voice Interaction State
    let isRecording = false;
    let mediaRecorder = null;
    let audioChunks = [];
    let silenceTimer = null;
    let audioContext = null;
    let analyser = null;
    let microphone = null;
    
    const aiVoiceBtn = document.getElementById('aiVoiceBtn');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userText = chatInput.value.trim();
        if (!userText) return;
        
        appendMessage(userText, true);
        chatInput.value = '';
        const typingIndicator = appendTyping();
        
        try {
            const responseText = await fetchChat(userText, 'support');
            typingIndicator.remove();
            appendMessage(responseText, false);
        } catch (error) {
            typingIndicator.remove();
            appendMessage("Кешіріңіз, қате кетті. Байланысты тексеріңіз.", false);
        }
    });

    aiVoiceBtn.addEventListener('click', async () => {
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
            aiVoiceBtn.style.color = '#ef4444'; // Red for recording
            aiVoiceBtn.style.borderColor = '#ef4444';
            aiVoiceBtn.innerHTML = '<i data-lucide="mic" style="width:24px;height:24px;" class="spin"></i>';
            lucide.createIcons();
            chatInput.placeholder = "Тыңдап жатырмын...";
            checkSilence();
        } catch (err) {
            console.error("Mic error:", err);
            if(window.Swal) Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Микрофонға рұқсат беріңіз', showConfirmButton: false, timer: 3000 });
        }
    }

    function stopRecording() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
        isRecording = false;
        aiVoiceBtn.style.color = 'var(--primary)';
        aiVoiceBtn.style.borderColor = 'var(--primary)';
        aiVoiceBtn.innerHTML = '<i data-lucide="mic" style="width:24px;height:24px;"></i>';
        lucide.createIcons();
        chatInput.placeholder = "Сұрағыңызды жазыңыз...";
    }

    async function processVoice(audioBlob) {
        const typingIndicator = appendTyping();
        try {
            // 1. STT (Speech to Text)
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
            
            if(!transcript || transcript.trim() === '') {
                typingIndicator.remove();
                return;
            }
            
            // Show what user said
            typingIndicator.remove();
            appendMessage(transcript, true);
            const thinkingIndicator = appendTyping();
            
            // 2. Chat Response
            const aiResponse = await fetchChat(transcript, 'voice-support');
            thinkingIndicator.remove();
            appendMessage(aiResponse, false);
            
            // 3. TTS (Text to Speech)
            playVoiceResponse(aiResponse);
            
        } catch (err) {
            console.error(err);
            typingIndicator.remove();
            appendMessage("Кешіріңіз, дауысты өңдеуде қате кетті.", false);
        }
    }

    async function playVoiceResponse(text) {
        try {
            const res = await fetch('/api/text-to-speech', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, locale: 'kk' })
            });
            if(!res.ok) throw new Error("TTS Failed");
            const blob = await res.blob();
            const audioUrl = URL.createObjectURL(blob);
            const audio = new Audio(audioUrl);
            audio.play();
        } catch(err) {
            console.error("Playback error:", err);
        }
    }

    async function fetchChat(message, mode = 'support') {
        
        
        
        try {
            // Use the new backend if it's available
            const res = await fetch(`/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: message,
                    locale: 'kk',
                    mode: mode,
                    systemContext: systemContext
                })
            });
            if (res.ok) {
                const data = await res.json();
                return data.message;
            } else {
                throw new Error("Backend API error: " + res.status);
            }
        } catch(e) {
            console.error("Chat Error:", e);
            return "Кешіріңіз, жүйеде қате шықты. Кейінірек қайталап көріңіз.";
        }
    }
});
