import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { image, name, biography } = this.props.featuredCharacter;
    console.log(image)
    return (
      <section className="home-section">
        <article className="featured-character-article">
          <img className="featured-character-img" src={image.url} alt="featured character"/>
          <div className="featured-character-info">
            <h2 className="featured-character-text">{name}</h2>
            <p className="featured-character-text">{biography["full-name"]}</p>
          </div>
        </article>
        
      </section>
    )
  }
}

export default Home;