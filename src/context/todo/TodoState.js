import React, { useReducer } from 'react'

import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [{ id: '1', title: 'Play tennis' }]
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title =>
        dispatch({
            type: ADD_TODO,
            payload: {
                todo: {
                    title,
                    id: Date.now().toString()
                }
            }
        })

    const removeTodo = id =>
        dispatch({
            type: REMOVE_TODO,
            payload: { id }
        })

    const updateTodo = ({ id, title }) =>
        dispatch({
            type: UPDATE_TODO,
            payload: { id, title }
        })

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
