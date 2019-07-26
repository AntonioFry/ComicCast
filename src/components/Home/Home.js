import React, { Component } from 'react';
import CharacterCarousel from '../CharacterCarousel/CharacterCarousel';
import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { image, name, full_name, overview } = this.props.featuredCharacter;
    console.log(image)
    return (
      <section className="home-section">
        <article className="featured-character-article">
          <img className="featured-character-img" src={image} alt="featured character"/>
          <div className="featured-character-info">
            <h2 className="featured-character-text">Name: {name}</h2>
            <p className="featured-character-text">Full Name: {full_name}</p>
            <p className="featured-character-text">Overview: {overview}</p>
          </div>
        </article>
        <CharacterCarousel suggestedCharacters={this.props.suggestedCharacters}/>
      </section>
    )
  }
}

export default Home;