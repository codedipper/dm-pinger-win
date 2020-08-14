# dm-pinger-win
## Installation
Install a minimum version of `12` of [node.js](https://nodejs.org/en/download/).\
Open the `src` folder.\
Fill out `config.json` with your bot token, user id, and interval in seconds.\
Run `start.bat`.
## Licensing
This bot is not meant to be reproducted or distributed.\
All credit goes to `Reverse#0001` or User ID `658346535087636505` on Discord.\
See `LICENSE.md` for more information.
## Discord Rate Limiting
The Discord Rate Limiting is about 1 request per second, per client in one server.\
I suggest putting the interval no shorter than 3 seconds.
## Troubleshooting
- Make sure you installed [node.js](https://nodejs.org/en/download/).
- Make sure you ran the batch file.
- Make sure the bot is in a server that your are in.
- Make sure you have DMs enabled in settings and in that server.
- If it still doesn't work, crack open an issue and I'll help you out.
## Notes
- The "INTERVAL" object is counted in milliseconds, because in the code\
it is multiplied by 1000, making it count in seconds because the `setInterval()` function\
is counted in milliseconds.
- This project currently only supports Windows.
