
import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo.jsx'
import VisibleTodoList from '../containers/VisibleTodoList.jsx'
import Footer from './Footer.jsx'

class App extends Component {
   render() {
      return (
         <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
         </div>
      )
   }
}

export default App
