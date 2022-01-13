const Discord = require("discord.js")
const Permissions = require("discord.js")

Discord.Client.on("messageCreate", (member, message) => {
    if(member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])){
        if(message.content == "£ciao"){
            message.reply("salve :)")
        }
    }
})