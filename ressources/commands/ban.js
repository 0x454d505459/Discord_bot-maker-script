var { Client, MessageEmbed } = require('discord.js');
module.exports = class name {
    constructor(){
            this.name = 'ban',
           	this.alias = ['b'],
            this.usage = 'ban <user>'
    }

    async run(client, message, args) {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Nice try tho! You don't have the permision to ban other members")
      let user = message.mentions.users.first()
      let member = message.guild.member(user)
      if(!args[2]){
        args[2] = "no reason"
      }
      if(!user) return message.reply("You need to mention the user to ban")
      //if(!member) return message.reply("You can only ban users that are your guild")
      user.ban({reason: args[2]}).then(() => {
        let embed = new MessageEmbed()
        embed.setTitle(`Banned ${user.tag} for ${args[2]}`)
        embed.setColor("GREEN")
        embed.setThumbnail(user.displayAvatarURL())
        embed.setFooter(`Banned by ${message.author.displayName}`)
        message.channel.send(embed)
      }).catch(err => {
        message.reply("For somes reasons I wasn\'t enable to ban this member")
      })

    }
}
