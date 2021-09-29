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

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}
bot.onMessage() //Allows to execute Commands

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
});

bot.command({
  name: "ping", //Trigger name (command name)
  code: `Pong! $pingms` //Code
})

bot.loadCommands('./commands')