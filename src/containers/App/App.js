import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Home/Home';
import { Route } from 'react-router-dom';
import { getCharacter } from '../../api/apiCalls';
import Search from '../../components/Seacrh/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      featuredCharacter: {},
      suggestedCharacters: [],
      error: ''
    }
  }

  getRandomCharacters = async () => {
    try {
      const suggestedCharacters = [];
      for (let i = 0; i < 8; i++) {
        const randomNumber = Math.floor(Math.random() * 731);
        const character = await getCharacter(randomNumber);
        suggestedCharacters.push(character);
      }
      this.setState({ suggestedCharacters });
      console.log(this.state.suggestedCharacters)
    } catch (error) {
      this.setState(error.message);
    }
  }

  getFeaturedCharacter = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 731);
      const featuredCharacter = await getCharacter(randomNumber);
      this.setState({ featuredCharacter })
      console.log(featuredCharacter)
    } catch (error) {
      this.setState({ error: error.message })
    }

  }

  componentDidMount = async () => {
    try {
      await this.getFeaturedCharacter();
      await this.getRandomCharacters();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <main>
        <NavBar />
        <Route exact path="/" render={() => <Home 
        featuredCharacter={this.state.featuredCharacter} 
        suggestedCharacters={this.state.suggestedCharacters} />} 
        />
        {/* <Route exact path="/Favorites" render={() => <Favorites />} /> */}
        <Route exact path="/Search" render={() => <Search />} />
      </main>
    )
  }

}

export default App;
