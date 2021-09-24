import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export const TodoScreen = ({ todo, goBack }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <Button title='Back' onPress={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({})
