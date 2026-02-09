@echo off
echo ========================================
echo UPLOAD ZU GITHUB (REPARATUR & UPDATE)
echo ========================================
echo.

cd /d "%~dp0"

echo 1. Entferne stoerende index.md...
if exist index.md del index.md
git rm --cached index.md 2>nul

echo 2. Fuege wichtige Dateien hinzu...
git add index.html index1.html script.js style.css landing.css _config.yml README.md .nojekyll nanni-config.js

echo.
echo 3. Erstelle Commit (Reparatur)...
git commit -m "FIX: Website Link Repariert & Config Update"

echo.
echo 4. Lade hoch (Push)...
git push

echo.
echo ========================================
echo FERTIG! Die Seite sollte in 1-2 Minuten wieder gehen.
echo Link: https://nazannildalkic-cloud.github.io/nanni/
echo ========================================
pause
