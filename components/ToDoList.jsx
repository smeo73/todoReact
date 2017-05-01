import React, { Component, PropTypes } from 'react'
import Todo from './Todo.jsx'

class TodoList extends Component {
  //flow
  props: {
      todos: Object,
      removeTodo: Function,
      toggleTodo: Function
  };

   render() {
     const { todos, removeTodo, toggleTodo } = this.props

      return (
        <div>
          <ul>
             {todos.map(todo =>
                <Todo
                  key = {todo.id}
                  {...todo}
                  onToggleClick={() => toggleTodo(todo.id)}
                  onRemoveClick={() => removeTodo(todo.id)}
                />
             )}
          </ul>
          <div>Total: {todos.length}</div>
        </div>
      )
   }
}

export default TodoList
