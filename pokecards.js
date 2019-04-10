import { pokemon } from  '../data/pokemon.js'

const mainContainer =document.querySelector('.container')

function cardFront(pokeData) {
let cardFront = document.createElement('div')
cardFront.className = 'card_face'
let figure = document.createElement('figure')
let caption = document.createElement('figcaption')
let image = document.createElement('img')

caption.textContent = pokeData.name
if (pokeData.id !== 0) {
    image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
} else {
    image.src =`../images/pokeball.png`
}

figure.appendChild(image)
figure.appendChild(caption)
cardFront.appendChild(figure)
return cardFront
}

function cardBackInfo(pokeData) {
let infoDiv = document.createElement('div')
infoDiv.className ='infoDiv'
let moveOne = document.createElement('p')
let moveTwo = document.createElement('p')
let moveThree = document.createElement('p')
let moveFour = document.createElement('p')
moveOne.textContent = pokeData.moves[0].move.name
moveTwo.textContent = pokeData.moves[1].move.name
moveThree.textContent = pokeData.moves[2].move.name
moveFour.textContent = pokeData.moves[3].move.name
infoDiv.appendChild(moveOne)
infoDiv.appendChild(moveTwo)
infoDiv.appendChild(moveThree)
infoDiv.appendChild(moveFour)
return infoDiv
}

function cardBack(pokeData) {
let cardBack = document.createElement('div')
let backImage = document.createElement('img')
backImage.className = 'backImage'
backImage.src = `../images/pokeball.png`
cardBack.className = 'card_face card_face--back'
cardBack.appendChild(backImage)
cardBack.appendChild(cardBackInfo(pokeData))
return cardBack
}

function createPokeCard(pokeData){
let scene = document.createElement('div')
scene.className ='scene'
let card = document.createElement('div')
card.className = 'card'

card.appendChild(cardFront(pokeData))
card.appendChild(cardBack(pokeData))

card.addEventListener( 'click', function() {
card.classList.toggle('is-flipped');
})

scene.appendChild(card)
mainContainer.appendChild(scene)
}

const allFetchedPokemon = []

pokemon.forEach(singleMon => {
fetch(singleMon.url)
.then(function(response) {
return response.json()
})
.then(function(mtJson) {
createPokeCard(matchIdToImage(myJson))
})
})

function matchIdToImage(aPokemon) {
if (aPokemon.id === 0) {
aPokemon.imageID = 0
}
if (aPokemon.id < 10) {
aPokemon.imageID = '00' + aPokemon.id
}
if (aPokemon.id > 99) {
aPokemon.imageID = aPokemon.id
}
if(aPokemon.name === "mr-mime") {
aPokemon.name = "mr. Mime"
}
let dash = aPokemon.name.slice(0,dash)
}
aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
return aPokemon
}
//let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
//caption.textContent = pokeData.name
//if(pokeData.id !==0) {
//Image.src = `../images/${pokeData.imageID}${pokeData.name}.png` } else {
//image.src =`../images/pokeball.png`
//}

figure.appendChild(image)
figure.appendChild(caption)
card.appendChild(figure)
mainContainer.appendChild(card)
}

//pokemon.forEach((singleMon) => {
//    fetch(singleMon.url)
 //   .then(function(response) {
//    return response.json();
//    })
//    .then(function(myJson) {
//    createPokeCard(myJson)
//    })
// )}

function fetchSinglePokemon(id) {
fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
.then(function(response) {
return response.json()
}
})
}
.then(function(retrievedPokemon) {
createPokeCard(matchIdToImage()
console.log(typeof(retrievedPokemon.id))
if (retrievedPokemon.id < 10) {
retrievedPokemon.imageID = "00" + retrievedPokemon.id
}
if(retrievedPokemon.id > 9 && retrievedPokemon.id < 100 ) {
retrievedPokemon.imageID = "0" + retrievedPokemon.id
}
if(retrievedPokemon.id > 99) {

retrievedPokemon.imageID = retrievedPokemon.id
}
retrievedPokemon.name =retrievedPokemon.name.charAt(0).toUpperCase() + retrievedPokemon.name.slice(1) createPokeCard(retrievedPokemon)
})
}

const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function() {
let pokemonID =prompt('Enter an ID of an existing pokemon:')
fetchSinglePokemon(pokemonID)
});
