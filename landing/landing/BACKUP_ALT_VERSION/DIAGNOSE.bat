@echo off
chcp 65001 >nul
echo.
echo ============================================
echo   NANIL Pulse – Diagnose (Seite oeffnen)
echo ============================================
echo.
echo Aktueller Ordner: %CD%
echo Sie befinden sich in: %~dp0
echo.

echo --- 1. Node.js (fuer npx serve) ---
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo    [FEHLT] Node.js ist nicht installiert oder nicht im PATH.
    echo    -> Bitte Node.js von https://nodejs.org installieren.
) else (
    for /f "tokens=*" %%i in ('node -v 2^>nul') do echo    [OK] %%i
)

echo.
echo --- 2. npx (zum Starten des Servers) ---
where npx >nul 2>&1
if %errorlevel% neq 0 (
    echo    [FEHLT] npx nicht gefunden. Kommt mit Node.js – bitte Node neu installieren.
) else (
    echo    [OK] npx vorhanden
)

echo.
echo --- 3. Python (Alternative zu npx serve) ---
where python >nul 2>&1
if %errorlevel% neq 0 (
    echo    [FEHLT] Python nicht im PATH.
) else (
    for /f "tokens=*" %%i in ('python --version 2^>nul') do echo    [OK] %%i
)

echo.
echo --- 4. Uebergeordneter Projektordner ---
set "PARENT=%~dp0.."
if exist "%PARENT%\index.html" (echo    [OK] index.html im Hauptordner gefunden.) else (echo    [FEHLT] index.html im Hauptordner nicht gefunden.)
if exist "%PARENT%\style.css"  (echo    [OK] style.css gefunden.) else (echo    [FEHLT] style.css nicht gefunden.)

echo.
echo --- 5. Port 3000 (wird von npx serve genutzt) ---
netstat -an 2>nul | findstr ":3000" >nul 2>&1
if %errorlevel% equ 0 (
    echo    [HINWEIS] Port 3000 scheint belegt. Ein anderer Server laeuft evtl. schon.
) else (
    echo    [OK] Port 3000 frei.
)

echo.
echo ============================================
echo   Naechste Schritte
echo ============================================
echo.
echo 1. LOCALHOST-OEFFNEN.bat starten (Doppelklick).
echo 2. Das schwarze Fenster NICHT schliessen – der Server laeuft darin.
echo 3. Wenn sich der Browser nicht oeffnet: manuell aufrufen:
echo      http://localhost:3000
echo.
echo Wenn eine Fehlermeldung im schwarzen Fenster erscheint,
echo bitte den genauen Text notieren oder einen Screenshot machen.
echo.
pause
