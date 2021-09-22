import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello Android</Text>
            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 26
    }
})
