var { Client, MessageEmbed } = require('discord.js');
module.exports = class bot {
    constructor(){
            this.name = 'shutdown',
           	this.alias = ['stop'],
            this.usage = 'd!shutdown'
    }
 
    async run(client, message, args) {
        if(message.author.id != "382960284135849984") return message.channel.send("Only the owner can shutdown the bot.")
        
        try{
        	await message.channel.send("Shutting down the bot")
        	await console.log("Bot is Shutting down")
        	process.exit()
        }catch {
        	message.channel.send("Failed to stop the bot")
        }
    }
}