var { Client, MessageEmbed } = require('discord.js');
module.exports = class utils {
    constructor(){
            this.name = 'help',
           	this.alias = ['h', '?','man'],
            this.usage = 'd!help <category>'
    }

    async run(client, message, args) {
        let argssss = message.content.split(" ").slice(1);

        await message.delete();
        let embed = new MessageEmbed()
        if(argssss == "utils") {
            embed.setTitle("Utilities")
            embed.addField("Avatar", "Show your avatar or the one of the user mentionned")
            embed.addField("clear", "Clear the number of messages you want (can't delete messages older than 2 weeks)")
            embed.addField("say", "Say what ever you want")
            embed.addField("Help", "Show this page")
            embed.addField("Survey", "Make a survey")
            embed.addField("Kick", "Kick the mentionned user")
            embed.addField("Serverinfo", "Show server's infos")
            embed.addField("Userinfo", "Show informations about a user")
            embed.addField("Welcome", "Welcome a new member in DM")
            embed.addField("Ban", "Ban the mentionned user")
            embed.setFooter("Requested by " + message.member.displayName)
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setColor(`RANDOM`)
            return message.channel.send(embed)


        }else if(argssss == "music"){
            embed.setTitle("Music systeme (indev but a bit usable)")
            .addField("Play", "play what ever you want")
            .addField("Disconnect", "Disconnect from the channel")
            embed.setFooter("Requested by " + message.member.displayName)
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setColor(`RANDOM`)
            return message.channel.send(embed)

        }else if(argssss == "bot" ){
            embed.setTitle("Bot's commands")
            embed.addField("Whoareyou", "More infos about me")
            embed.addField("Invite", "Usefull links")
            embed.addField("Restart", "Restart the bot")
            embed.addField("Shutdown", "Shutdown the bot")
            embed.addField("Donate", "Support the bot")
            embed.addField("ping", "Show bot latency")
            embed.addField("run", "Run linux commands")
            embed.addField("suggest", "Display your suggestion on the help server")
            embed.setFooter("Requested by " + message.member.displayName)
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setColor(`RANDOM`)
            return message.channel.send(embed)

        }else if(argssss == "fun"){
            embed.setTitle("Fun commands")
            embed.addField("8ball", "Randomly answer your question")
            embed.addField("ascii", "Send your text into ascii art")
            embed.addField("meme", "Show a meme from redit")
            embed.addField("Achievement", "Send a minecraft achievement")
            embed.addField("Card", "Return your card or the one of the mentioned user")
            embed.setFooter("Requested by " + message.member.displayName)
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setColor(`RANDOM`)
            return message.channel.send(embed)

        }else if(argssss == "info-gathering"){
          embed.setTitle("Info gathering commands")
          embed.addField("resolve", "Resolve domain names")
          embed.addField("resverse-resolve", "Resolve ip adresses into domain names")
          embed.addField("Scan", "Search in [shodan](https://shodan.io) database for informations about the provided IP ")
          embed.setColor(`RANDOM`)
          embed.setThumbnail(message.author.displayAvatarURL())
          return message.channel.send(embed)


        }else {
            embed.setTitle("Chose a category:")
            embed.addField("Utils", "Usefull commands for your server")
            embed.addField("Music", "Music commands")
            embed.addField("Bot", "commands relative to the bot")
            embed.addField("Fun", "Fun commands")
            embed.addField("Info-gathering", "Some informations gathering commands")
            embed.setFooter("Requested by " + message.member.displayName)
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setColor(`RANDOM`)
            return message.channel.send(embed)
        }


    }
}
