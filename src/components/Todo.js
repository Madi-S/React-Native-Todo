import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onPress, onLongPress }) => {
    const longPressHandler = () => {
        console.log('Calling onLongPress with', todo.id)
        onLongPress(todo.id)
    }

    const pressHanlder = () => {
        onPress(todo.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.45}
            onPress={pressHanlder}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#eee',
        marginBottom: 10
    }
})
