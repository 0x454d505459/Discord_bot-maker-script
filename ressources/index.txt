//required

const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs")

const { CommandHandler } = require("djs-commands")
const token = require("./token.json")
const prefix = require("./prefix.json")



//login

client.login(token.TOKEN)

//events

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});


//Commands manager

const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: [prefix.PREF]
  });


client.on('message', message => {
	if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);


    if(!cmd) return;

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }

})
