module.exports = {
    name: 'ping',
    description: "this is a ping command which replies pong!",
    execute(message, args){
        message.channel.send('pong!')
    }
}