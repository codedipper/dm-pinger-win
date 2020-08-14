@echo off
echo Installing the dependencies..
call npm ci

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)

echo Starting up the bot..
call npm run start

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)
