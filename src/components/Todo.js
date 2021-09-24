import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onLongPress }) => {
    const longPressHandler = () => {
        onLongPress(todo.id)
    }

    return (
        <TouchableOpacity activeOpacity={0.45} onLongPress={longPressHandler}>
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
