# Die Seite öffnet nicht – was tun?

Wenn **LOCALHOST-OEFFNEN.bat** oder **SERVER-PYTHON.bat** nichts anzeigen oder Fehler melden, bitte nacheinander prüfen:

---

## Schritt 1: Diagnose ausführen

1. **DIAGNOSE.bat** per Doppelklick starten.
2. Prüfen, was angezeigt wird:
   - **[OK]** bei Node/npx oder Python → Server sollte starten können.
   - **[FEHLT]** bei Node/npx → Node.js von https://nodejs.org installieren (LTS-Version).
   - **[FEHLT]** bei Python → Python installieren oder nur die Node-Variante nutzen.
3. Fenster mit **Enter** schließen.

---

## Schritt 2: EINFACH-START.bat (Python, Port 8080)

1. **EINFACH-START.bat** per Doppelklick starten – nutzt Python (startet sofort, kein Download).
2. Im Browser **http://localhost:8080** öffnen.
3. Wenn Port 8080 belegt: **SERVER-PORT-8888.bat** nutzen → dann **http://localhost:8888**.

## Schritt 3: Nur Server starten (ohne Browser)

1. **NUR-SERVER-STARTEN.bat** per Doppelklick starten.
2. Im schwarzen Fenster auf die Meldung achten:
   - Erscheint etwas wie **"Accepting connections at http://localhost:3000"** → Server läuft.
   - Erscheint eine **Fehlermeldung** (z. B. "npx nicht gefunden", "EADDRINUSE", "network") → diese Meldung notieren oder Screenshot machen.
3. Wenn der Server läuft: Browser **manuell** öffnen und **http://localhost:3000** eingeben.
4. Wenn die Seite dann lädt → Problem war nur das automatische Öffnen des Browsers.
5. Wenn die Seite nicht lädt → im Browser prüfen, ob eine Fehlerseite (z. B. "Diese Seite ist nicht erreichbar") angezeigt wird.

---

## Schritt 3: Typische Fehler

| Anzeige im schwarzen Fenster | Bedeutung | Lösung |
|------------------------------|-----------|--------|
| `'npx' is not recognized` | Node/npx nicht gefunden | Node.js von nodejs.org installieren, PC neu starten, Batch erneut ausführen |
| `EADDRINUSE` / Port 3000 | Port schon belegt | Anderen Server beenden oder in der Batch einen anderen Port nutzen (z. B. 3001) |
| Zeitüberschreitung / network | npx kann nichts laden | Internetverbindung prüfen, ggf. Firewall/Antivirus prüfen |
| Kein Fenster / sofort zu | Batch startet im falschen Ordner | **DIAGNOSE.bat** aus dem Ordner **BACKUP_ALT_VERSION** starten |

---

## Schritt 5: Direkt aus dem Hauptordner starten

Die Batch-Dateien in **BACKUP_ALT_VERSION** starten den Server im **übergeordneten** Ordner (dort liegt `index.html` und `style.css`). Sie können auch direkt im Hauptprojektordner arbeiten:

1. Im Explorer zu  
   `nanil-pulse\Final\nanil-pulse`  
   wechseln (ein Ordner **über** BACKUP_ALT_VERSION).
2. Dort **LOCALHOST-OEFFNEN.bat** oder **SERVER-PYTHON.bat** starten (falls vorhanden).
3. Oder in diesem Ordner **NUR-SERVER-STARTEN.bat** aus BACKUP_ALT_VERSION kopieren und dort ausführen – dann muss in der Batch **nicht** mehr `cd ..` gemacht werden; ggf. in der kopierten Batch die Zeile `cd /d "%~dp0.."` durch `cd /d "%~dp0"` ersetzen.

---

Wenn Sie die **genaue Fehlermeldung** aus dem schwarzen Fenster (oder einen Screenshot) haben, kann man den Fehler gezielt beheben.
