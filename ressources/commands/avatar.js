var { Client, MessageEmbed } = require('discord.js');
module.exports = class user {
    constructor(){
            this.name = 'avatar',
           	this.alias = ['pp', 'logo'],
            this.usage = 'd!avatar'
    }

    async run(client, message, args) {
    	let embed = new MessageEmbed()

    	if(!message.mentions.users.first()){
    		embed.setTitle(`This is your avatar`)
    		embed.setThumbnail(message.author.displayAvatarURL())
        embed.addField("Avatar link:", message.author.displayAvatarURL())
    		embed.setColor(`RANDOM`)
    		return message.channel.send(embed)
    	}else {
    		let mmb = message.mentions.users.first()
    		embed.setTitle(`This is the avatar of ${mmb.tag}`)
    		embed.setThumbnail(mmb.displayAvatarURL())
        embed.addField("Avatar link:", mmb.displayAvatarURL())
    		embed.setColor(`RANDOM`)
    		return message.channel.send(embed)
    	}

    }
}
