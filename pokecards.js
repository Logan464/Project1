import { pokemon } from  '../data/pokemon.js'

class Pokemon {
consturctor(id) {
this.id = id
}
}

const mainContainer =document.querySelector('.container')

function createPokeCard(pokeData){
let card = document.createElement('div')
card.className ='box'
let figure = document.createElement('figure')
let caption = document.createElement('figcaption')
let image = document.createElement('img')

let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
caption.textContent = pokeData.name
if(pokeData.id !==0) {
Image.src = `../images/${pokeData.imageID}${pokeData.name}.png` } else {
image.src =`../images/pokeball.png`
}

figure.appendChild(image)
figure.appendChild(caption)
card.appendChild(figure)
mainContainer.appendChild(card)
}

pokemon.forEach((singleMon) => {
    fetch(singleMon.url)
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    createPokeCard(myJson)
    })
)}