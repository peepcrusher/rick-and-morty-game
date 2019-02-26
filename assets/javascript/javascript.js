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
    smeckles = Math.floor(Math.random()*15 +1);
    flurbos = Math.floor(Math.random()*15 +1);
    smidgens = Math.floor(Math.random()*15 +1);
    grepples = Math.floor(Math.random()*15 +1);
    computer = 35 + Math.floor(Math.random()*95 +1);
    $("#computer").html("Match this: " + computer);
    score = 0
    $("#score").html("Total *BUUuuRRRrrppp* Munnies:  " + score);
}

//this function updates the score 
function score(){
    $("#score").html("Your Score: " + score);
}

//get starting values for 1st game

reset();
console.log(smeckles);
console.log(flurbos);
console.log(smidgens);
console.log(grepples);
console.log(computer);






//use an onClick Event for each of the rick and morty money types
//Create an onClick event for smeckles
//add the value of the smeckles to score
$("#smeckles").on("click", function(){
    score = score + smeckles;
    $("#score").html("Total *BUUuuRRRrrppp* Munnies: " + score);


    
    //If the user's score is greater than the computer's score, add 1 to the loss count, and reset
    if(score > computer){
        loss++;
        reset();
        $("#losses").html("Losses: " + loss);
    }

       //If the user's score equals the computer's score, add 1 to the win count, and reset 
    else if(score === computer){
        win++
        reset()
        $("#wins").html("Wins: " + win)
        $("#win-screen").html("BBBuuuurrrrrppppp. Ya did it!");
    };
    

});

//Create an onClick event for flurbos, add flurbos to the score, and update score

//create an onclick event for smidgens, add smidgens to the score, and update score
$("#smidgens").on("click", function(){
    score = score + smidgens;
    $("#score").html("Total *BUUuuRRRrrppp* Munnies: " + score);
    if(score > computer){
        loss++;
        reset();
        $("#losses").html("Losses: " + loss);
    }

       //If the user's score equals the computer's score, add 1 to the win count, and reset 
    else if(score === computer){
        win++
        reset()
        $("#wins").html("Wins: " + win)
        $("#win-screen").html("BBBuuuurrrrrppppp. Ya did it!");
    };
});

//create an onclick event for grepples, add grepples to the score, and update score

$("#grepples").on("click", function(){
    score = score + grepples;
    $("#score").html("Total *BUUuuRRRrrppp* Munnies: " + score);
    if(score > computer){
        loss++;
        reset();
        $("#losses").html("Losses: " + loss);
    }

       //If the user's score equals the computer's score, add 1 to the win count, and reset 
    else if(score === computer){
        win++
        reset()
        $("#wins").html("Wins: " + win)
        $("#win-screen").html("BBBuuuurrrrrppppp. Ya did it!");
    };
});


$("#flurbos").on("click", function(){
    console.log("test");
    score = score + flurbos;
    $("#score").html("Total *BUUuuRRRrrppp* Munnies: " + score);
    //if user score is greater than 
    if(score > computer){
        loss++;
        reset();
        $("#losses").html("Losses: " + loss);
    }

       //If the user's score equals the computer's score, add 1 to the win count, and reset 
    else if(score === computer){
        win++
        reset()
        $("#wins").html("Wins: " + win)
        $("#win-screen").html("BBBuuuurrrrrppppp. Ya did it!");
    };

});