const sclient = require('shodan-client')
const util = require('util')
const key = "bKjbp7FT070RZ4k1JbTZ0bnRNpyXKFLR"
var { Client, MessageEmbed } = require('discord.js');
module.exports = class info_gathering {
    constructor(){
            this.name = 'scan',
           	this.alias = ['sc'],
            this.usage = 'd!scan <ip>'
    }

    async run(client, message, args) {
      const opts = {
        facets: 'port:100,contry:100',
        minify: true,
      };
      if(!args.slice(1).join(" ")) return message.reply("Please provide an IP adress")
      sclient
        .host(args.slice(1).join(" "), key, opts)
        .then(result => {
        message.channel.send(util.inspect(result, { depth: 6}), {
          code: "mb"
        })
      //  console.log(util.inspect(result, {depth: 6}) || "No info available");
      }).catch(err => {
        message.reply("An error occured, no info for that ip or ip invalid")
        console.log(err);
      });

    }
}
