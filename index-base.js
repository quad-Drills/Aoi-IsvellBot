const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('./config.json');
const aoi = require('aoi.js');

const bot = new Discord.Client();

const token = process.env['bot-token'];
//const token = ''

bot.on('ready', ()=>{
    console.log('bot is ready')
})

bot.login(token);

const prefix = config.prefix;

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}

bot.on('message', async (msg) =>{

    //if our message doesn't start with our defined prefix, don't go any further into function
    if(!msg.content.startsWith(prefix)){
        console.log('no prefix')
        return
    }

    //slices off prefix from our message, then trims extra whitespace, 
    //then returns our array of word from the message
    const args = msg.content.slice(prefix.length).trim().split(' ')

    //splits off the first word from the array, which will be our command
    const command = args.shift().toLowerCase()
    //log the command
    console.log('command: ', command)
    //log any arguments passed with a command
    console.log(args)

    if(command === 'ego') {
    msg.react("😀")
    msg.reply('wow, what a great post')
  }

  if(command === 'anjing') {
    msg.react("😠")
    msg.reply('goblok')
  }
  
  if (command === "clear") {
    //default deletes message itself plus previous
    let num = 2;
    
    //if argument is provided, we need to convert it from string to number
    if (args[0]) {
      //add 1 to delete clear command itself
      num = parseInt(args[0]) + 1;
    }
    //bulk delete the messages
    msg.channel.bulkDelete(num);
    //notify channel of deleted messages
    msg.channel.send(`deleted  ${args[0]} posts for you`);
  }

  if(command === 'segs') {
    //msg.react("")
    msg.reply('seeeeeeeeegs seeeeeeeeeeegs')
  }
  
  if (command === "clear") {
    //default deletes message itself plus previous
    let num = 2;
    
    //if argument is provided, we need to convert it from string to number
    if (args[0]) {
      //add 1 to delete clear command itself
      num = parseInt(args[0]) + 1;
    }
    //bulk delete the messages
    msg.channel.bulkDelete(num);
    //notify channel of deleted messages
    msg.channel.send(`deleted  ${args[0]} posts for you`);
  }

  if(command === 'zen'){
    getQuote().then(quote => msg.channel.send(quote))
  }
})