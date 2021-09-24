import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {THEME} from '../theme.js'

export const Navbar = ({ title = 'Todo App' }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 14
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
})
