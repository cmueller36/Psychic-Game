//delare in array the computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//set all variables to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesed = []; //array built from user guesses



//function begins when a user hits a key
document.onkeyup = function (event) {

    //computer selects a random letter
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //user guesses a letter
    var userGuess = event.key.toLowerCase()

    //each guessed letter is added to the userGuessed array
    userGuesed.push(userGuess);

    //function to reset array
    function cleararray(arr){
        for(var i = arr.length; i > 0; i--){
            arr.pop();
        }
    }

    //testing if user guesses the computer guess
    if(userGuess === computerGuess){
       wins++;
       //call function to reset the game
       cleararray(userGuesed);
       //reset the userGuessed back to 9
       guessesLeft=9;
       //alert notifying user of win
       alert("You Won! Wow you are Psychic the computer chose: "+computerGuess+" and you chose:"+userGuess)
    }
    else{
        guessesLeft--;
    };

    if(guessesLeft === 0){
        losses++;
         //call function to reset the game
        cleararray(userGuesed);
        //restes the userGuessed back to 9
        guessesLeft=9;
        //alert notifying user of loss
        alert("You Lost :( try harder next time")
    }


    var html =
    "<p>You chose: " + userGuesed + "</p>" +
    "<br>"+
    "<p>wins: " + wins + "</p>" +
    "<br>"+
    "<p>losses: " + losses + "</p>"+
    "<br>"+
    "<p>Guesses left: "+ guessesLeft+"</p>";

    document.querySelector("#game").innerHTML = html;


}