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


var questionOne = {
    question : "What is my favorite colour?",
    answer : "blue"
  }
 
  var questionTwo = {
    question : "Which season I love the most?",
    answer : "winter"
  }
 
  var questionThree = {
    question : "My dream is to visit which place?",
    answer : "switzerland" 
  }
 
 
  var questions = [questionOne,questionTwo,questionThree]; {
  for (var i=0; i<questions.length; i++)
    play(questions[i].question,questions[i].answer)
  }
  
 
  console.log("YAY! You SCORED: ", score)
 