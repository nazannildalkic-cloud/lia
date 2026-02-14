# NANIL Pulse – GitHub Pages richtig einrichten

## Problem: "Die Seite funktioniert nie auf GitHub"

### 1. Richtige Ordnerstruktur

**GitHub Pages braucht `index.html` im ROOT des Repos** (oder im `/docs` Ordner).

❌ **Falsch:** Repo enthält nur den Ordner `BACKUP_ALT_VERSION` → URL wäre `.../BACKUP_ALT_VERSION/`  
✅ **Richtig:** Inhalt von `BACKUP_ALT_VERSION` direkt ins Repo-Root kopieren

**So geht's:**
1. Öffne dein GitHub-Repo
2. Alle Dateien aus `BACKUP_ALT_VERSION` (index.html, style.css, script.js, assets/, etc.) müssen **im Root** liegen
3. Nicht: `repo/BACKUP_ALT_VERSION/index.html`  
   Sondern: `repo/index.html`

---

### 2. GitHub Pages aktivieren

1. Repo → **Settings** → **Pages**
2. **Source:** "Deploy from a branch"
3. **Branch:** main (oder master)
4. **Folder:** / (root)
5. **Save**

---

### 3. Deine URL / Custom Domain

- **Eigene Domain:** **https://nanilpulse.art** (in Repo-Root liegt die Datei `CNAME` mit dem Inhalt `nanilpulse.art`)
- **GitHub-Standard:** `https://DEIN-USERNAME.github.io/REPO-NAME/` (z. B. `https://nazannildalkic-cloud.github.io/nanni/`)

**Custom Domain einrichten (nanilpulse.art):**
1. Im Repo-Root eine Datei **`CNAME`** anlegen (ohne Endung), Inhalt genau: `nanilpulse.art`
2. GitHub: **Settings** → **Pages** → unter "Custom domain" `nanilpulse.art` eintragen → **Save**
3. Beim Domain-Anbieter: **A-Record** auf `185.199.108.153` (und ggf. die anderen GitHub-Pages-IPs) zeigen lassen, oder **CNAME** auf `DEIN-USERNAME.github.io`

**Wichtig:** Relative Links (assets/) funktionieren mit und ohne Schrägstrich.

---

### 4. nanni-config.js fehlt auf GitHub

Die Datei `nanni-config.js` steht in `.gitignore` (Sicherheit – Keys nicht hochladen).

**Folge:** Auf GitHub Pages gibt es die Datei nicht → 404. **Die Seite lädt trotzdem** – Nanni nutzt dann vordefinierte Antworten (ohne Groq). Das ist OK.

**Wenn du Nanni mit Groq auf der Live-Seite willst:**  
Dann müsstest du einen anderen Host nutzen (z.B. Netlify) mit Environment Variables – das ist ein Extra-Schritt.

---

### 5. Checkliste

- [ ] `index.html` liegt im Repo-Root (nicht in Unterordner)
- [ ] Ordner `assets/` mit allen Bildern ist dabei
- [ ] GitHub Pages ist unter Settings → Pages aktiviert
- [ ] 1–2 Minuten warten nach dem Push
- [ ] URL testen: `https://USERNAME.github.io/REPO-NAME/`

---

### 6. Wenn es immer noch nicht geht

- **404:** Prüfe, ob `index.html` wirklich im Root ist
- **Leere Seite:** Browser-Konsole öffnen (F12) → Fehlermeldungen prüfen
- **Bilder fehlen:** Pfade wie `assets/logo.jpg` müssen relativ stimmen
