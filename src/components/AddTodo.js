import React, { useState } from 'react'
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [todo, setTodo] = useState({ title: '' })

    const pressHandler = () => {
        if (todo.title.trim()) {
            onSubmit(todo.title)
            setTodo(prev => ({ ...prev, title: '' }))
        } else {
            Alert.alert('Todo title cannot be blank.')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={text =>
                    setTodo(prev => ({
                        ...prev,
                        title: text
                    }))
                }
                value={todo.title}
                maxLength={300}
                autoFocus={true}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Enter todo title ...'
            />
            <Button title='Add' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab'
    }
})
