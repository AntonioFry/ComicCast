import React from 'react';
import CharacterCarousel from '../CharacterCarousel/CharacterCarousel';
import FeaturedCharacter from '../FeaturedCharacter/FeaturedCharacter';
import './Home.css';


export const Home = () => {
    return (
      <section className="home-section">
        <h2 className="featured-character-heading">Featured Character</h2>
        <FeaturedCharacter />
        <h2 className="suggested-character-heading">Suggested Characters</h2>
        <CharacterCarousel/>
      </section>
    )
}

export default Home;