var { Client, MessageEmbed } = require('discord.js');
module.exports = class utils {
    constructor(){
            this.name = 'clear',
           	this.alias = ['cls', 'purge'],
            this.usage = 'd!clear <number>'
    }

    async run(client, message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply("You do not have the permission to delete messages.")

        if(isNaN(args[1]) || parseInt(args[1]) <= 0) {
            return message.reply("Please give the number of messages to delete")
        }


        message.channel.bulkDelete(args[1] + 1).then(() => {
          let embed = new MessageEmbed()

          embed.setDescription(`${args[1]} messages have been deleted`)
          embed.setColor(`GREEN`)
          message.channel.send(embed)
        }).catch(err => console.error())


}}
