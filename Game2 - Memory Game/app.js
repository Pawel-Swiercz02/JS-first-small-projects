const cardArr = [
    // We need 12 cards (for 2 matches)
    {
        name: 'bird',
        img: 'images/bird.jpg',
    },
    {
        name: 'cat',
        img: 'images/cat.jpg',
    },
    {
        name: 'dog',
        img: 'images/dog.jpg',
    },
    {
        name: 'fish',
        img: 'images/fish.jpg',
    },
    {
        name: 'horse',
        img: 'images/horse.jpg',
    },
    {
        name: 'shark',
        img: 'images/shark.jpg',
    },
    {
        name: 'bird',
        img: 'images/bird.jpg',
    },
    {
        name: 'cat',
        img: 'images/cat.jpg',
    },
    {
        name: 'dog',
        img: 'images/dog.jpg',
    },
    {
        name: 'fish',
        img: 'images/fish.jpg',
    },
    {
        name: 'horse',
        img: 'images/horse.jpg',
    },
    {
        name: 'shark',
        img: 'images/shark.jpg',
    },
];

//Shuffle an array randomly
cardArr.sort(() => 0.5 - Math.random());

//The hash '#' means we're looking for an id of 'grid' - this method looks through the whole thing and looks for an id of grid
const gridTile = document.querySelector('#grid');
const resultSpan = document.querySelector('#resultSpan');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

//Function that creates our 4x3 (12 tiles) board
function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
        //Method that creates an element
        const card = document.createElement('img');
        //Sets the attribute
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i);
        //Add event listener that listens for a click, and if i click on the card, something will happen AND that something will be the function flipcard which im calling as a callback (no parentheses - '()'), otherwise it would be called immediately and i want to call it ONLY when i click on the card
        card.addEventListener('click', flipCard);
        gridTile.appendChild(card);
    };
};
createBoard();

//This function will check if two chosen cards match
function checkMatch() {
    //Look for all the img elements that live inside the div with id of grid
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log('check for match');
    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image.');
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    };
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white.jpg');
        //Stop listening for the clicks on the cards
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
        alert('Sorry, try again!');
    }

    //Instead of innerHTML we can also use textContent if we wish
    resultSpan.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArr.length/2) {
        resultSpan.innerHTML = 'Congratulations! You found them all!';
    };
};

function flipCard() {
    //'this' allows us to interact with whichever element we clicked, and we're getting its data-id and saving it as cardId
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArr[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArr[cardId].img);
    
    if (cardsChosen.length === 2) {
        //setTimeout calls a function after a certain amount of time has passed
        setTimeout( checkMatch, 500);
    };
};