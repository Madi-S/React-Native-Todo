import React, { useState } from 'react'
import { View, Modal, StyleSheet, TextInput, Alert } from 'react-native'

import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({ visible, onCancel, onSave, value }) => {
    const [title, setTitle] = useState(value)

    const saveHanlder = () => {
        if (title.trim()) {
            onSave(title)
        } else {
            Alert.alert('Error', 'Todo title cannot be blank!')
            setTitle(value)
        }
    }

    const cancelHandler = () => {
        onCancel()
    }

    return (
        <Modal animationType='slide' transparent={false} visible={visible}>
            <View style={styles.wrapper}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    autoFocus={true}
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Enter todo title ...'
                />
                <View style={styles.buttons}>
                    <AppButton
                        onPress={cancelHandler}
                        color={THEME.DANGER_COLOR}
                    >
                        Cancel
                    </AppButton>
                    <AppButton onPress={saveHanlder}>Save</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
