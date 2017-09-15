import React, { Component } from "react";
import Search from "./Search";

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = { comments: [] };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  };

  handleFormSubmit = event => {
    event.preventDefault();

    alert(`Hello ${this.state.searchTerm} `);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  componentDidMount() {}

  render() {
    return (
      <Search
        handleFormSubmit={() => this.handleFormSubmit()}
        handleInputChange={() => this.handleInputChange()}
      />
    );
  }
}

export default SearchContainer;
