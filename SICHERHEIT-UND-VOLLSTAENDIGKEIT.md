# Sicherheit & Vollständigkeit – Nannil Web

**Stand: Prüfung durchgeführt**

---

## ✅ Erledigt (durch Prüfung behoben)

### 1. Kaputter Link auf der Konzept-Seite
- **Problem:** Auf `index1.html` (Konzept) verlinkte „Kontakt aufnehmen & Pitch Deck anfordern“ auf `kontakt.html` – diese Datei existiert im Root **nicht** (→ 404).
- **Lösung:** Link geändert auf **`main.html#contact`** (Kontaktbereich der Hauptseite). Der Button funktioniert jetzt.

### 2. API-Key-Sicherheit
- **Problem:** Der Groq-API-Key stand in `nanni-config.js`, und die Datei war **nicht** in `.gitignore` – bei Push auf GitHub wäre der Key öffentlich gewesen.
- **Lösung:**
  - **`nanni-config.js`** ist jetzt in **`.gitignore`** eingetragen (wird nicht mehr ins Repo hochgeladen).
  - Der Key wurde aus der Datei entfernt (leerer String). **Lokal** musst du in `nanni-config.js` wieder deinen Key eintragen (von `nanni-config.example.js` kopieren und Key einfügen).
- **Wichtig:** Falls du den alten Key schon einmal auf GitHub gepusht hast: Bei **console.groq.com** den Key **rotieren** (alten widerrufen, neuen erzeugen und nur lokal in `nanni-config.js` nutzen).

---

## ✅ Bereits in Ordnung

| Bereich | Status |
|--------|--------|
| **Rechtliche Seiten** | `impressum.html`, `datenschutz.html`, `agb.html`, `co-founder.html`, `investoren.html` existieren im Root. |
| **Sprachseiten** | `en.html`, `tr.html` im Root verlinkt und vorhanden. |
| **Kontaktformular** | Nutzt **Formspree** (HTTPS), kein PHP nötig – passt für GitHub Pages. |
| **Spam-Schutz** | Honeypot + Captcha im Kontaktformular vorhanden. |
| **Externe Links** | Wissenschaftslinks etc. mit `target="_blank" rel="noopener"` – sicher. |
| **Vapi** | Nur **Public Key** im Frontend (üblich für Web-SDK). Kein Secret im Code. |
| **Navigation** | Vorseite → Hauptseite → Konzept und zurück konsistent (index.html, main.html, index1.html). |

---

## ⚠️ Deine Aufgaben

### 1. Groq-Key lokal wieder eintragen
- Datei **`nanni-config.js`** im Editor öffnen.
- Zeile: `window.NANNI_GROQ_KEY = '';` → zwischen die Anführungszeichen deinen Groq-Key eintragen (z. B. von `nanni-config.example.js` übernehmen, falls du ihn dort abgelegt hast).
- Datei speichern. Sie wird nicht mehr zu GitHub gepusht (steht in `.gitignore`).

### 2. GitHub / Deployment
- Wenn du **GitHub Pages** nutzt und Nanni (Groq-Funktion) dort brauchst: Nach dem Klonen/Deploy auf dem Rechner oder in der Umgebung, wo die Seite gebaut wird, einmalig `nanni-config.example.js` zu `nanni-config.js` kopieren und den Key eintragen. Oder den Key nur lokal nutzen und auf der Live-Seite ohne Groq-Feature lassen.
- **Vapi (Voice-Nanni)** funktioniert auch ohne Groq-Key (Public Key ist im Code).

### 3. Assets prüfen (Bilder/Medien)
- Im Ordner **`assets/`** werden u. a. benötigt: `logo.jpg`, `ring-patch.jpg.jpeg`, `final-zeichnung.jpg.jpeg`, weitere Bilder und ggf. Videos aus `main.html`/`index.html`.
- Wenn du die Seite lokal oder auf GitHub Pages mit allen Bildern siehst, ist alles da. Fehlen Dateien, erscheinen abgebrochene Bilder – dann die fehlenden Dateien in `assets/` legen.

---

## Kurz-Checkliste vor Go-Live

- [ ] Lokal in `nanni-config.js` den Groq-Key eingetragen (falls du die Groq-Funktion nutzt).
- [ ] Falls der alte Groq-Key jemals auf GitHub war: Key bei Groq rotiert.
- [ ] Alle Bilder in `assets/` vorhanden (Logo, Produktbilder, Zeichnungen).
- [ ] Vapi-Dashboard: Allowed Origins enthält deine Live-URL: `https://nanilpulse.art` (und ggf. `https://www.nanilpulse.art`).
- [ ] Einmal alle wichtigen Links durchklicken (Vorseite, Hauptseite, Konzept, Impressum, Datenschutz, AGB, Kontakt, Co-Founder, Investoren).

Wenn diese Punkte erledigt sind, ist die Seite aus Sicherheits- und Vollständigkeitssicht bereit.
