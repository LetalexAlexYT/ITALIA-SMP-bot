const Canvas = require("canvas")
const Discord = require("discord.js")

const background = "https://cdn.discordapp.com/attachments/775385446393839637/929076495920549929/2021-12-13_19.27.49.png"
//dimensioni del background
const dim = {
    width: 1920,
    height: 1080,
    margin: 100
}
//dimensioni e coord dell'avatar
const av = {
    size: 512,
    x: 704,
    y: 284
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size})

    const canvas =Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()


    ctx.fillStyle="white"
    ctx.textAlign = "center"

    ctx.font = "100px Comic Sans MS"
    ctx.fillText("Benvenuto!", dim.width/2, dim.margin + 130)

    ctx.font = "120px Comic Sans MS"
    ctx.fillText(username + "#" + discrim, dim.width/2,dim.height - dim.margin - 70)


    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "benvenuto.png")
    return attachment
}

module.exports = generateImage