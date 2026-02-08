@echo off
chcp 65001 >nul
cd /d "%~dp0"
title NANIL Pulse
echo.
echo ========================================
echo   NANIL Pulse – Start
echo ========================================
echo.
echo 1. Server startet...
echo 2. Browser oeffnet in 4 Sekunden: http://localhost:5000
echo.
echo *** DIESES FENSTER NICHT SCHLIESSEN! ***
echo.

where python >nul 2>&1
if %errorlevel% equ 0 goto use_python
where npx >nul 2>&1
if %errorlevel% equ 0 goto use_npx
echo Fehler: Weder Python noch Node gefunden.
echo Bitte Python (python.org) oder Node (nodejs.org) installieren.
pause
exit /b 1

:use_python
start "" cmd /c "timeout /t 4 /nobreak >nul && start http://localhost:5000"
python -m http.server 5000
goto end

:use_npx
start "" cmd /c "timeout /t 4 /nobreak >nul && start http://localhost:5000"
npx --yes serve . -l 5000
goto end

:end
pause
