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
title.textContent = pokeData.name
Image.src = pokeData.sprites.front_shiny
card.appendChild(title)
card.appendChild(image)
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