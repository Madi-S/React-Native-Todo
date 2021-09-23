import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = (props) => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} />
            <Button title='Add' />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab'
    }
})
