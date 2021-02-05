module.exports = {
    name: 'Hi',
    description: "greeting command",
    execute(message, args){
        message.channel.send('Hello dear, how are you?')
    }
}