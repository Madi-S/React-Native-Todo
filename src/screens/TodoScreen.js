import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { THEME } from '../theme.js'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal.js'

export const TodoScreen = ({ todo, goBack, removeTodo, saveTodo }) => {
    const [modal, setModal] = useState(false)

    const removeTodoHandler = async () => {
        await removeTodo(todo.id)
    }

    const saveTodoHanlder = title => {
        saveTodo({ id: todo.id, title })
        setModal(false)
    }

    return (
        <View>
            <EditModal
                visible={modal}
                value={todo.title}
                onSave={saveTodoHanlder}
                onCancel={() => setModal(false)}
            />

            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit' onPress={() => setModal(true)} />
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
                        onPress={removeTodoHandler}
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
