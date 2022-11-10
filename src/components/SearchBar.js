import React, { Component } from "react";
import "../styles/SearchBar.css";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchBarInput: "",
    };
  }

  handleInput = (event) => {
    let inputValue = event.target.value;
    this.setState({
      searchBarInput: inputValue,
    });
  };

  search = () => {
    let searchBarInput = this.state.searchBarInput;
    this.props.handleSearchBar(searchBarInput);
  };

  render() {
    return (
      <div className="container">
        <input
          value={this.state.searchBarInput}
          type={"text"}
          placeholder={"Search something..."}
          onChange={this.handleInput}
        />
        <button onClick={this.search}>Search</button>
        <span>Budget: {this.props.budget} $</span>
      </div>
    );
  }
}
