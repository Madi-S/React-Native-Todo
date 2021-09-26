import React, { useState } from 'react'
import { View, TextInput, Alert, StyleSheet, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export const AddTodo = ({ onSubmit }) => {
    const [title, setTitle] = useState('')

    const pressHandler = () => {
        if (title.trim()) {
            onSubmit(title)
            setTitle('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Error', 'Todo title cannot be blank!')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                maxLength={300}
                autoFocus={true}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Enter todo title ...'
            />
            <AntDesign.Button
                name='pluscircle'
                onPress={pressHandler}
            >
                Add
            </AntDesign.Button>
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
        width: '65%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab'
    }
})
