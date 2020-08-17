var { Client, MessageEmbed } = require('discord.js');
module.exports = class utils {
    constructor(){
            this.name = 'serverinfo',
           	this.alias = ['si'],
            this.usage = 'd!serverinfo'
    }
 
    async run(client, message, args) {
        
        let embed = new MessageEmbed()
        .setTitle(`Information about ${message.guild.name}`)
       	.addField("This server is owned by ", message.guild.owner)
       	.addField("It was created on ", message.guild.createdAt)
       	.addField("It has ", message.guild.memberCount + " members")
       	.addField("Its hosted in ", message.guild.region)
       	.addField("It has for acronym ", message.guild.nameAcronym)
       	.addField("You joined it on ", message.guild.joinedAt)
       	.setThumbnail(message.guild.iconURL())
       	.setFooter(`Requested by ${message.member.displayName}`)
       	
        .setColor(`RANDOM`)
        return message.channel.send(embed)
        
    }
}