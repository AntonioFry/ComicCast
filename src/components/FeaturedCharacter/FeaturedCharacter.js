import React from 'react';
import { connect } from 'react-redux';
import './FeaturedCharacter.css'

export const FeaturedCharacter = (props) => {
  console.log(props.allCharacters)
  const featuredCharacter = props.allCharacters[1]
  return (
    <article className="featured-character-article">
      <img className="featured-character-img" src={featuredCharacter.image} alt="featured character" />
      <div className="featured-character-info">
        <h2 className="featured-character-text">Name: {featuredCharacter.name}</h2>
        <p className="featured-character-text">Full Name: {featuredCharacter.full_name}</p>
        <p className="featured-character-text">Overview: {featuredCharacter.overview}</p>
      </div>
    </article>
  )
}

const mapStateToProps = (store) => ({
  allCharacters: store.allCharacters,
});

export default connect(mapStateToProps)(FeaturedCharacter);