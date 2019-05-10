const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if(message.content.toLowerCase() === "salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
    
    if(message.content === "C'est qui le meilleur ?!"){
        message.reply("Certainement pas <@175281779945504769> en tout cas ! Peut-être <@194863001495404544> ?!");
    }
});

