readlineSync = require("readline-sync");
var score = 0
var userName = readlineSync.question("What's your name? ")
console.log("Welcome " +  userName  + " to DO YOU KNOW Parul?")

//play function
function play(question,answer) {
 var userAnswer = readlineSync.question(question)

 if (userAnswer === answer){
 console.log("Right!");
 score = score + 1;
 console.log("current score: " + score)
 console.log("---------")

} else {
  console.log("Wrong!");
  score = score - 1;
  console.log("current score: " + score)
  console.log("---------")
}
}