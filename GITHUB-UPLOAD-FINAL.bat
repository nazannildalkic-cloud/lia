@echo off
echo ========================================
echo UPLOAD ZU GITHUB (NUR GEAENDERTE DATEIEN)
echo ========================================
echo.

cd /d "%~dp0"

echo 1. Fuege Dateien hinzu...
git add index.html script.js style.css landing.css

echo.
echo 2. Erstelle Commit...
git commit -m "Update: Design hell, Uebersetzungen, Bilder in einer Reihe"

echo.
echo 3. Lade hoch (Push)...
git push origin main

echo.
echo ========================================
echo FERTIG! Version ist online.
echo ========================================
pause
