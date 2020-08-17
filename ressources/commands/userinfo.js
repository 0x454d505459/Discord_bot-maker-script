var { Client, MessageEmbed } = require('discord.js');
module.exports = class utils {
    constructor(){
            this.name = 'userinfo',
           	this.alias = ['ui'],
            this.usage = 'userinfo <@user>'
    }

    async run(client, message, args) {
        let user = message.mentions.users.first() || message.author;
        let embed = new MessageEmbed
        let member = message.guild.member(user)
        embed.setTitle(`Informations for ${user.tag}`)
        embed.setThumbnail(user.displayAvatarURL())
        embed.addField(":man_in_tuxedo: Name: ", user.username)
        embed.addField(":globe_with_meridians: Discriminator (#0000): ", "#" + user.discriminator)
        embed.addField(":id: ID: ", user.id)
        embed.addField(":radio_button: Status: ", user.presence.status)
        embed.addField(":pencil: Account created on: ", user.createdAt.toLocaleString())
        embed.addField(":clock2: Joined at: ", member.joinedAt.toLocaleString())
        embed.setColor(`RANDOM`)
        embed.setFooter(`Requested by ${message.member.displayName}`)
        return message.channel.send(embed)

    }
}
