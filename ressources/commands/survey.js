var { Client, MessageEmbed } = require('discord.js');
module.exports = class utils {
    constructor(){
            this.name = 'survey',
            this.alias = ['sond'],
            this.usage = 'd!sond <question>'
    }

    async run(client, message, args) {
        await message.delete()
        let argssss = message.content.split(" ").slice(1);
        let embed = new MessageEmbed()
        .setTitle(argssss.join(" "))
        .setColor(`RANDOM`)
        .setFooter("Posted by " + message.author.displayName)
        .setThumbnail(message.author.displayAvatarURL())
        return message.channel.send(embed).then(async msg => {
            await msg.react("✅")
            await msg.react("❌")
        })

    }
}
