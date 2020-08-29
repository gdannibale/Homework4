//set timer for 30 seconds per question
//has to be on a loop for each question

//var startButton = document.querySelector("#startQuiz"); {
   
//
var startquizButton = document.querySelector("#startquizButton");
var dogButton = document.querySelector("#dogButton");
var ratButton = document.querySelector("#ratButton");
var catButton = document.querySelector("#catButton");
var HashBrownsButton = document.querySelector("#hashbrownsButton")
var frenchfryButton = document.querySelector("#frenchfryButton");
var bakedpotatoButton = document.querySelector("#bakedpotatoButton");
var SportscarButton = document.querySelector("#SportscarButton");
var SUVButton = document.querySelector("#SUVButton");
var minivanButton = document.querySelector("#MinivanButton");
var resultsButton = document.querySelector("#resultsButton");
var secondsDisplay = document.querySelector("#seconds");
 //make variables for the answer selected
 var firstNumber = question1;
 var secondNumber = question2;
 var thirdNumber = question3;
 var secondsLeft = Math.floor(secondsLeft);
 

startquizButton.addEventListener("click", startquiz);
dogButton.addEventListener("click", CorrectQ1);
catButton.addEventListener("click", IncorrectQ1);
ratButton.addEventListener("click", IncorrectQ1);
HashbrownsButton.addEventListener("click", CorrectQ2);
frenchfryButton.addEventListener("click", IncorrectQ2);
bakedpotatoButton.addEventListener("click", IncorrectQ2);
SportscarButton.addEventListener("click", CorrectQ3);
SUVButton.addEventListener("click", IncorrectQ3);
MinivanButton.addEventListener("click", IncorrectQ3);
resultsButton.addEventListener("click", results)


dogButton = 1
catButton = 0
ratButton = 0
HashbrownsButton = 1
bakedpotatoButton = 0
frenchfryButton = 0
SportscarButton = 1
SUVButton = 0
MinivanButton = 0

$("#question1").hide();
$("#question2").hide();
$("#question3").hide();
$("#results").hide();

function startquiz(){
    alert("Quiz is starting!!");
    var count = 30;
    var interval = setInterval(function(){
        document.getElementById('count').innerHTML=count;
        count--;
        if (count === 0){
            clearInterval(interval);
            document.getElementById('count').innerHTML='Done';
    // or...
            alert("You're out of time!");
    }
}, 1000);

    
    //settime(); 
    //if (totalSeconds > 0) {
        /* The "interval" variable here using "setInterval()" begins the recurring increment of the
           secondsElapsed variable which is used to check if the time is up */
          //interval = setInterval(function() {
            //secondsElapsed++;

          $("#startquiz").hide();
          $("#question1").show();  
}

function CorrectQ1(){
    alert("Correct!");
          $("#question1").hide();
          $("#question2").show();
          
}
function IncorrectQ1(){
        alert("Incorrect!");
            $("#question1").hide();
            $("#question2").show();
}  
function CorrectQ2(){
    alert("Correct!");
          $("#question2").hide();
          $("#question3").show();
          
}  
function IncorrectQ2(){
    alert("Incorrect!");
        $("#question2").hide();
        $("#question3").show();
} 
function CorrectQ3(){
    alert("Correct!");
          $("#question3").hide();
          
} 
function IncorrectQ3(){
    alert("Incorrect!");
        $("#question3").hide();
        $("#results").show();

} 
function myStopFunction() {
    clearInterval(sec);
  }
function results(){
    alert("Show Results!")
  
    
   
    //Make an "or" statement to determine which answer the user has selected
    question1 = (dogButton || catButton || ratButton);
    question2 = (HashbrownsButton || bakedpotatoButton || frenchfryButton);
    question3 = (SportscarButton || SUVButton || MinivanButton);
    
    results = firstNumber + secondNumber + thirdNumber

        $("#results").hide();
}




//if(sum of variables??)



        






//var pauseButton = document.querySelector("#pause");
//var stopButton = document.querySelector("#stop");

//var secondsLeft = 30;

//function settime () {
    //var timerInterval = setInterval(function() {
        //secondsLeft--;
        //timeEl.textContent = secondsLeft + " next question";

    //if (status === "Working") {
        //minutes = workMinutesInput.value.trim();
    //} else {
        //minutes = restMinutesInput.value.trim();
    //}
    //)}; 


