import React, { Component } from 'react';
import './App.css';

class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [
            {
               name: 'Frankenstein',
               id: 1
            },
            {
               name: 'Dracula',
               id: 2
            },
            {
               name: 'Zombie',
               id: 3
            }
         ]
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
            {
               this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
            }
         </div>
      );
   }
}

export default App;
