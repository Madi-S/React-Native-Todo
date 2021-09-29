import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDER_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_TODOS
} from '../types'

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
    [SHOW_LOADER]: (state, _) => ({ ...state, loading: true }),
    [HIDER_LOADER]: (state, _) => ({ ...state, loading: false }),
    [CLEAR_ERROR]: (state, _) => ({ ...state, error: null }),
    [SHOW_ERROR]: (state, action) => ({
        ...state,
        error: action.payload.error
    }),
    [FETCH_TODOS]: (state, action) => ({
        ...state,
        todos: action.payload.todos
    }),
    DEFAULT: (state, _) => state
}
