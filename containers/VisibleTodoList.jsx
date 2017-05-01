import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions/actions'
import TodoList from '../components/TodoList.jsx'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => ({ todos: getVisibleTodos(state.todos, state.visibilityFilter) })

const mapActionsToProps = { toggleTodo, removeTodo }

const VisibleTodoList = connect(
  mapStateToProps,
  mapActionsToProps
)(TodoList)

export default VisibleTodoList
