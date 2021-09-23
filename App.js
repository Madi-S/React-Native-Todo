import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { Todo } from './src/Todo'
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'

export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo = title => {
        const newTodo = {
            id: Date.now().toString(),
            title: title
        }

        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    return (
        <View>
            <Navbar title='Todo App' />

            <View style={styles.content}>
                <AddTodo onSubmit={addTodo} />
                <View>
                    {todos.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                </View>
            </View>

            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 30,
        paddingVertical: 20
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
