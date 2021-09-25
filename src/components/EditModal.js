import React from 'react'
import { View, Modal, StyleSheet, TextInput, Button } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCancel }) => {
    return (
        <Modal animationType='slide' transparent={false} visible={visible}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    autoFocus={true}
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Enter todo ...'
                />
                <View style={styles.buttons}>
                    <Button
                        title='Cancel'
                        onPress={onCancel}
                        color={THEME.DANGER_COLOR}
                    />
                    <Button title='Save' />
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
