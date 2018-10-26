import React, { Component } from 'react';
import './App.css';

import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(ev) {
    ev.preventDefault();
    const { todos } = this.state;
    const newTodo = ev.target[0].value;

    if (newTodo.length) {
      this.setState({ todos: todos.concat(newTodo) });
      ev.target[0].value = '';
    }
  }

  deleteTodo(index) {
    const { todos } = this.state;

    this.setState({ todos: todos.filter((todo, i) => i !== index) });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input type="text" placeholder="meet granpa" />
          <button type="submit">save</button>
        </form>
        <ul>
          {todos.map((todo, index) => (<Todo todo={todo} key={index} deleteTodo={() => this.deleteTodo(index)}/>))}
        </ul>
      </div>
    );
  }
}

export default App;
