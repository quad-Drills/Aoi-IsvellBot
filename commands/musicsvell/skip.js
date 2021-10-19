module.exports ={
 name:"skip",
 code:`
 $description[Skipped a song]
 $skipSong
 $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;
 `  
}