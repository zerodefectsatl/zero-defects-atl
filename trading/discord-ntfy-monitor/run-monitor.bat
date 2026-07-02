@echo off
REM Launcher for the Discord -> ntfy signal monitor.
REM Point a Task Scheduler "At log on" task at this file to run it 24/7.
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)
if not exist .env (
  echo ERROR: .env not found. Copy .env.example to .env and fill in your
  echo Discord bot token and ntfy topic first.
  pause
  exit /b 1
)
:loop
node monitor.js
echo Monitor exited. Restarting in 5 seconds... (Ctrl+C to stop)
timeout /t 5 /nobreak >nul
goto loop
