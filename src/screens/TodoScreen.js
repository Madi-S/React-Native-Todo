import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { THEME } from '../theme.js'
import { AppCard } from '../components/ui/AppCard'

export const TodoScreen = ({ todo, goBack }) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit' />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title='Back'
                        color={THEME.GREY_COLOR}
                        onPress={goBack}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Remove'
                        color={THEME.DANGER_COLOR}
                        onPress={() => console.log('On Remove')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 10,
        padding: 15
    }
})
