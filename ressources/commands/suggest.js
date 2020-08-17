var { Client, MessageEmbed } = require('discord.js');
module.exports = class bot {
    constructor(){
            this.name = 'suggest',
           	this.alias = ['sgg'],
            this.usage = 'd!suggest <idee>'
    }

    async run(client, message, args) {
        let sgg_chan = client.channels.cache.get("715581770237608016")

        if(!args.slice(1).join("")) return message.reply("Please make a suggestion")
        let suggs = new MessageEmbed()
        .setTitle(message.member.displayName + " suggested:")
        .setDescription(args.slice(1).join(" "))
        .setColor("#2EFE2E")
        message.channel.send(" > Suggestion sended!")
        sgg_chan.send(suggs).then(async m => {
        	await m.react("✅")
        	await m.react("❌")
        })

    }
}
