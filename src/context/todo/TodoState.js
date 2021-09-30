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
import { Http } from '../../http'

export const TodoState = ({ children }) => {
    const initialState = { todos: [], loading: false, error: null }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const { changeScreen } = useContext(ScreenContext)

    const fetchTodos = async () => {
        showLoader()
        clearError()

        try {
            const data = await Http.get(
                'https://native-todo-a40c4-default-rtdb.europe-west1.firebasedatabase.app/todos.json'
            )
            const todos = Object.keys(data).map(key => ({
                ...data[key],
                id: key
            }))
            dispatch({ type: FETCH_TODOS, payload: { todos } })
        } catch (err) {
            showError(err.message)
        }

        hideLoader()
    }
    const addTodo = async title => {
        clearError()
        try {
            const data = await Http.post(
                'https://native-todo-a40c4-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
                { title }
            )
            dispatch({
                type: ADD_TODO,
                payload: { todo: { id: data.name, title } }
            })
        } catch (err) {
            showError(err.message)
        }
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
                    onPress: async () => {
                        changeScreen(null)
                        await Http.delete(
                            `https://native-todo-a40c4-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
                        )
                        dispatch({ type: REMOVE_TODO, payload: { id } })
                    }
                }
            ],
            { cancelable: false }
        )
    }
    const updateTodo = async ({ id, title }) => {
        await Http.patch(
            `https://native-todo-a40c4-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
            { title }
        )
        dispatch({
            type: UPDATE_TODO,
            payload: { id, title }
        })
    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = error =>
        dispatch({ type: SHOW_ERROR, payload: { error } })
    const clearError = () => dispatch({ type: CLEAR_ERROR })

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
