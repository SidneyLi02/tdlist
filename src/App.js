import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from "uuid"; 

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with girlfriend',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with co-op advisor',
        completed: false
      }
    ]
  }

  // toggle 
  markComplete = (id) => {
    // within todos, if todo element has id equal to clicked todo, mark as opp
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      } return todo;
    })});
  }

  // del
  delTodo = (id) => {
    // spread operator, returns all with id not equiv to input id
    this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id)]
    });
  }

  // add
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render () {
    return (
      <div className = "App">
          <div className = "container">
            <Header />
            <AddTodo addTodo = {this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete}
             delTodo = {this.delTodo}/>
          </div>
      </div>
    );
  }
}

export default App;
