@echo off
echo ========================================
echo GITHUB SEITEN REPARATUR
echo ========================================
echo.

cd /d "%~dp0"

echo 1. Sicherstellen, dass index.html die Hauptdatei ist...
echo Config update...

echo 2. Fuege Config hinzu...
git add _config.yml .nojekyll

echo 3. Erstelle Reparatur-Commit...
git commit -m "FIX: GitHub Pages 404 Reparatur"

echo 4. Lade hoch (Push)...
git push

echo.
echo ========================================
echo UND JETZT WARTEN (ca 1-2 Minute)
echo Link: https://nazannildalkic-cloud.github.io/nanni/
echo ========================================
pause
