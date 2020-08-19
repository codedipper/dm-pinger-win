const { botToken, userID, pingInterval } = require("./config.json");
const DSC = require("discord.js");
const Client = new DSC.Client();

Client.on("ready", () => {
    console.log("Bot is up and up running.");

    function sendPing(){
        let pingUser = Client.users.cache.get(userID);

        pingUser.send("Here is your ping.");
    }

    setInterval(sendPing, parseInt(pingInterval) * 1000);
});

Client.on("error", () => {
    console.error();
    Client.login(botToken);
});

Client.login(botToken);
