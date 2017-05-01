import { combineReducers } from 'redux'
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/actions'

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: []
}

const todo = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        id: payload.id,
        text: payload.text,
        completed: false
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
   switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          todo(undefined, action)
        ]
      case REMOVE_TODO:
        return state.filter(item => (item.id !== action.id))
      case TOGGLE_TODO:
        return state.map((todo) => {
            if (todo.id === action.id) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
            return todo
          })
      default:
        return state
   }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
