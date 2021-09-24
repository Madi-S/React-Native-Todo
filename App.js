import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        { id: '1', title: 'Play tennis' },
        { id: '2', title: 'Buy some milk' },
        { id: '3', title: 'Solve math problems' }
    ])

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
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    let Content = (
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

        Content = <TodoScreen todo={selectedTodo} goBack={goBack} />
    }

    return (
        <View style={styles.root}>
            <Navbar title='Todo App' />

            <View style={styles.content}>{Content}</View>

            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    content: {
        paddingHorizontal: 30,
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
