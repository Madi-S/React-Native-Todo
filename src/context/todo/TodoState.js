import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'

import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ScreenContext } from '../screen/screenContext'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [{ id: '1', title: 'Play tennis' }]
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const { changeScreen } = useContext(ScreenContext)

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

    const removeTodo = id => {
        const todoToRemove = state.todos.find(t => t.id === id)

        Alert.alert(
            'Item removal',
            `Are you sure to remove ${todoToRemove.title}?`,
            [
                {
                    text: 'Cancel',
                    style: 'negative'
                },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: () => {
                        changeScreen(null)
                        dispatch({
                            type: REMOVE_TODO,
                            payload: { id }
                        })
                    }
                }
            ],
            { cancelable: false }
        )
    }

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
