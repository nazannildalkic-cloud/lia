@echo off
echo ========================================
echo UPLOAD ZU GITHUB (NUR GEAENDERTE DATEIEN)
echo ========================================
echo.

cd /d "%~dp0"

echo 1. Fuege alle Dateien hinzu (inkl. assets/)...
git add -A

echo.
echo 2. Erstelle Commit...
git commit -m "Nanni: Begruessung in DE/EN/TR (variableValues.language), Upload"

echo.
echo 3. Lade hoch (Push)...
git push origin main 2>nul || git push origin master 2>nul || git push

echo.
echo ========================================
echo FERTIG! Version ist online.
echo ========================================
pause
