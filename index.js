function shout(string){
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
 var uppercase = 'YES INDEED!'
 var lowercase = 'I can\'t hear you!'
 var mixedCase = 'I love you, too!'
  
  
  if(string.toUpperCase() === 'HELLO!') {
    console.log (uppercase);
  }
  else if (string.toLowerCase() === 'hello!') {
    console.log (lowercase);
  }
  else if (string === 'I love you, Grandma!') {
    console.log (mixedCase);
  }
}

logShout('hello');
logWhisper('HELLO');

sayHiToGrandma('HELLO!');
sayHiToGrandma('hello!');
sayHiToGrandma('I love you, Grandma!');

