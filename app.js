const cardArray = [
    {
        name: 'Charmander',
        img: 'images/Squirtle.png',
    },
    {
        name: 'Bulbasaur',
        img: 'images/Bulbasaur.png',
    },
    {
        name: 'Squirtle',
        img: 'images/Charmendar.png',
    },
    {
        name: 'Pikachu',
        img: 'images/Pikachu.png',
    },
    {
        name: 'Mewtwo',
        img: 'images/Mewtwo.png',
    },
    // {
    //     name: 'Pokemon',
    //     img: 'images/Pokemon.png',
    // },
    {
        name: 'Jigglypuff',
        img: 'images/Jigglypuff.png',
    },
    // {
    //     name: 'White',
    //     img: 'images/White.png',
    // }
    {
        name: 'Charmander',
        img: 'images/Squirtle.png',
    },
    {
        name: 'Bulbasaur',
        img: 'images/Bulbasaur.png',
    },
    {
        name: 'Squirtle',
        img: 'images/Charmendar.png',
    },
    {
        name: 'Pikachu',
        img: 'images/Pikachu.png',
    },
    {
        name: 'Mewtwo',
        img: 'images/Mewtwo.png',
    },
    // {
    //     name: 'Pokemon',
    //     img: 'images/Pokemon.png',
    // },
    {
        name: 'Jigglypuff',
        img: 'images/Jigglypuff.png',
    },
    // {
    //     name: 'White',
    //     img: 'images/White.png',
    // }

]

cardArray.sort(()=> 0.5 - Math.random())
// console.log(cardArray)

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector("#result")
let cardChosen = []
let cardChosenId = []
const cardsWon = []
let name = document.querySelector('#nme')
let tries = document.querySelector('#no')

let userName = prompt("What's your Name?")
nme.textContent = userName;
let i = 0
function createBoard(){
    for(let i=0 ; i<cardArray.length ; i++){
        const card=document.createElement('img')
        card.setAttribute('src' , 'images/Pokemon.png')
        card.setAttribute('data-id' , i)
        card.setAttribute('class' , 'card')
        card.addEventListener('click',flipCard)
        grid.appendChild(card);
    
    }
}

createBoard()
function checkMatch(){
    console.log("check for Match")
    const cards = document.querySelectorAll('#grid img')
    const optOne = cardChosenId[0];
    const optTwo = cardChosenId[1];

    if(optOne == optTwo)
    {
        cards[optOne].setAttribute('src','images/Pokemon.png')
        cards[optTwo].setAttribute('src','images/Pokemon.png')
       // alert("You Have choosen the same card")
        i++
    }

    else if(cardChosen[0] === cardChosen[1]){
        //alert("You Have Found a Match")
        cards[optOne].setAttribute('src', "images/White.png")
        cards[optTwo].setAttribute('src', "images/White.png")
        cards[optOne].removeEventListener('click',flipCard)
        cards[optTwo].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
       
    }
    else{
        cards[optOne].setAttribute('src','images/Pokemon.png')
        cards[optTwo].setAttribute('src','images/Pokemon.png')
        // alert("Try Again")
        i++
    }
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenId = []
    
    tries.textContent = i

    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = "Congratulation you caught'em all"
    }
}

function flipCard(){
    //console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    console.log(cardChosen)
    console.log(cardChosenId)
    // console.log(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch , 500)
    }
}
