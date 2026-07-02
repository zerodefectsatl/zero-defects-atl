@echo off
REM Relaunch TradingView Desktop with the Chrome DevTools debug port that the
REM tradingview-mcp server needs. Run this any time the MCP says it can't connect
REM (cdp_connected: false) - usually after a PC reboot or a TradingView update.

echo Closing TradingView...
taskkill /IM TradingView.exe /F >nul 2>&1
timeout /t 2 /nobreak >nul

echo Starting TradingView with remote debugging on port 9222...
start "" "%LOCALAPPDATA%\TradingView\TradingView.exe" --remote-debugging-port=9222

echo.
echo Done. Give it a few seconds to load, then in Claude Code run the
echo tradingview MCP tool "tv_health_check" to confirm the connection.
pause
