@echo off
chcp 65001 >nul
cd /d "%~dp0"
title NANIL Pulse – Server
echo.
echo ========================================
echo   NANIL Pulse – Einfach Start (Python)
echo ========================================
echo.

where python >nul 2>&1
if %errorlevel% neq 0 (
    echo *** Python nicht gefunden! ***
    echo.
    echo Bitte Python installieren: https://www.python.org/downloads/
    echo Bei der Installation: "Add Python to PATH" ankreuzen!
    echo.
    pause
    exit /b 1
)

echo Server startet auf Port 5000...
echo.
echo *** DIESES FENSTER NICHT SCHLIESSEN! ***
echo.
echo Browser oeffnet sich in 5 Sekunden.
echo Falls nicht: manuell oeffnen:  http://localhost:5000
echo.

start "" cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:5000"

python -m http.server 5000

echo.
echo Server beendet.
pause
