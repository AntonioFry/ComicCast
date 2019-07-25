import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import { Route } from 'react-router-dom';
import { getCharacter } from '../api/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      featuredCharacter: {},
      suggestedCharacters: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const result = await getCharacter(620);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main>
        <NavBar />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/Favorites" render={() => <Favorites />} />
        <Route exact path="/Search" render={() => <Search />} />
      </main>
    )
  }

}

export default App;
