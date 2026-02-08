# NANNI Voice Agent – FAQ & Gesprächsfluss (Referenz)

**Dreisprachig:** DE · EN · TR

Diese Datei ist die Kurzreferenz für den Nanni-Voice-Agent in `index.html`. Der vollständige FAQ- und Gesprächsfluss ist im separaten Dokument (z. B. von dir bereitgestellt) beschrieben.

---

## System-Regeln (im Prompt)

- **Antwortlänge:** Max. 2–3 Sätze, natürlicher Übergang (z. B. „Was möchten Sie wissen?“).
- **Gesundheit/Medizin:** Immer hinzufügen: „Das ist ein Wellness-Tool, kein medizinisches Produkt.“ (DE) / „This is a wellness tool, not a medical product.“ (EN) / „Bu bir wellness aracı, tıbbi bir ürün değil.“ (TR).
- **Weiterleitung an Nazannil:** Preis, Kauf, Garantie, Rückgabe, Ausland, Abo, Firmendetails → „Das beantworten wir Ihnen persönlich – auf der Website finden Sie das Kontaktformular, Nazannil meldet sich bei Ihnen.“
- **Krise:** Sofort Telefonseelsorge 0800 111 0 111 oder 0800 111 0 222 (DE, 24/7).

---

## Gesprächsfluss (fest verdrahtet in `index.html`)

| Nutzer sagt | Nanni antwortet (Beispiel DE) |
|-------------|-------------------------------|
| Danke / Thanks / Teşekkürler | „Bitte sehr! Gibt es noch etwas, das ich Ihnen helfen kann?“ |
| Stopp / Stop / Dur | „Klar – was möchten Sie wissen?“ (Gespräch läuft weiter) |
| Hallo / Hello / Merhaba | „Hallo! Willkommen bei NANIL Pulse – ich bin hier, um Ihnen zu helfen. Was möchten Sie wissen?“ |
| Wer bist du? / Who are you? / Sen kimsin? | „Ich bin der NANIL Pulse Wellness-Berater …“ |
| Auf Wiedersehen / Goodbye | „Auf Wiedersehen! Bei Fragen einfach nochmal vorbeischauen – wir sind hier.“ |
| Tschüss / Bye | „Tschüss! Bei Fragen einfach nochmal hier lang.“ |
| Off-Topic / Unklar | „Das kann ich leider nicht beantworten – ich bin speziell für NANIL Pulse hier. Was möchten Sie wissen?“ |

**Wichtig:** „Stopp“ beendet das Gespräch nicht – nur echte Verabschiedung (Tschüss, Bye, Auf Wiedersehen, „Das war alles“, „I’m done“) beendet Nanni.

---

## FAQ fest verdrahtet (Keywords → Antwort)

- **Was ist NANIL Pulse?** → F1 (Wellness-Begleiter, Patch + Ring, automatisch, Wellness-Tool, kein Medizinprodukt).
- **Wie funktioniert es?** → F2 (Patch erfasst in Echtzeit, KI analysiert, Ring reagiert mit Vibration/Atmung, alles automatisch).
- **Medizinisches Produkt?** → F7 (Nein – Wellness-Tool, ersetzt keine ärztliche Behandlung, bei Beschwerden Arzt empfehlen).
- **Preis / Abo** → Fest: www.nanil-pulse.de, kein Abo, einmalig kaufen.
- **Kontakt / Investoren / Presse / Co-Founder** → Weiterleitung an Nazannil (Kontaktformular).

---

## Groq (optional)

Wenn `nanni-config.js` einen gültigen `NANNI_GROQ_KEY` setzt, antwortet Nanni auf freie Fragen zusätzlich per KI – aber immer innerhalb der System-Regeln und Fakten aus dem Prompt. Ohne Key werden nur die festen Antworten (oben) genutzt.

**Einrichtung:** `nanni-config.example.js` als `nanni-config.js` kopieren und deinen Groq-API-Key eintragen (z. B. von console.groq.com). `nanni-config.js` wird nicht ins Git hochgeladen.

---

## Start

1. **Lokal testen:** `index.html` per HTTPS oder localhost öffnen (z. B. `LAUFEN.bat` oder `http://localhost:5000`).
2. **Mikrofon:** Im Browser erlauben (Schloss-Symbol in der Adresszeile).
3. **Sprache:** DE/EN/TR über den Sprachumschalter in der Navigation wählen – Nanni antwortet in derselben Sprache.

Viel Erfolg beim Loslegen.
