import { people } from '/data/people.js'
import { planets } from '/data/planets.js'

const allHomeWorlds = people.map(person => {
  let foundWorld = planets.find(planet => {
    return planet.url === person.homeworld
  })
  return {
    name: person.name,
    home: foundWorld.name,
    eye_color: person.eye_color,
  }
})

console.log(allHomeWorlds)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach(person => {
  let personElement = document.createElement('div')
  let planetElement = document.createElement('p')

  personElement.className = 'box'
  personElement.textContent = person.name
  personElement.textContent = person.home
  personElement.style.backgroundColor = person.eye_color

  personElement.appendChild(planetElement)
  mainContainer.appendChild(personElement)
})

document.body.appendChild(mainContainer)
