import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './Todolist'
import TodoInput from './TodoInput'
import Header from './Header'

class App extends Component {
  
  constructor(props)
  {
    super(props)
    this.state = {
      todoItems: []
    }
    this.addTodo = this.addTodo.bind(this)
  }
  

  addTodo(newTodo)
  {
    this.setState({
      todoItems : this.state.todoItems.concat([newTodo])
    })
  }
  render() {
    let {todoItems} = this.state
    return (
      <div>
        <Header name='Thitiwat Click'/>

        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList items={todoItems}/>
      </div>
    );
  }
}

export default App;
