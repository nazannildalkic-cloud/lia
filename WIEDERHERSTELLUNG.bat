@echo off
echo ========================================
echo WIEDERHERSTELLUNG DER FUNKTIONIERENDEN SEITEN
echo ========================================
echo.
echo Kopiere funktionierende Dateien aus FINAL_UPLOAD...
echo.

cd /d "%~dp0"

copy /Y "FINAL_UPLOAD\index.html" "index.html"
copy /Y "FINAL_UPLOAD\script.js" "script.js"

echo.
echo ========================================
echo FERTIG! Seiten wiederhergestellt!
echo ========================================
echo.
echo Die funktionierenden index.html und script.js
echo wurden wiederhergestellt!
echo.
pause
