import React, { useState, useContext } from 'react'
import { View, Alert, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { THEME } from './theme'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
    const { changeScreen, todoId } = useContext(ScreenContext)
    const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)

    const openTodo = id => {
        changeScreen(id)
    }

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

    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            openTodo={openTodo}
        />
    )
    if (todoId) {
        const goBack = () => changeScreen(null)
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
