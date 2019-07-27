import React, { Component } from 'react';
import CharacterCarousel from '../CharacterCarousel/CharacterCarousel';
import FeaturedCharacter from '../FeaturedCharacter/FeaturedCharacter';
import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { image, name, full_name, overview } = this.props.featuredCharacter;
    return (
      <section className="home-section">
        <h2 className="featured-character-heading">Featured Character</h2>
        <FeaturedCharacter />
        <h2 className="suggested-character-heading">Suggested Characters</h2>
        <CharacterCarousel suggestedCharacters={this.props.suggestedCharacters}/>
      </section>
    )
  }
}

export default Home;