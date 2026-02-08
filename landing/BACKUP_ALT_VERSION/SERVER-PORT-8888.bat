@echo off
chcp 65001 >nul
cd /d "%~dp0"
title NANIL Pulse – Server (Port 8888)
echo.
echo ========================================
echo   NANIL Pulse – Port 8888 (falls 5000 blockiert)
echo ========================================
echo.
echo *** DIESES FENSTER NICHT SCHLIESSEN! ***
echo.
echo Im Browser oeffnen:  http://localhost:8888
echo.
start "" cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:8888/index.html"
python -m http.server 8888
pause
