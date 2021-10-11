const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('./config.json');
const aoi = require('aoi.js');

const token = process.env['bot-token'];

const bot = new aoi.Bot({
  token: process.env['bot-token'],
  prefix: "!",
  intents: "all"
})

bot.onMessage({
  guildOnly: false //make commands work in dms
});

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}
bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
});

bot.musicStartCommand({
 channel: "$channelID", 
 code: `
 $color[RANDOM]
 $author[Now Playing]
 $description[Playing $songInfo[title]]`
});

bot.musicEndCommand({
    channel: "$channelID",
    code: `
    $sendMessage[{description: I'm leaving the Voice Channel since no one is playing music anymore}{delete:5s};no]`
});


bot.status ({
 text: "Isvell: Isvellization",
 type: "PLAYING",
 time: 10
});

bot.command({
  name: "ping", //Trigger name (command name)
  code: `Pong! $pingms` //Code
})

bot.loadCommands('./commands')

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);