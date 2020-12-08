import React, {Component, useState} from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

import styled, {ThemeProvider} from 'styled-components' 
import {lightTheme, darkTheme, GlobalStyles} from './themes.js'

const StylesApp = styled.div`

  color: ${props => props.theme.fontColor}

`;

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'create todo app'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
     const todos = this.state.todos.filter(todo => {
       return todo.id !== id
     });
     
     this.setState({
       todos:todos
      })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos  = [...this.state.todos, todo]
    this.setState({todos: todos})
  }

  render() {
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodos={this.addTodo} />
        </div>
    );
  }
}

function Dark() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return(
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <styledApp>
        <App />
        <button
          style={theme === 'light' ? (
            {
              textAlign: 'center',
              position: 'relative',
              top: '30px',
              color: 'white',
              backgroundColor: '#2b2d2f',
              border: '2px solid white',
              borderRadius: '5px',
              margin: '0 auto',
              display: 'block',
              height:'40px',
              width: '150px'
            }
          ) : (
            {
              textAlign: 'center',
              position: 'relative',
              top: '30px',
              color: '#2b2d2f',
              backgroundColor: 'white',
              border: '2px solid white',
              borderRadius: '5px',
              margin: '0 auto',
              display: 'block',
              height:'40px',
              width: '150px'
            }
          )}
          onClick={() => themeToggler()}>Change Theme</button>
      </styledApp>
    </ThemeProvider>
  )
}


export default Dark;

