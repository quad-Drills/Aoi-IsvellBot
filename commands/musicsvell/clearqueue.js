module.exports={
  name: "clear-queue",
  code: `
  I cleared the song queue and stop the music playback after the current song!
  $clearSongQueue
  $onlyif[$voiceid[$clientid]!=;:x: I am not connected to any Voice Channel.]
  $onlyIf[$voiceid[$authorid]!=;:x: Please join a Voice Channel and use this command.]
  `
}