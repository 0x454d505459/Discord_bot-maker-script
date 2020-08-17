var { Client, MessageEmbed } = require('discord.js');
module.exports = class bot {
    constructor(){
            this.name = 'donate',
           	this.alias = ['don', 'sub'],
            this.usage = 'd!donate'
    }

    async run(client, message, args) {
        let embed = new MessageEmbed()
        .setTitle("Hey!! Thanx for considering donating")
        .setDescription("Why should you donate? Well here's why:")
        .addField("\u200b", "\u200b")
        .addField("HOSTING", "Help keeping the bot running 24h/7d")
        .addField("HARDWARE", "Help me buy some new and better hardware")
        .addField("SUPPORT", "Show your support")
        .addField("\u200b", "\u200b")
        .addField("Now that you know **why** let's see **how**:", " -**[UTIP](https://utip.io/nameundefined)**, With [utip](https://utip.io/nameundefined) you can support me by watching ads, each give me 0,01")

        message.channel.send(embed)

    }
}
