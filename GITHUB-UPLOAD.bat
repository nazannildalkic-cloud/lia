@echo off
echo ========================================
echo NANIL GITHUB UPLOAD
echo ========================================
echo.
echo Uploading translations to GitHub...
echo.

cd /d "%~dp0"

git add script.js index.html
git commit -m "Updated founder & FAQ translations (DE/EN/TR)"
git push

echo.
echo ========================================
echo FERTIG!
echo ========================================
echo.
echo Aenderungen sind auf GitHub!
echo In 1-2 Minuten live auf:
echo https://nazannildalkic-cloud.github.io/nanni/
echo.
pause
