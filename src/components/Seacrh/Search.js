import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchResult } from '../../actions';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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

const mapDispatchToProps = (dispatch) => ({
  setSearchResult: search => dispatch(setSearchResult(search))
})

export default connect(null, mapDispatchToProps)(Search);