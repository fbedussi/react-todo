import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  render() {
    const {todos} = this.state;

    return (
      <div className="App">
        <form onSubmit={(ev) => {
            ev.preventDefault();
            const newTodo = ev.target[0].value;
            if (newTodo.length) {
              this.setState({todos: todos.concat(newTodo)});
            }
          }}>
          <input type="text" placeholder="meet granpa"/>
          <button type="submit">save</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
          <li key={index}>            
            {todo}
            <button type="button" onClick={() => {
              this.setState({todos: todos.filter((todo, i) => i !== index)})
            }}>x</button>
          </li>))}
        </ul>
      </div>
    );
  }
}

export default App;
