const { exec } = require("child_process")
module.exports = class name {
    constructor(){
            this.name = 'run',
           	this.alias = ['start', 'exec'],
            this.usage = 'run <linux command>'
    }
 
    async run(client, message, args) {
    	if(message.author.id != "382960284135849984") return message.channel.send("Only the owner can execute commands")
        exec(args.slice(1).join(" "), (error, stdout, strerr) => {
   			if(!stdout.length > 2000) return message.reply("Sorry console output is too long to be send.")
            console.log(stdout)
        	message.channel.send(stdout || strerr)
        	
        })
        
    }
}