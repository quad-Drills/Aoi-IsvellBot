module.exports = [{
  name: "play",
  aliases: ["p"],
  code: `
    $author[Added Song]
    $description[Added **$playSong[$noMentionMessage;5m;yes;yes;{title:Error} {description:Something went wrong!} {color:RED}] **onto queue!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]`
},{
  name:"queue",
  aliases: ["q"],
  code: `$queue[1;10;{number} - {title} by <@{userID}>]`
},{
 name:"skip",
 code:`$skipSong`  
},{
    name: "stop",
    aliases: ['s'],
    description: "Stops the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏹ Stopped the song!]
    $stopSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
},{
  name: "clear-queue",
  code: `
  I cleared the song queue and stop the music playback after the current song!
  $clearSongQueue
  `
},{
 name: "leave",
 aliases: ['disconnect', 'dc'],
 code: `
Successfully disconnected from <#$voiceid[$clientid]>
$leavevc
$onlyif[$voiceid[$clientid]!=;:x: I am not connected to any Voice Channel.]
$onlyIf[$voiceid[$authorid]!=;:x: Please join a Voice Channel and use this command.]`
},{
 name: "join",
 aliases: ['connect'],
 code: `
  Successfully joined <#$voiceid[$authorid]>
  $joinvc[$voiceid[$authorid]]
  $onlyif[$voiceid[$clientid]==;:x: Someone is listening to songs in another Voice Channel\nEither join their Voice Channel or use this command later.]
  $onlyIf[$voiceid[$authorid]!=;:x: Please join a Voice Channel and use this command.]`
},
{
    name: "lyrics",
    aliases: ['ly', 'l'],
    description: "Get lyrics from the current playing or a specific song",
    usage: "lyrics (song)",
    category: "music",
    code: `$color[RANDOM]
    $if[$argsCount>0]
    $title[Lyrics for $message]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;{description: No lyrics found for this song!}{color:RANDOM}]]
    $elseIf[$argsCount==0]
    $title[Lyrics for $songInfo[title]]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;{description: No lyrics found for this song!}{color:RANDOM}]]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $endelseif
    $endif
    $botTyping
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]`
}
]