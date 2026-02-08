@echo off
chcp 65001 >nul
cd /d "%~dp0"
title NANIL Pulse – Server
echo.
echo ========================================
echo   NANIL Pulse – Start
echo ========================================
echo.

where python >nul 2>&1
if %errorlevel% equ 0 goto use_python
echo [Hinweis] Python nicht gefunden – versuche Node/npx...
where npx >nul 2>&1
if %errorlevel% equ 0 goto use_npx
echo.
echo *** Weder Node/npx noch Python gefunden. ***
echo Bitte Node von https://nodejs.org ODER Python installieren.
echo Danach diese Datei erneut starten.
echo.
pause
exit /b 1

:use_python
echo Server startet (Python, Port 5000). Browser oeffnet sich in 5 Sekunden.
echo *** Dieses Fenster NICHT schliessen! ***
echo Falls der Browser nicht aufgeht:  http://localhost:5000  manuell eingeben.
echo.
start "" cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:5000"
python -m http.server 5000
goto end

:use_npx
echo Server startet (Node, Port 5000). Erster Start kann 30 Sek. dauern!
echo *** Dieses Fenster NICHT schliessen! ***
echo Falls der Browser nicht aufgeht:  http://localhost:5000  manuell eingeben.
echo.
start "" cmd /c "timeout /t 25 /nobreak >nul && start http://localhost:5000"
npx --yes serve . -l 5000
goto end

:end
pause
