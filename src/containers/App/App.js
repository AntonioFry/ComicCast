import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Home/Home';
import { Route } from 'react-router-dom';
import { getCharacters } from '../../api/apiCalls';
import Search from '../../components/Seacrh/Search';
import { connect } from 'react-redux';
import { setCharacters } from '../../actions';
import CharacterDetails from '../../components/CharacterDetails.js/CharacterDetails';
import SearchResult from '../../components/SearchResults/SearchResults';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const allCharacters = await getCharacters();
      this.props.setCharacters(allCharacters)
    } catch (error) {
      this.setState({ error: "failed to fetch characters" });
    }
  }

  render() {
    const routes = this.props.allCharacters.map(character => {
      return <Route exact path={`/${character.id}`} 
        render={() => <CharacterDetails 
        id={character.id}
        overview={character.overview}
        first_appearance={character.first_appearance}
        name={character.name}
        full_name={character.full_name}
        image={character.image}
        publisher={character.publisher}
        key={character.id}
      />}/>
    })
    return (
      <main>
        <NavBar />
        {!this.props.allCharacters.length && 
        <img className="loading" src={require('../../images/Double-Ring.gif')} alt="a loading icon"/>}
        {this.props.allCharacters.length && <Route exact path="/" render={() => <Home/>}/>}
        {/* <Route exact path="/Favorites" render={() => <Favorites />} /> */}
        <Route exact path="/Search" render={() =>
          <>
            <Search />
            <SearchResult />
          </>
        }/>
        {routes}
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
