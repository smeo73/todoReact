import React, { Component, PropTypes } from 'react'

class Todo extends Component {
  //flow
  props: {
      text: String,
      completed: Boolean,
      onClick: Function,
      onRemoveClick: Function
  };

  render() {
    const { text, completed, onToggleClick, onRemoveClick } = this.props

    return (
       <li
         style={{
           textDecoration: completed ? 'line-through' : 'none'
         }}
       >
          {text}
          <button onClick = {onToggleClick}>
             Toggle
          </button>
          <button onClick = {onRemoveClick}>
             Remove
          </button>
       </li>
    )
  }
}

export default Todo
