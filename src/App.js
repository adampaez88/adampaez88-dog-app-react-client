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

  addDog = (newDog) => {
    this.setState({
      dogs: [...this.state.dogs, newDog]
    })
  }

  render(){
    const { search, dogs, filteredDogs } = this.state
    return (
      <div className="App">
        <Header />

        <DogFormContainer updateSearch={this.updateSearch} addDog={this.addDog}/>
        <DogCollection dogs={search ? filteredDogs : dogs } />

        <Footer />
      </div>
    );
  }
}

export default App;