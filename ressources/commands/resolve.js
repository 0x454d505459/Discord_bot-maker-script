const sclient = require('shodan-client')
const util = require('util')
const key = "bKjbp7FT070RZ4k1JbTZ0bnRNpyXKFLR"
var { Client, MessageEmbed } = require('discord.js');
module.exports = class info_gathering {
    constructor(){
            this.name = 'resolve',
           	this.alias = ['rs'],
            this.usage = 'd!resolve <domain name>'
    }

    async run(client, message, args) {
      const opts = {
        facets: 'port:100,contry:100',
        //minify: false,
      };
      if(!args.slice(1).join(" ")) return message.reply("Please provide a domain name")
      sclient
        .dnsResolve(args.slice(1).join(" "), key, opts)
        .then(result => {
        message.channel.send(util.inspect(result, { depth: 6}), {
          code: "mb"
        })
      //  console.log(util.inspect(result, {depth: 6}) || "No info available");
      }).catch(err => {
        message.reply(`Unable to resolve ${args.slice(1).join(" ")}`)
        console.log(err);
      });

    }
}
