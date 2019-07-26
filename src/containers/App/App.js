import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Home/Home';
import { Route } from 'react-router-dom';
import { getCharacters } from '../../api/apiCalls';
import Search from '../../components/Seacrh/Search';
import { connect } from 'react-redux';
import { setCharacters } from '../../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCharacters: [],
      featuredCharacter: {},
      suggestedCharacters: [],
      error: ''
    }
  }

  getRandomCharacters = async () => {
    try {
      const suggestedCharacters = [];
      for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 26);
        const character = this.state.allCharacters[randomNumber]
        suggestedCharacters.push(character);
      }
      this.setState({ suggestedCharacters });
    } catch (error) {
      this.setState(error.message);
    }
  }

  getFeaturedCharacter = () => {
    const randomNumber = Math.floor(Math.random() * 20);
    const featuredCharacter = this.state.allCharacters[randomNumber];
    this.setState({ featuredCharacter });
  }

  componentDidMount = async () => {
    try {
      const allCharacters = await getCharacters();
      console.log(this.state.allCharacters)
      this.setState({ allCharacters });
      this.getFeaturedCharacter();
      this.getRandomCharacters();
      this.props.setCharacters(allCharacters)
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    console.log(this.state.suggestedCharacters)
    return (
      <main>
        <NavBar />
        {!this.state.suggestedCharacters.length && 
        <img className="loading" src={require('../../images/Double-Ring.gif')} alt="a loading icon"/>}
        {this.state.suggestedCharacters.length && <Route exact path="/" render={() => <Home 
        featuredCharacter={this.state.featuredCharacter} 
        suggestedCharacters={this.state.suggestedCharacters} />} />}
        {/* <Route exact path="/Favorites" render={() => <Favorites />} /> */}
        <Route exact path="/Search" render={() => <Search />} />
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCharacters: characters => dispatch(setCharacters(characters))
})

export default connect(null, mapDispatchToProps)(App);
