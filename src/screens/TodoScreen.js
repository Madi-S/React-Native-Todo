import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { THEME } from '../theme.js'
import { AppCard } from '../components/ui/AppCard'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
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
                <AppText style={styles.title}>{todo.title}</AppText>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
                        <AntDesign name='back' size={20} color='#fff' />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.DANGER_COLOR}
                        onPress={removeTodoHandler}
                    >
                        <FontAwesome name='remove' size={20} color='#fff' />
                    </AppButton>
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
        width: Dimensions.get('window').width / 4
        // width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20
    },
    card: {
        padding: 15,
        marginBottom: 10
    }
})
