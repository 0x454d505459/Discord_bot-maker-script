const figlet = require("figlet")
var { Client, MessageEmbed } = require('discord.js');
module.exports = class name {
    constructor(){
            this.name = 'ascii',
           	this.alias = ['ai', 'figlet'],
            this.usage = 'd!ascii <TEXT>'
    }
 
    async run(client, message, args) {
        figlet(args.slice(1).join(" "), (err, out) => {
        	if(err) return console.log(err);
        	message.channel.send(out, {
        		code: "mb"
        	})
        })
        
    }
}













