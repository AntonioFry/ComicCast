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
      this.setState({ error: error.message });
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
    return (
      <main>
        <NavBar />
        {!this.props.allCharacters.length && 
        <img className="loading" src={require('../../images/Double-Ring.gif')} alt="a loading icon"/>}
        {this.props.allCharacters.length && <Route exact path="/" render={() => <Home/>} />}
        {/* <Route exact path="/Favorites" render={() => <Favorites />} /> */}
        <Route exact path="/Search" render={() => <Search />} />
      </main>
    )
  }
}

const mapStateToProps = (store) => ({
  allCharacters: store.allCharacters
})

const mapDispatchToProps = (dispatch) => ({
  setCharacters: characters => dispatch(setCharacters(characters))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
