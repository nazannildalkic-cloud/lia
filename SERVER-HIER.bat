@echo off
chcp 65001 >nul
cd /d "%~dp0"
title NANIL Pulse – Server (dieser Ordner)
echo.
echo ========================================
echo   NANIL Pulse – Server HIER (BACKUP_ALT_VERSION)
echo ========================================
echo.
echo Bedient NUR diesen Ordner – die finale Seite!
echo.
echo *** DIESES FENSTER NICHT SCHLIESSEN! ***
echo.
echo Im Browser oeffnen:  http://localhost:5000
echo (Port 5000 – damit keine Verwechslung mit anderen Servern)
echo.

where python >nul 2>&1
if %errorlevel% equ 0 goto use_python
where npx >nul 2>&1
if %errorlevel% equ 0 goto use_npx
echo Weder Python noch Node gefunden. Bitte installieren.
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
