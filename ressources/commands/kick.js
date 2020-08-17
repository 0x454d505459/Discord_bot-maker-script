var { Client, MessageEmbed } = require('discord.js');
module.exports = class utils {
    constructor(){
            this.name = 'kick',
            this.alias = ['expulse'],
            this.usage = 'd!kick <@member> [reason]'
    }

    async run(client, message, args) {
        let embed = new MessageEmbed()
        const user = message.mentions.users.first();
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Nice try tho! You don't have the permision to kick other members")
        if(!args[2]){
          args[2] = "no reason"
        }

        if (user) {

        const member = message.guild.member(user);

        if (member) {

          member
            .kick(args[2])
            .then(() => {
            message.delete()
            embed.setTitle(`Kicked ${user.tag} for ${args[2]}`)
            embed.setColor("GREEN")
            embed.setThumbnail(user.displayAvatarURL())
            embed.setFooter(`Kicked by ${message.author.displayName}`)
            return message.channel.send(embed)
           })
            .catch(err => {

            message.reply('For somes reasons I wasn\'t enable to kick this member ');

            console.error(err);
          });
       } else {

        message.reply("You can only kick a member that's in your server");
        }

     } else {
        message.reply("You need to mention the user to kick");
      }


    }
}
