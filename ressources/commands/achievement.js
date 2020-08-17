var { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require("canvas")
const Discord = require("discord.js")
module.exports = class utils {
    constructor(){
            this.name = 'achievement',
           	this.alias = ['ac'],
            this.usage = 'd!ac <txt>'
    }

    async run(client, message, args) {
      if(!args) return message.reply("Please provide some text.")
      const canvas = Canvas.createCanvas(320, 64);
      const ctx = canvas.getContext('2d');
      const bg = await Canvas.loadImage("sources/imgs/mc/bg.png");
      const item = await Canvas.loadImage("sources/imgs/mc/item.png")
      ctx.drawImage(bg, 0, 0,);
      ctx.drawImage(item, 16, 16, 35, 35);
      ctx.font = "16px Minecraftia";
      ctx.fillStyle = "#ffff00";
      ctx.fillText('Achievement get!', 60, 40);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(args.slice(1).join(" "), 60, 60);
      const final = new Discord.MessageAttachment(canvas.toBuffer(), `${args.slice(1).join(" ")}.png`)
      return message.channel.send(final)

    }
}
