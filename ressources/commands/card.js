var { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require("canvas")
const Discord = require("discord.js")
module.exports = class utils {
    constructor(){
            this.name = 'card',
           	this.alias = ['cd'],
            this.usage = 'd!card [member]'
    }

    async run(client, message, args) {
      let user = message.mentions.users.first() || message.author;
      let member = message.guild.member(user)
      const canvas = Canvas.createCanvas(500, 200);
      const ctx = canvas.getContext('2d');
      const bg = await Canvas.loadImage("http://www.var-entreprises.com/wp-content/uploads/2019/04/footer-bg.jpg");
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#FFFF"
      ctx.strokeRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#FFFF"
      var size1 = 40;
      var size2 = 30;


      var name = user.tag;
      do {
        ctx.font = `${size1 -= 5}px sans-serif`;
      } while (ctx.measureText(name).width > canvas.width - 225)
      ctx.fillText(name, 200, 65);


      var created = "Created the: " + user.createdAt.toLocaleString();
      do {
        ctx.font = `${size2 -= 5}px sans-serif`;
      } while (ctx.measureText(created).width > canvas.width - 225)
      ctx.fillText(created, 200, 110);

      var created = "Joined at: " + member.joinedAt.toLocaleString();
      do {
        ctx.font = `${size2 -= 5}px sans-serif`;
      } while (ctx.measureText(created).width > canvas.width - 225)
      ctx.fillText(created, 200, 145);


      ctx.beginPath();
      ctx.arc(100, 100, 75, 0, Math.PI * 2, true);
      ctx.closePath()
      ctx.clip();

      const avatar = await Canvas.loadImage(user.displayAvatarURL({format: "png"}))
      ctx.drawImage(avatar, 25, 25, 150, 150);

      const final = new Discord.MessageAttachment(canvas.toBuffer(), "test.png")

      return message.channel.send(final);

    }
}
