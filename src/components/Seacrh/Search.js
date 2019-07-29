import React, { Component } from 'react';
import './Search.css'
import { connect } from 'react-redux';
import { setSearchResult } from '../../actions';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
  }

  handleChange = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });
    this.handleSubmit(this.state.search);
  }

  handleSubmit = (search) => {
    this.props.setSearchResult(search.toLowerCase());
  }

  render() {
    return (
      <form className="search-form">
        <input
          className="character-search-input"
          placeholder="Search for a character"
          value={this.state.search}
          name="search"
          onChange={(e) => this.handleChange(e)}
        />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSearchResult: search => dispatch(setSearchResult(search))
})

export default connect(null, mapDispatchToProps)(Search);