module.exports=[{
 name:"fight",
 code: `
 $if[$getVar[challenger1]!=none]
 $if[$getVar[challenger1]==$userTag[$authorId]]
 You cancelled the registration
  $setVar[challenger1;none]
 $elseif[$getVar[challenger1]!=$userTag[$authorId]]
 $setVar[challenger1;none]
 $getVar[challenger1] is to fight $userTag[$authorId]
$endElseIf
 $endif
 $else
 You register yourself $setVar[challenger1;$userTag[$authorId]]
 $endif
 ` 
},{
  name:"whoin",
  code:`
  The variable is $getVar[challenger1]
  `
},{
  name:"setme",
  code:`
  $author[You set yourself as the variable $getVar[challenger1]]
  $setVar[challenger1;$userTag[$authorId]]
  `
},{
  name:"clearin",
  code:`
  $setVar[challenger1;none]
  `
}]