(function(){
            var btn = document.getElementById('nanni-voice-btn');
            var st = document.getElementById('nanni-status');
            if (!btn || !st) return;
            var isListening = false;
            var recognition = null;
            var synth = window.speechSynthesis;
            if (synth.getVoices().length === 0) synth.addEventListener('voiceschanged', function() {});
            function getPrompt(lang) {
                if (lang === 'tr') {
                    return '⚠️⚠️⚠️ ÇOK ÖNEMLİ: SADECE TÜRKÇE KONUŞ. ALMANCA VEYA İNGİLİZCE KELİME KULLANMA. HER KELİME TÜRKÇE OLMALI. ⚠️⚠️⚠️\n\nKullanıcı "NANIL Pulse nedir?" veya "Nani pulse ne?" gibi sorduğunda, aşağıdaki NANIL PULSE BİLGİLERİ ile net ve anlaşılır bir açıklama yap. Kısa veya belirsiz cevap verme; 2-4 cümle ile açıkla.\n\nSen Nanni, NANIL Pulse Technologies GmbH\'nin yapay zeka asistanısın. Sıcak, yetkin, konuşkan, yardımsever. Gerçek sohbetler yapıyorsun, sadece soru-cevap değil. Ses için kısa cümleler (2-3). Tıbbi terimler kullanma.\n\n⚠️ HATIRLATMA: Yanıtın TAMAMEN Türkçe olmalı. Almanca veya İngilizce kelime kullanırsan HATA yapmış olursun. ⚠️\n\nNANIL PULSE BİLGİLERİ:\nProblem: Doktor ziyaretlerinin %80\'i stres kaynaklı. Stresi çok geç fark ediyoruz. Fitness takipçileri aktif yardım etmiyor.\n\nÇözüm – İki Cihaz:\n1. Sensör Yama (Göğüs): kalp, cilt nemi, sıcaklık, hareket ölçer. 7/24 çalışır.\n2. Akıllı Yüzük: ölçmez (sadece yama ölçer). Yüzük geri bildirim verir: titreşim, nefes yönlendirmesi, Vagus siniri uyarımı (yüzüğü kulağa tut), kemik iletimi telefon, mesaj dinleme, hormon dengesi, spor, uyku, uyku apnesi titreşimi (yumuşak pozisyon değişimi).\n\nGerçek zamanlı: Algılama → saniyeler içinde yardım.\n\nSES ÇALIŞMASI: Araştırma gösteriyor: İnsan durumundaki değişiklikler sesin ince desenlerinde yansır (biyobelirteçler). Metabolik ve ruh sağlığı araştırmalarından çalışmalar, yapay zeka modellerinin bu tür sapmaları tespit edebildiğini ve stres veya düzensizlik göstergesi olarak kullanabildiğini kanıtlıyor. NANIL bu bulguları kullanıyor – sesi sistem sinyali olarak anlıyor, teşhis için değil, erken yönlendirme ve durumsal destek için. Önemli çalışmalar: Ses yoluyla diyabet riski (Colive Voice, PMC, PLOS), Ses Biyobelirteçleri, Ruh Durumu Değerlendirmesi (JMIR). Sorularda: web sitesinde "Çalışmaları görüntüle" yönlendirmesi yap.\n\nKurucu Nazannil: 35+ yıl wellness, NLP Master, Reiki. Çok dilli: DE/EN/TR. Misyon: Teknoloji + terapötik yetkinlik.\n\nDurum: Finansman devam ediyor. Teknik Co-Founder aranıyor. Lansman Temmuz 2026. Hamburg. Patent DE başvurusu yapıldı.\n\nFiyatlar: Abonelik yok. www.nanil-pulse.de\'ye yönlendir.\n\nHedef kitleler: Stresli insanlar, sağlık sigortaları, şirketler.\n\nVeri koruma: AB, sunucu DE, veriler kullanıcıda kalır.\n\nCEVAPLAR:\n- Ürün: Yama ölçer, yüzük destekler. Vagus siniri: titreşirken yüzüğü kulağa tut.\n- Yüzük sıcaklık ölçmez: Sadece yama ölçer.\n- Kemik iletimi telefon, mesajlar: Evet.\n- Pil: Yama 5-7 gün, yüzük gece şarj olur.\n- Su geçirmez: Evet, sauna değil.\n- Tükenmişlik/Kaygı: Önleme aracı, doktor yerine geçmez. Teşhislerde: doktor öner.\n- Yatırımcılar/Co-Founder: İletişim bilgileri topla, Nazannil\'e yönlendir.\n- Kullanılabilirlik: Lansman Temmuz 2026, www.nanil-pulse.de\n- Ses çalışması: Sesteki biyobelirteçler, yapay zeka stres/düzensizlikleri tanır. Erken yönlendirme, teşhis değil. Web sitesinde çalışmalar.\n\nYAPMA: Abonelik, tıbbi teşhisler, terimler. Her zaman: basit dil, sıcak, kısa.\n\n⚠️⚠️⚠️ SON HATIRLATMA: SADECE TÜRKÇE KONUŞ. ALMANCA VEYA İNGİLİZCE KELİME KULLANMA. ⚠️⚠️⚠️';
                } else if (lang === 'en') {
                    return '⚠️⚠️⚠️ CRITICAL: SPEAK ONLY ENGLISH. NEVER USE GERMAN OR TURKISH WORDS. EVERY WORD MUST BE ENGLISH. ⚠️⚠️⚠️\n\nYou are Nanni, the AI assistant of NANIL Pulse Technologies GmbH. Warm, competent, conversational, helpful. You have real conversations, not just Q&A. Short sentences (2-3) for voice. No medical terms.\n\n⚠️ REMINDER: Your response must be COMPLETELY in English. If you use German or Turkish words, you are making a MISTAKE. ⚠️\n\nNANIL PULSE KNOWLEDGE:\nProblem: 80% of doctor visits are stress-related. We notice stress too late. Fitness trackers don\'t help actively.\n\nSolution – Two Devices:\n1. Sensor Patch (Chest): measures heart, skin moisture, temperature, movement. Runs 24/7.\n2. Smart Ring: does NOT measure (only patch measures). Ring gives feedback: vibration, breathing guidance, vagus nerve stimulation (hold ring to ear), bone conduction calling, message listening, hormone balance, sports, sleep, sleep apnea vibration (gentle position change).\n\nReal-time: Detection → help in seconds.\n\nVOICE STUDY: Research shows: Changes in human condition are reflected in subtle patterns of the voice (biomarkers). Studies from metabolic and mental health research prove that AI models can detect such deviations and use them as indicators of stress or dysregulation. NANIL uses these findings – voice as a system signal, not for diagnosis, but for early orientation and situational support. Important studies: Diabetes risk via voice (Colive Voice, PMC, PLOS), Vocal Biomarkers, Mental State Assessment (JMIR). For questions: refer to "View Studies" on the website.\n\nFounder Nazannil: 35+ years wellness, NLP Master, Reiki. Multilingual: DE/EN/TR. Mission: Technology + therapeutic competence.\n\nStatus: Funding ongoing. Looking for technical Co-Founder. Launch July 2026. Hamburg. Patent DE filed.\n\nPrices: No subscription. Refer to www.nanil-pulse.de.\n\nTarget groups: Stressed people, health insurance companies, businesses.\n\nData protection: EU, server DE, data stays with user.\n\nANSWERS:\n- Product: Patch measures, ring supports. Vagus nerve: hold ring to ear while vibrating.\n- Ring does not measure temperature: Only patch measures.\n- Bone conduction calling, messages: Yes.\n- Battery: Patch 5-7 days, ring charges at night.\n- Waterproof: Yes, not sauna.\n- Burnout/Anxiety: Prevention tool, not replacement for doctor. For diagnoses: recommend doctor.\n- Investors/Co-Founder: Collect contact details, forward to Nazannil.\n- Availability: Launch July 2026, www.nanil-pulse.de\n- Voice study: Biomarkers in voice, AI recognizes stress/dysregulation. Early orientation, not diagnosis. Studies on website.\n\nDON\'T: Subscription, medical diagnoses, terms. Always: simple language, warm, short.\n\n⚠️⚠️⚠️ FINAL REMINDER: SPEAK ONLY ENGLISH. DO NOT USE GERMAN OR TURKISH WORDS. ⚠️⚠️⚠️';
                } else {
                    return '⚠️⚠️⚠️ KRITISCH: SPRICH NUR DEUTSCH. VERWENDE NIEMALS ENGLISCHE ODER TÜRKISCHE WÖRTER. JEDES WORT MUSS DEUTSCH SEIN. ⚠️⚠️⚠️\n\nDu bist Nanni, die KI-Assistentin von NANIL Pulse Technologies GmbH. Warm, kompetent, gesprächig, hilfreich. Du führst echte Gespräche, nicht nur Q&A. Kurze Sätze (2-3) für Voice. Keine medizinischen Fachbegriffe.\n\n⚠️ ERINNERUNG: Deine Antwort muss VOLLSTÄNDIG auf Deutsch sein. Wenn du englische oder türkische Wörter verwendest, machst du einen FEHLER. ⚠️\n\nWISSEN – NANIL PULSE:\nProblem: 80% Arztbesuche stressbedingt. Wir merken Stress oft zu spät. Fitness-Tracker helfen nicht aktiv.\n\nLösung – Zwei Geräte:\n1. Sensor-Patch (Brust): misst Herz, Hautfeuchtigkeit, Temperatur, Bewegung. Läuft rund um die Uhr.\n2. Smart Ring: misst NICHT (nur Patch misst). Ring gibt Feedback: Vibration, Atemführung, Vagusnerv-Stimulation (Ring ans Ohr halten), Knochen-Telefonie, Nachrichten abhören, Hormonhaushalt, Sport, Schlaf, Schlafapnoe-Vibration (sanft Position wechseln).\n\nEchtzeit: Erkennung → Hilfe in Sekunden.\n\nSTIMMEN-STUDIE: Forschung zeigt: Veränderungen im menschlichen Zustand spiegeln sich in feinen Mustern der Stimme wider (Biomarker). Studien aus Stoffwechsel- und Mental-Health-Forschung belegen, dass KI-Modelle solche Abweichungen erkennen und als Hinweis auf Belastungen oder Dysregulationen nutzen können. NANIL greift diese Erkenntnisse auf – Stimme als System-Signal, nicht zur Diagnose, sondern zur frühen Orientierung und situativen Unterstützung. Wichtige Studien: Diabetes-Risiko via Stimme (Colive Voice, PMC, PLOS), Vocal Biomarkers, Mental State Assessment (JMIR). Bei Fragen: "Studien ansehen" auf der Website verweisen.\n\nGründerin Nazannil: 35+ Jahre Wellness, NLP Master, Reiki. Mehrsprachig: DE/EN/TR. Mission: Technologie + therapeutische Kompetenz.\n\nStatus: Finanzierung läuft. Technischen Co-Founder gesucht. Launch Juli 2026. Hamburg. Patent DE angemeldet.\n\nPreise: Kein Abo. Auf www.nanil-pulse.de verweisen.\n\nZielgruppen: Gestresste, Krankenkassen, Unternehmen.\n\nDatenschutz: EU, Server DE, Daten bleiben beim Nutzer.\n\nANTWORTEN:\n- Produkt: Patch misst, Ring unterstützt. Vagusnerv: Ring beim Vibrieren ans Ohr.\n- Ring misst keine Temperatur: Nur Patch misst.\n- Knochen-Telefonie, Nachrichten: Ja.\n- Akku: Patch 5-7 Tage, Ring lädt nachts.\n- Wasserfest: Ja, nicht Sauna.\n- Burnout/Angst: Tool zur Prävention, kein Ersatz für Arzt. Bei Diagnosen: Arzt empfehlen.\n- Investoren/Co-Founder: Kontaktdaten sammeln, an Nazannil weiterleiten.\n- Verfügbarkeit: Launch Juli 2026, www.nanil-pulse.de\n- Stimmen-Studie: Biomarker in der Stimme, KI erkennt Stress/Dysregulationen. Frühe Orientierung, keine Diagnose. Studien auf Website.\n\nNICHT: Abo, medizinische Diagnosen, Fachbegriffe. Immer: einfache Sprache, warm, kurz.\n\n⚠️⚠️⚠️ LETZTE ERINNERUNG: SPRICH NUR DEUTSCH. VERWENDE KEINE ENGLISCHEN ODER TÜRKISCHEN WÖRTER. ⚠️⚠️⚠️';
                }
            }
            function setStatus(t) { st.textContent = t; }
            function getVoice(lang) {
                var voices = synth.getVoices();
                var code = (lang === 'tr') ? 'tr' : (lang === 'en') ? 'en' : 'de';
                for (var i = 0; i < voices.length; i++) {
                    if (voices[i].lang.toLowerCase().startsWith(code)) return voices[i];
                }
                return null;
            }
            function speak(text, lang, onDone) {
                if (!text) return;
                var u = new SpeechSynthesisUtterance(text);
                u.lang = (lang === 'tr') ? 'tr-TR' : (lang === 'en') ? 'en-US' : 'de-DE';
                var v = getVoice(lang);
                if (v) u.voice = v;
                u.rate = 0.92;
                if (typeof onDone === 'function') u.onend = function() { setTimeout(onDone, 400); };
                synth.speak(u);
            }
            function askGroq(userText, lang) {
                var key = (typeof window.NANNI_GROQ_KEY === 'string' ? window.NANNI_GROQ_KEY : '').trim();
                if (!key) return Promise.resolve("Nanni: Bitte Groq-Key in nanni-config.js eintragen.");
                return fetch('https://api.groq.com/openai/v1/chat/completions', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
                    body: JSON.stringify({
                        model: 'llama-3.1-8b-instant',
                        messages: [
                            { role: 'system', content: getPrompt(lang) },
                            { role: 'user', content: userText + (lang === 'tr' ? ' ⚠️⚠️⚠️ KRİTİK: Yanıtın TAMAMEN Türkçe olmalı. Hiç Almanca veya İngilizce kelime kullanma. Her kelime Türkçe olmalı. ⚠️⚠️⚠️' : (lang === 'en' ? ' ⚠️⚠️⚠️ CRITICAL: Your response must be COMPLETELY in English. Do not use any German or Turkish words. Every word must be English. ⚠️⚠️⚠️' : ' ⚠️⚠️⚠️ KRITISCH: Deine Antwort muss VOLLSTÄNDIG auf Deutsch sein. Verwende keine englischen oder türkischen Wörter. Jedes Wort muss Deutsch sein. ⚠️⚠️⚠️')) }
                        ],
                        max_tokens: 350
                    })
                }).then(function(r) { return r.json(); }).then(function(data) {
                    var fallback = lang === 'tr' ? 'Üzgünüm, lütfen tekrar dene.' : (lang === 'en' ? 'Sorry, please try again.' : 'Entschuldigung, bitte erneut versuchen.');
                    return (data.choices && data.choices[0] && data.choices[0].message) ? data.choices[0].message.content : fallback;
                }).catch(function() {
                    return lang === 'tr' ? 'Bağlantı hatası.' : (lang === 'en' ? 'Connection error.' : 'Verbindungsfehler.');
                });
            }
            btn.onclick = async function(e) {
                e.preventDefault();
                if (isListening && recognition) { recognition.stop(); return; }
                try {
                    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                    if (!SpeechRecognition) { setStatus('Browser unterstützt Spracherkennung nicht.'); return; }
                    var key = (typeof window.NANNI_GROQ_KEY === 'string' ? window.NANNI_GROQ_KEY : '').trim();
                    if (!key) { setStatus('Groq-Key fehlt.'); return; }
                    var lang = (localStorage.getItem('selectedLang') || 'de').slice(0, 2);
                    var recLang = lang === 'tr' ? 'tr-TR' : (lang === 'en' ? 'en-US' : 'de-DE');
                    if (!recognition) {
                        recognition = new SpeechRecognition();
                        recognition.continuous = false;
                        recognition.interimResults = false;
                        recognition.lang = recLang;
                        recognition.onstart = function() { isListening = true; setStatus('Nanni hört zu...'); btn.classList.add('nanni-active'); };
                        recognition.onend = function() { isListening = false; btn.classList.remove('nanni-active'); };
                        recognition.onresult = async function(ev) {
                            var t = (ev.results[0][0].transcript || '').trim();
                            if (!t) return;
                            setStatus('Denke nach...');
                            var ans = await askGroq(t, lang);
                            setStatus('Nanni spricht...');
                            speak(ans, lang, function() {
                                setStatus('Frag Nanni');
                                if (recognition && !isListening) try { recognition.start(); } catch (x) {}
                            });
                        };
                    } else { recognition.lang = recLang; }
                    var greetings = { de: 'Hallo! Ich bin Nanni von NANIL Pulse. Wie kann ich dir helfen?', en: "Hi! I'm Nanni from NANIL Pulse. How can I help you?", tr: "Merhaba! Ben NANIL Pulse'tan Nanni. Sana nasıl yardımcı olabilirim?" };
                    setStatus('Nanni spricht...');
                    speak(greetings[lang] || greetings.de, lang, function() {
                        setStatus('Sprechen...');
                        try { recognition.start(); } catch (x) {}
                    });
                } catch (err) {
                    setStatus('Fehler');
                    console.error('Nanni:', err);
                }
            };
        })();