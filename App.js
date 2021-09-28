import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Alert } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import { THEME } from './src/theme'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([{ id: '1', title: 'Play tennis' }])

    if (isLoading) {
        return (
            <AppLoading
                startAsync={loadApp}
                onError={console.warn}
                onFinish={() => setIsLoading(false)}
            />
        )
    }

    const addTodo = title => {
        const newTodo = {
            title,
            id: Date.now().toString()
        }

        setTodos(prev => [...prev, newTodo])
    }

    const openTodo = id => {
        setTodoId(id)
    }

    const removeTodo = id => {
        const selectedTodo = todos.find(todo => todo.id === id)
        const removeTodoAndGoBack = () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }

        Alert.alert(
            'Item removal',
            `Are you sure to remove ${selectedTodo.title}?`,
            [
                {
                    text: 'Cancel',
                    style: 'negative'
                },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: removeTodoAndGoBack
                }
            ],
            { cancelable: false }
        )
    }

    const updateTodo = ({ id, title }) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    todo.title = title
                }
                return todo
            })
        )
    }

    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            openTodo={openTodo}
            removeTodo={removeTodo}
        />
    )
    if (todoId) {
        const goBack = () => setTodoId(null)
        const selectedTodo = todos.find(todo => todo.id === todoId)

        content = (
            <TodoScreen
                goBack={goBack}
                todo={selectedTodo}
                saveTodo={updateTodo}
                removeTodo={removeTodo}
            />
        )
    }

    return (
        <View style={styles.root}>
            <Navbar title='Todo App' />

            <View style={styles.content}>{content}</View>

            <StatusBar hidden={true} />
        </View>
    )
}

async function loadApp() {
    await Font.loadAsync({
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
    })
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    content: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
        flex: 1
    }
})

const _styles = StyleSheet.create({
    container: {
        flex: 1, // means take all space
        // height: 200, // not recommended due to variety of resolutions
        flexDirection: 'column',
        backgroundColor: '#000',
        alignItems: 'center', // horizontal alignment (for column, vice versa for row direction)
        justifyContent: 'center' // vertical alignment (for column, vice versa for row direction)
    },
    text: {
        color: '#fff',
        fontSize: 26
    }
})
