@echo off
cd /d "%~dp0"
npm.cmd run build
npm.cmd run preview -- --host 0.0.0.0 --port 4173
pause
