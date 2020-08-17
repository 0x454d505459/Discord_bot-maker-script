var { Client, MessageEmbed } = require('discord.js');

module.exports = class name {
    constructor(){
            this.name = 'broadcast',
           	this.alias = ['bc'],
            this.usage = 'broadcast <message>'
    }

    async run(client, message, args) {
      if(!message.author.id === "382960284135849984") return message.reply("Nice try tho! You don't have the permision to do broadcasts.")

      client.guilds.cache.forEach((guild) => {
        let chans = guild.channels.cache.find(x => x.name == "discordutils-news")
        if(!chans){
          guild.channels.create("Discord.Utils News").then(c => {
            c.send("Hey everyone, here's some news from my dev: ```" + args.slice(1).join(" ") + "```")

          })
        }else{
          chans.send("Hey everyone, here's some news from my dev: ```" + args.slice(1).join(" ") + "```")
          message.channel.send("Broadcast sended")
        }



      })
      }




    }
