const ytdl = require("ytdl-core")
var { Client, MessageEmbed } = require('discord.js');
module.exports = class music {
    constructor(){
            this.name = 'play',
           	this.alias = ['p'],
            this.usage = 'd!play <URL>'
    }

    async run(client, message, args) {
        if(message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            connection.play(ytdl(args[1]), { filter: 'audioonly'})
        }else {
            message.reply("Please join a voice channel")
        }
    }
}
