module.exports = {
    name: 'youtube',
    description: "this sends youtube link of ChatNixon",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCqKJ0NnfNEk-j8pPzDe8CFw?view_as=subscriber')
    }
}