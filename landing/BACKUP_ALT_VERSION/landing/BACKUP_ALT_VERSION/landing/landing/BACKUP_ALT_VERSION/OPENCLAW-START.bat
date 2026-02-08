@echo off
chcp 65001 >nul
title OpenClaw Gateway - @Nanilpulse_bot
echo.

if not exist "C:\Users\nazan\AppData\Roaming\npm\openclaw.cmd" (
    echo FEHLER: OpenClaw nicht gefunden!
    echo Installiere mit: npm install -g openclaw
    pause
    exit /b 1
)

echo ========================================
echo   OpenClaw - Alle stoppen, neu starten
echo ========================================
echo.

REM 1. Windows-Dienste stoppen (falls vorhanden)
echo [1/3] Stoppe Windows-Dienste...
schtasks /End /TN "Clawdbot Gateway" 2>nul
schtasks /End /TN "OpenClaw Gateway" 2>nul
net stop "Clawdbot Gateway" 2>nul
net stop "OpenClaw Gateway" 2>nul
timeout /t 2 /nobreak >nul

REM 2. Prozesse auf Port 18789 beenden (Gateway-Port)
echo [2/3] Beende alte Gateway-Prozesse...
powershell -Command "Get-NetTCPConnection -LocalPort 18789 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }"
timeout /t 2 /nobreak >nul

REM 3. OpenClaw starten
echo [3/3] Starte OpenClaw Gateway...
echo.
echo Fenster NICHT schliessen! Telegram: @Nanilpulse_bot
echo.
"C:\Users\nazan\AppData\Roaming\npm\openclaw.cmd" gateway

pause
