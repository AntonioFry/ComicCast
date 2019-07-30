import React, { Component } from 'react'
import Card from '../Card/Card';
import './CharacterCarousel.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class CharacterCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCharacters: []
    }
  }

  componentDidMount() {
    this.getRandomCharacters();
  }

  getRandomCharacters = () => {
    let allCharacters = this.props.allCharacters.slice();
    let randomCharacters = [];
  
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * allCharacters.length - 1);
      const character = allCharacters.splice(randomNumber, 1);
      randomCharacters.push(...character)
    }
    this.setState({ randomCharacters })
  }
  
  render() {
    const characters = this.state.randomCharacters.map(character => {
      return (
        <Card
          name={character.name}
          id={character.id}
          image={character.image}
          key={character.id}
        />
      )
    })
    return (
      <section className="carousel-section">
        {characters}
      </section>
    )
  }
}

export const mapStateToProps = (store) => ({
  allCharacters: store.allCharacters
})

CharacterCarousel.propTypes = {
  allCharacters: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(CharacterCarousel);