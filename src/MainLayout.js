import React, { useState, useContext } from 'react'
import { View, Alert, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { THEME } from './theme'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)

    // const removeTodo = id => {
    //     const selectedTodo = todos.find(todo => todo.id === id)
    //     const removeTodoAndGoBack = () => {
    //         setTodoId(null)
    //         setTodos(prev => prev.filter(todo => todo.id !== id))
    //     }

    //     Alert.alert(
    //         'Item removal',
    //         `Are you sure to remove ${selectedTodo.title}?`,
    //         [
    //             {
    //                 text: 'Cancel',
    //                 style: 'negative'
    //             },
    //             {
    //                 text: 'Remove',
    //                 style: 'destructive',
    //                 onPress: removeTodoAndGoBack
    //             }
    //         ],
    //         { cancelable: false }
    //     )
    // }

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
