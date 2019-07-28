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

  handleChange = async (e) => {
    try {
      await this.setState({ [e.target.name]: e.target.value });
      this.handleSubmit(this.state.search);
    } catch (error) {
      console.log(error)
    }
  }

  handleSubmit = (search) => {
    this.props.setSearchResult(search);
  }

  render() {
    return (
      <form>
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