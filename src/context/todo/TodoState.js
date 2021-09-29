import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'

import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ScreenContext } from '../screen/screenContext'
import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_TODOS
} from '../types'

export const TodoState = ({ children }) => {
    const initialState = { todos: [], loading: false, error: null }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const { changeScreen } = useContext(ScreenContext)

    const addTodo = async title => {
        const response = await fetch(
            'https://native-todo-a40c4-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            }
        )
        const data = await response.json()
        const id = data.name

        dispatch({
            type: ADD_TODO,
            payload: { todo: { id, title } }
        })
    }
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

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = error =>
        dispatch({ type: SHOW_ERROR, payload: { error } })
    const clearError = () => dispatch({ type: CLEAR_ERROR })

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
