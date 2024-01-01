const computerChoiceSpan = document.getElementById('computer-choice');
const yourChoiceSpan = document.getElementById('your-choice');
const resultSpan = document.getElementById('result');

//Pick out all the buttons
const possibleChoices = document.querySelectorAll('button');
let yourChoice;
let computerChoice;
let finalResult;

                //For each possibleChoice add event listener to listen up for a click (if I click any of the buttons I want something to happen)
                // e for event
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id;
    yourChoiceSpan.innerHTML = yourChoice;
    generateComputerChoice()
    getResult();
}));

function generateComputerChoice() {
    //Random number (math floor makes it a full integer) - it would generate a number from 0 to 2, so we add +1 for readability - now its from 1 to 3
    const randomNum = Math.floor(Math.random() * 3) + 1 ; //Or you can use possibleChoices.length instead of 3
    
    if (randomNum === 1) {
        computerChoice = 'rock';
    }
    if (randomNum === 2) {
        computerChoice = 'paper';
    }
    if (randomNum === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceSpan.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === yourChoice) {
        finalResult = "It's a draw!";
    }
    if (computerChoice === 'rock' && yourChoice === 'paper') {
        finalResult = "You won!";
    }
    if (computerChoice === 'rock' && yourChoice === 'scissors') {
        finalResult = "You lost...";
    }
    if (computerChoice === 'paper' && yourChoice === 'rock') {
        finalResult = "You lost...";
    }
    if (computerChoice === 'paper' && yourChoice === 'scissors') {
        finalResult = "You won!";
    }
    if (computerChoice === 'scissors' && yourChoice === 'rock') {
        finalResult = "You won!";
    }
    if (computerChoice === 'scissors' && yourChoice === 'paper') {
        finalResult = "You lost...";
    }
    resultSpan.innerHTML = finalResult;
}