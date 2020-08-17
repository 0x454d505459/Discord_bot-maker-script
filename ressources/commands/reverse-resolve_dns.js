const sclient = require('shodan-client')
const util = require('util')
const key = "bKjbp7FT070RZ4k1JbTZ0bnRNpyXKFLR"
var { Client, MessageEmbed } = require('discord.js');
module.exports = class info_gathering {
    constructor(){
            this.name = 'reverse-resolve',
           	this.alias = ['rr'],
            this.usage = 'd!rr <ip adress>'
    }

    async run(client, message, args) {
      const opts = {
        facets: 'port:100,contry:100',
        //minify: false,
      };
      if(!args.slice(1).join(" ")) return message.reply("Please provide an ip adress")
      sclient
        .dnsReverse(args.slice(1).join(" "), key, opts)
        .then(result => {
        message.channel.send(util.inspect(result, { depth: 6}), {
          code: "mb"
        })
      //  console.log(util.inspect(result, {depth: 6}) || "No info available");
      }).catch(err => {
        message.reply(`Unable to reverse-resolve ${args.slice(1).join(" ")}`)
        console.log(err);
      });

    }
}
