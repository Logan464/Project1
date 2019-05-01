import { pokemon } from './pokemon.js'

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card__face'
  let figure = document.createElement('figure')
  let caption = document.createElement('figcaption')
  let image = document.createElement('img')

  caption.textContent = pokeData.name
  if (pokeData.id !== 0) {
    image.src = `images/${pokeData.imageID}${pokeData.name}.png`
  } else {
    image.src = `images/MissingNo.png`
  }

  figure.appendChild(image)
  figure.appendChild(caption)
  cardFront.appendChild(figure)
  return cardFront
}

function cardBackInfo(pokeData) {
 let infoDiv = document.createElement('div')
  infoDiv.className = 'infoDiv'
  let moveOne = document.createElement('p')
  let moveTwo = document.createElement('p')
  let moveThree = document.createElement('p')
  let moveFour = document.createElement('p')
  let type = document.createElement('h2')
  type.textContent = pokeData.types[0].type.name
  moveOne.textContent = pokeData.moves[43].move.name
  moveTwo.textContent = pokeData.moves[1].move.name
  moveThree.textContent = pokeData.moves[2].move.name
  moveFour.textContent = pokeData.moves[3].move.name
  infoDiv.appendChild(moveOne)
  infoDiv.appendChild(moveTwo)
  infoDiv.appendChild(moveThree)
  infoDiv.appendChild(moveFour)
infoDiv.appendChild(type)
  return infoDiv
}

function cardBack(pokeData) {
  let cardBack = document.createElement('div')
  let backImage = document.createElement('img')
  backImage.className = 'backImage'
  backImage.src = `../images/pokeball.png`
  cardBack.className = 'card__face card__face--back'
  cardBack.appendChild(backImage)
  cardBack.appendChild(cardBackInfo(pokeData))
  return cardBack
}

function createPokeCard(pokeData) {
  let scene = document.createElement('div')
  scene.className = 'scene'
  let card = document.createElement('div')
  card.className = 'card'
  
  let type = pokeData.types[0].type.name
switch (type) {
case 'poison':
scene.classList.toggle('poison')
break;
case 'noraml':
scene.classList.toggle('normal')
break;
case 'psychic':
scene.classList.toggle('psychic')
break;
case 'water':
scene.classList.toggle('water')
break;
case 'flying':
scene.classList.toggle('flying')
break;
case 'fire':
scene.classList.toggle('fire')
break;
case 'fairy':
scene.classList.toggle('fairy')
break;
case 'electric':
scene.classList.toggle('electric')
break;
case 'grass':
scene.classList.toggle('grass')
break;
case 'ice':
scene.classList.toggle('ice')
break;
case 'steel':
scene.classList.toggle('steel')
break;
case 'dark':
scene.classList.toggle('dark')
break;
case 'fighting':
scene.classList.toggle('fighting')
break;
case 'ground':
scene.classList.toggle('ground')
break;
}

  card.appendChild(cardFront(pokeData))
  card.appendChild(cardBack(pokeData))

  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped')
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
    .then(function(myJson) {
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
  if (aPokemon.id > 9 && aPokemon.id < 100) {
    aPokemon.imageID = '0' + aPokemon.id
  }
if (aPokemon.id > 99) {
aPokemon.imageID = aPokemon.id
}
  if (aPokemon.name === 'mr-mime') {
    aPokemon.name = 'mr. Mime'
  }

   let dash = aPokemon.name.indexOf('-')
  if(dash !== -1) {
      aPokemon.name = aPokemon.name.slice(0,dash)
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

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function(response) {
      return response.json()
    })
    .then(function(retrievedPokemon) {
      createPokeCard(matchIdToImage(retrievedPokemon))
    })
}
class Pokemon {
constructor(name) {
this.id= 0,
this.name = name,
this. moves= [
    {
move: {
name: 'Water Gun',
},
    },
    {
move: {
name: 'Water Gun',
},
    },
{
    move:{
name: 'Sky Attack',
},
},
{
    move:{
        name:'none',
    },
},
]
}
}
const newPokemonButton = document.querySelector('button')
const missingnoButton = document.querySelector('#missingno')

missingnoButton.addEventListener('click', function() {
createPokeCard(matchIdToImage(new Pokemon('Missingno')))
})

newPokemonButton.addEventListener('click', function() {
  let pokemonID = prompt('Enter an ID of an existing pokemon:')
  fetchSinglePokemon(pokemonID)
})
