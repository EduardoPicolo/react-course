import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ monsters: json }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search"
          onChange={e => {
            this.setState({ searchField: e.target.value })
          }}
        />
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
