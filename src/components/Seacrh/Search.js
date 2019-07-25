import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
  }

  handleChange = (e) => {

  }

  handleSubmit = (e) => {

  }

  render() {
    return (
      <form>
        <input
          className="character-search-input"
          placeholder="Search for a character"
          value={this.state.search}
          name="search"
        />
      </form>
    )
  }
}

export default Search;