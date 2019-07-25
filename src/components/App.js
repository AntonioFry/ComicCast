import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(`https://www.superheroapi.com/api.php/1983143645120471/621`)
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main>
        <NavBar />
        <Route exact path="/" render={<Home />} />
      </main>
    )
  }

}

export default App;
