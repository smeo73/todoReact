import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions.js'

class AddTodo extends Component {
    handleClick (e, dispatch) {
       const node = this.refs.input
       const text = node.value.trim()
       if (!text) {
         return
       }
       node.value = ''
       dispatch(addTodo(text))
    }

    render() {
      const { dispatch } = this.props

      return (
         <div>
            <input type='text' ref='input' />

            <button onClick = {(e) => this.handleClick(e, dispatch)}>
               Add
            </button>
         </div>
      )
    }
}

export default connect()(AddTodo)
