// variables used during the game
var win = 0;
var loss = 0;
var guessLeft = 9;
var computer = '';

// variables that are displayed on web
var gameEl = document.getElementById('game');
var winEl = document.getElementById('win');
var lossEl = document.getElementById('loss');
var guessLeftEl= document.getElementById('guessLeft');

var playerEl = document.getElementById('player');

// testing purpose
// var cpuEl = document.getElementById('cpu');
gameEl.style.display = 'block';

// event will happen as user press a button
document.onkeyup = function(event){
    
    // user input regardless of case, should be a letter
    const key = event.key.toLowerCase();
    if (key.length !== 1) {
        return;
    }
    const isLetter = (key >= "a" && key <= "z");
    
    //  while user inputs a letter and guess left,
    if (isLetter && guessLeft > 0 ){

        // computer choose a letter
        computer = computerChoice();

        // If computer's choice and user guess matches, win goesup.
        // Other wise loss goes up. Both cases guess left will go down.
        if(event.key === computer){
            win++;
            guessLeft--;
        }  else {
            loss++;
            guessLeft--;
        }
        
        // update the variables each time game is played
        winEl.textContent = win;
        lossEl.textContent = loss;
        playerEl.textContent += event.key;
        guessLeftEl.textContent = guessLeft;

        // testing purpose
        // cpuEl.textContent = computer;
       
    }
    if (loss === 10 || guessLeft ===0){
        alert ("You lost the game! Game restart");
        win = 0;
        loss = 0;
        guessLeft = 9;
        playerEl.textContent = '';
    }
}

function computerChoice(){
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var choice = possible.charAt(Math.floor(Math.random()*possible.length));
    
    return choice;
}