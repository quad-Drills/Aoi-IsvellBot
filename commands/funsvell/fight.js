module.exports=[{
 name:"fight",
 code: `
 $if[$getServerVar[challenger1]!=none]
 $if[$getServerVar[challenger1]==$userTag[$authorId]]
 You cancelled the registration
  $setServerVar[challenger1;none]
 $elseif[$getServerVar[challenger1]!=$userTag[$authorId]]
 $setServerVar[challenger1;none]
 <@$findMember[$getServerVar[challenger1]]> is to fight <@$findMember[$userTag[$authorId]]> . Please proceed to a private channel or a table from now on.
$endElseIf
 $endif
 $else
 <@$findMember[$message]> is looking for a game @here 
 $setServerVar[challenger1;$userTag[$authorId]]
 $endif
 ` 
},{
  name:"whoin",
  code:`
  The variable is $getServerVar[challenger1]
  @$findMember[$getServerVar[challenger1]]
  `
},{
  name:"setme",
  code:`
  $author[You set yourself as the variable $getServerVar[challenger1]]
  $setServerVar[challenger1;$userTag[$authorId]]
  `
},{
  name:"clearin",
  code:`
  $setServerVar[challenger1;none]
  `
},{
  name:"testwait",
  code:`
  $awaitMessages[everyone;10s;!fight;matchfound;Matchmaking timed out $setServerVar[challenger1;"none"]]
  $setServerVar[challenger1;"justice"]
  Waiting for command
  `
}]