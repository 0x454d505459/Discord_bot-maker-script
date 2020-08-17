var { Client, MessageEmbed } = require('discord.js');
module.exports = class bot {
    constructor(){
            this.name = 'whoareyou',
           	this.alias = [''],
            this.usage = 'd!whoami'
    }

    async run(client, message, args) {
        await message.delete();
        var embed = new MessageEmbed()
        .setDescription("**Who am I ?**","I am 3 things:")
        .addField("*First*:", "I'm a `bot` made by NameUndefined")
        .addField("*Second*:", "I'm here to `serve` you")
        .addField("*Last but not least*:", "I'm here to help you managing your servers")
        .setColor("#33CC33")
        .setFooter("Requested by " + message.member.displayName)
        message.channel.send(embed)

    }
}
