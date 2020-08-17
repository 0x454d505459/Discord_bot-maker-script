var { Client, MessageEmbed } = require('discord.js');
module.exports = class music {
    constructor(){
            this.name = 'disconnect',
           	this.alias = ['disc', 'quit'],
            this.usage = 'd!disconnect'
    }

    async run(client, message, args) {
    	if(!message.guild.me.voice.channel) return message.repy("Im not connected to any voice channel")
        if(!message.member.voice.channel) return message.reply("Your not connected to a voice channel")
        if(!message.guild.me.voice.channel.id === message.member.voice.channel.id) return message.reply("Your not connected to the same channel as me")
        message.reply("Leaving the voice channel")
    	message.guild.me.voice.disconnect()

}}
