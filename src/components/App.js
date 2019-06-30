import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
const PET_URL = "/api/pets"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
   const filter = this.state.filters.type
   const url = filter === 'all' ? '/api/pets' : `/api/pets?type=${filter}`
   fetch(url).then((resp)=> resp.json())
   .then((pets) => this.setState({pets: pets})) // { pets } is shorthand for this
  }

  onChangeType = (event) => {
    this.setState({filters: {...this.state.filters, type: event.target.value} })  //SPREADING in the filters as it's nested
  }

  onAdoptPet = (petId) => {
   // giv eme a new array that has:
   //all of the same pets
   const pets = this.state.pets.map(pet => pet.id === petId 
    ? {...pet, isAdopted: true} 
    : pet
    )
    this.setState({ pets: pets})
  }

  render() {
    const {onChangeType, onFindPetsClick, onAdoptPet} =  this

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={ onChangeType }
              onFindPetsClick ={ onFindPetsClick }/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet = {onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
