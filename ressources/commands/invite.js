var { Client, MessageEmbed } = require('discord.js');
module.exports = class bot {
    constructor(){
            this.name = 'invite',
           	this.alias = ['i'],
            this.usage = 'd!invite'
    }

    async run(client, message, args) {
        await message.delete();
        var embed = new MessageEmbed()
        .setDescription("**Here's the links:**")
        .addField("My invitation link:", "https://discord.com/api/oauth2/authorize?client_id=708665277633658930&permissions=8&scope=bot")
        .addField("Discord help server:", "https://discord.gg/7t4BmuY")
        .setColor("#80ccff")
        .setFooter("Requested by " + message.member.displayName)
        message.channel.send(embed)

    }
}
