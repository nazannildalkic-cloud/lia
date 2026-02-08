@echo off
chcp 65001 >nul
cd /d "%~dp0"
title NANIL Pulse – Server
echo.
echo ========================================
echo   NANIL Pulse – Seite + Nanni testen
echo ========================================
echo.
echo Server startet. Browser oeffnet sich in wenigen Sekunden.
echo *** Dieses Fenster NICHT schliessen! ***
echo.
echo Falls der Browser nicht aufgeht:  http://localhost:5000  manuell eingeben.
echo WICHTIG: http:// (nicht https://) – sonst SSL-Fehler!
echo.
start "" cmd /c "timeout /t 10 /nobreak >nul && start http://localhost:5000"
python -m http.server 5000 2>nul || npx --yes serve . -l 5000
pause
