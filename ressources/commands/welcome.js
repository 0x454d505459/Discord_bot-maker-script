var { Client, MessageEmbed } = require('discord.js');
module.exports = class name {
    constructor(){
            this.name = 'welcome',
           	this.alias = ['bvn', 'wel'],
            this.usage = 'd!welcome <member>'
    }

    async run(client, message, args) {
      let user = message.mentions.users.first();
      let member = message.guild.member(user);
      let author = message.author

      if(!member) return message.reply("Please mention someone to welcome");

      message.channel.send(`${user.tag} has been welcomed!`)
      member.createDM().then(c => {
        c.send(`${author.tag} welcomes you from ${message.guild.name} !`)
      


      })

    }
}
