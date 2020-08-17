var { Client, MessageEmbed } = require('discord.js');
module.exports = class moderation {
    constructor(){
            this.name = 'mute',
           	this.alias = ['mt'],
            this.usage = 'd!mute <member>'
    }

    async run(client, message, args) {
      let embed = new MessageEmbed
      let user = message.mentions.users.first();
      let member = message.guild.member(user);
      var muterole = message.guild.roles.cache.find(x => x.name == "mute")
      if(!member) return message.reply("Please mention someone to **mute**!")


      if(muterole === undefined ) {

        message.guild.roles.create({
          data: {
            name: 'mute',
            color: 'BLACK'
          }
        }).then(role => {

          role.setPermissions(0)
          member.roles.add(role)
          embed.setDescription(`${member} has been muted by ${message.author.tag}`)
          embed.setColor(`GREEN`)
          return message.channel.send(embed)


        })
      }else {
        if(!member.roles.cache.find(y => y.name === "mute")) {
          member.roles.add(muterole)
          embed.setDescription(`${member} has been muted by ${message.author.tag}`)
          embed.setColor(`GREEN`)
          return message.channel.send(embed)

        }else {
          embed.setDescription(`${member} is already muted`)
          embed.setColor(`RED`)
          return message.channel.send(embed)
        }
      }


    }
}
