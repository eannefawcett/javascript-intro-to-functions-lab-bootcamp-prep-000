var uppercase = 'HELLO!'
var lowercase = 'hello!'
var mixedcase = 'Hi there'


function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout (string) {
  console.log('HELLO')
}
function logWhisper (string) {
  console.log('hello')
}
function sayHiToGrandma (string) {
<<<<<<< HEAD
  if (string === string.toLowerCase ()) {
  return "I can't hear you!";
   } else if (string === string.toUpperCase()) {
  return "YES INDEED!";
  } else if ("I love you, Grandma.") {
=======
  if (string) === string.toLowerCase () {
  return "I can't hear you!";
   } else if (string) === string.toUpperCase()
  return "YES INDEED!";
  } else if ("I love you, Grandma.")
>>>>>>> ef2e5c1e0f555bba3f4426317581a929e8b9b62d
  return "I love you, too.";
  }
}