module.exports = class bot {
    constructor(){
            this.name = 'say',
            this.alias = ['echo'],
            this.usage = 'd!say'
    }
 
    async run(client, message, args) {
        let argssss = message.content.split(" ").slice(1);
        await message.delete();
        message.channel.send(argssss.join(" "))
        
    }
}