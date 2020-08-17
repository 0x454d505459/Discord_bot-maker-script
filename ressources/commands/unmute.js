var { Client, MessageEmbed } = require('discord.js');
module.exports = class moderation {
    constructor(){
            this.name = 'unmute',
           	this.alias = ['umute','um'],
            this.usage = 'd!unmute <member>'
    }

    async run(client, message, args) {
      let user = message.mentions.users.first();
      let member = message.guild.member(user);
      const muterole = message.guild.roles.cache.find(x => x.name == "mute");
      if(!member) return message.reply("Please mention someone to **unmute!**");

      if(!member.roles.cache.get(muterole)) {
        message.channel.send(`${member} has been unmuted`)
        member.roles.remove(muterole)
      }else{

        message.channel.send(`${member} **isn't** muted!`)
      }

    }
}
