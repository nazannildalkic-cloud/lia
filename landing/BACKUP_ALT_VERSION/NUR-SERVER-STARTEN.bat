@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ========================================
echo   NANIL Pulse – nur Server starten
echo ========================================
echo.
echo Server startet gleich. Wenn unten "Serving" erscheint,
echo im Browser manuell oeffnen:  http://localhost:5000
echo.
echo Dieses Fenster NICHT schliessen!
echo Zum Beenden: Fenster schliessen oder Strg+C
echo.
python -m http.server 5000 2>nul || npx --yes serve . -l 5000
pause
