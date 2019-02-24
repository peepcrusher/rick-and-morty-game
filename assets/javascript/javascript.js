//create win and loss variables that start at 0

var win = 0;
var loss = 0;

// create a computer answer that will be between 35-120
var computer;

// create the user's current score.

var score = 0;


//create 4 rick and morty themed variables starting at 0
var smeckles;
var flurbos;
var smidgens;
var grepples;

//this function assigns each rick n morty money a value between 1-20
// also sets the user's score to 0, and generates a new number for the computer

function reset(){
    smeckles = Math.floor(Math.random()*20 +1);
    flurbos = Math.floor(Math.random()*20 +1);
    smidgens = Math.floor(Math.random()*20 +1);
    grepples = Math.floor(Math.random()*20 +1);
    computer = 35 + Math.floor(Math.random()*95 +1);
    score = 0
}

//get starting values for 1st game

reset();
console.log(score);
console.log(smeckles);
//If the user's score equals the computer's score, add 1 to the win count, and reset
if(score === computer){
    win++
    reset()
}

//If the user's score is greater than the computer's score, add 1 to the loss count, and reset
if(score > computer){
    loss++;
    reset();
}




//use an onClick Event for each of the rick and morty money types
//Create an onClick event for smeckles
//add the value of the smeckles to score
$("#smeckles").on("click", function(){
    score = score + smeckles;
    console.log(score);
});

console.log(score);
//Create an onClick event for flurbos

//create an onclick event for smidgens

//create an onclick event for grepples


