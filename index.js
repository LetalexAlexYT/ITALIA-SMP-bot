const Discord = require("discord.js")
require("dotenv").config() 

const prefix = "£"

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
if (message.content == "test") {
    message.reply("se vedi questo messaggio allora funzionaaa!")}
})

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(process.env.welcomeChannelId).send({
    content: `<@${member.id}>, Benvenuto nel server!`,
    files: [img]
})
})

client.on("ready", () => {
    client.user.setActivity({ name: "ITALIA SMP", type: "PLAYING" })
})





client.login(process.env.TOKEN)