var { Client, MessageEmbed } = require('discord.js');
module.exports = class bot {
    constructor(){
            this.name = 'restart',
           	this.alias = [''],
            this.usage = 'd!restart'
    }

    async run(client, message, args) {
        if(message.author.id != "382960284135849984") return message.channel.send("Only the owner can shutdown the bot.")

        try{
        	await message.channel.send("Restarting the bot")
        	await process.exit()

        }catch(e) {
            message.channel.send("Failed to restart the bot")
        }
    }
}
