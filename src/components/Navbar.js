import React from 'react'
import { View, StyleSheet } from 'react-native'

import { THEME } from '../theme.js'
import { AppTextBold } from '../components/ui/AppTextBold'

export const Navbar = ({ title = 'Todo App' }) => {
    return (
        <View style={styles.navbar}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
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
