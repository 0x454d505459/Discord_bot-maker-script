var { Client, MessageEmbed } = require('discord.js');
module.exports = class bot {
    constructor(){
            this.name = 'ping',
           	this.alias = ['lat'],
            this.usage = 'd!ping'
    }
 
    async run(client, message, args) {
        message.reply("Pinging... please wait....").then(m => {
        	m.edit(` > Latency: ${m.createdTimestamp - message.createdTimestamp}\'ms`)
        })
        
    }
}