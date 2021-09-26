import React from 'react'
import {
    View,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native'

import { THEME } from '../../theme'
import { AppTextBold } from './AppTextBold'

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
    const TouchableWrapper =
        Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return (
        <TouchableWrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{ ...styles.default, backgroundColor: color }}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </TouchableWrapper>
    )
}

const styles = StyleSheet.create({
    default: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
})
