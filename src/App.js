import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import DogFormContainer from './Components/DogFormContainer/DogFormContainer'
import DogCollection from './Components/DogCollection/DogCollection'
import './App.css';

class App extends Component {

  state = {
    dogs: [],
    search: '',
    filteredDogs: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/dogs')
      .then(response => response.json())
      .then(this.dogState)
  }

  // deleteDog = (id) => {
  //   console.log(id)
  //   // const dogFilter = this.state.dogs.filter(dog => dog.id != id)
  //   // this.setState({dogs: dogFilter})
  // }

  dogState = (dogs) => {
    this.setState({
      dogs: dogs,
      filteredDogs: dogs
    })
  }

  updateSearch = (searchTerm) => {
    this.setState({search: searchTerm})
    this.dogFilter(searchTerm)
  }

  dogFilter = (searchTerm) => {
    const filteredDogs = this.state.dogs.filter(dog => {
      return dog.breed.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({filteredDogs})
  }

  addDog = (doggie) => {
    const { dogs } = this.state
    const user = {username: localStorage.getItem('username')}
    const dog = {
        'breed': doggie.breed,
        'bred_for': doggie.bred_for,
        'life_span': doggie.life_span,
        'height': doggie.height,
        'weight': doggie.weight,
        'temperament': doggie.temperament,
        'image_url': doggie.image_url,
        'info_url': doggie.info_url,
        'user_id': localStorage.user_id
    }


    fetch('http://localhost:3000/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(dog)
    }).then(response => response.json())
    .then(newDog => {
      newDog.user = user
      this.setState({
        dogs: [...dogs, newDog]
      })
    })
  }

  render(){
    const { search, dogs, filteredDogs } = this.state
    return (
      <div className="App">
        <Header />

        <DogFormContainer updateSearch={this.updateSearch} addDog={this.addDog} />
        <DogCollection deleteDog={this.deleteDog} dogs={search ? filteredDogs : dogs } />

        <Footer />
      </div>
    );
  }
}

export default App;