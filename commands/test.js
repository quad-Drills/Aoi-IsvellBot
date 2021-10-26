//Test function
module.exports = [{
  name: "isvell",
  code: `
  $message
  Yes this is Isvell`
},{
name: "avatar",
code: `
    $description[<@$findMember[$message]>'s avatar]
    $image[$userAvatar[$findMember[$message]]]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
}];