import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

const handlers = {
    [ADD_TODO]: (state, action) => ({
        ...state,
        todos: [...state.todos, action.payload.todo]
    }),
    [REMOVE_TODO]: (state, action) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
    }),
    [UPDATE_TODO]: (state, action) => ({
        ...state,
        todos: state.todos.map(todo => {
            if (todo.id === action.payload.id) {
                todo.title = action.payload.title
            }
            return todo
        })
    }),
    DEFAULT: (state, action) => state
}
