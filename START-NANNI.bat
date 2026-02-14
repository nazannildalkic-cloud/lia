@echo off
title NANIL Pulse - Nanni starten
cd /d "%~dp0"

echo.
echo  NANIL Pulse - Server wird gestartet...
echo  Gleich oeffnet sich der Browser unter http://localhost:8000
echo  Nanni (schwebender Button unten rechts) funktioniert dann sofort.
echo.
echo  Server beenden: Dieses Fenster schliessen oder Strg+C
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:8000"
python -m http.server 8000

pause
