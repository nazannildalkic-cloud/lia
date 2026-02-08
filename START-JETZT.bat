@echo off
cd /d "%~dp0"
title NANIL Pulse
echo.
echo NANIL Pulse startet...
echo Fenster NICHT schliessen!
echo.
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:5000"
python -m http.server 5000 2>nul || npx --yes serve . -l 5000
pause
