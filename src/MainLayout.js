import React, { useContext, useEffect, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { THEME } from './theme'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)
    const { fetchTodos } = useContext(TodoContext)

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos()
    }, [])

    const content = todoId ? <TodoScreen /> : <MainScreen />

    return (
        <View style={styles.root}>
            <Navbar title='Todo App' />

            <View style={styles.content}>{content}</View>

            <StatusBar hidden={true} />
        </View>
    )
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
