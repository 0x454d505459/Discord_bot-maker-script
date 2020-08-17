const { Client, MessageEmbed } = require('discord.js');
const rdp = require("random-puppy");
module.exports = class fun {
    constructor(){
            this.name = 'meme',
           	this.alias = ['mm'],
            this.usage = 'd!meme'
    }

    async run(client, message, args) {
      const subsreddits = ['dankmeme', 'meme', "me_irl"]
      const random = subsreddits[Math.floor(Math.random() * subsreddits.length)];
      const img = await rdp(random)
      let embed = new MessageEmbed()
      .setTitle(`/r/${random}`)
      .setURL(`https://reddit.com/${random}`)
      .setColor(`RANDOM`)
      .setImage(img)
      .setFooter(`Requested by ${message.member.displayName}`)
      message.channel.send(embed)

    }
}
