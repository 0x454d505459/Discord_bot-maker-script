var { Client, MessageEmbed } = require('discord.js');
module.exports = class fun {
    constructor(){
            this.name = '8ball',
           	this.alias = ['8b'],
            this.usage = 'd!8ball question'
    }

    async run(client, message, args) {
        let argssss = message.content.split(" ").slice(1);
        if(!argssss) return message.reply('Ask something')
        let replies = ["Yes", "No", "Probably not", "Probably yes", "Im not sure", "Ehhhh ask later okay ?", "Without any doubt", "Sure", "Surely....Not", "Of course"]
    	let result = Math.floor((Math.random() * replies.length))
    	let Q = argssss.join(" ")

    	let embed = new MessageEmbed()
    	.setThumbnail(message.author.displayAvatarURL())
    	.addField("Question", Q, true)
    	.addField("Answer", replies[result], true)
    	.setFooter(`Requested by ${message.member.displayName}`)

    	.setColor(`RANDOM`)
    	return message.channel.send(embed)
    }
}
