import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from "./components/search-box/search-box.component";

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

   handleChange = e => {
      this.setState({ searchField: e.target.value })
   }

   render() {
      const { monsters, searchField } = this.state
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

      return (
         <div className="App">
            <h1>Monsters rolodex</h1>
            <SearchBox
               placeholder='Search'
               handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonsters}></CardList>
         </div>
      );
   }
}

export default App;
