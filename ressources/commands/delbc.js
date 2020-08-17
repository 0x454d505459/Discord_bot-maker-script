var { Client, MessageEmbed } = require('discord.js');
module.exports = class name {
    constructor(){
            this.name = 'delbc',
           	this.alias = ['bcdel'],
            this.usage = ''
    }

    async run(client, message, args) {
      if(!message.author.id === "382960284135849984") return message.reply("Nice try tho! You don't have the permision to do broadcasts.")
      client.guilds.cache.forEach((guild) => {
        let chans = guild.channels.cache.find(x => x.name == "discordutils-news")
        chans.delete()
        message.channel.send("channel deleted")
      })

    }
}
