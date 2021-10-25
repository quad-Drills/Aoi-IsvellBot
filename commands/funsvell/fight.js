module.exports=[{
 name:"fight",
 code: `
 $if[$getVar[challenger1]!="none"]
 Someone is already registered $getVar[challenger1]
 $if[$getVar[challenger1]==$userTag[$authorId]]
 You cancelled the registration
 $setVar[challenger1;"none"]
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
  $author[You set yourself as the variable]
  $setVar[challenger1;$userTag[$authorId]]
  `
}]