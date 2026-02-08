@echo off
chcp 65001 >nul
cd /d "%~dp0"
title NANIL Pulse – Server (Python)
echo.
echo NANIL Pulse – Server (Python). Fenster NICHT schliessen!
echo Falls der Browser nicht aufgeht:  http://localhost:5000  manuell eingeben.
echo.
start "" cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:5000"
python -m http.server 5000
pause
