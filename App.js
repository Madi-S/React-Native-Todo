import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import { MainLayout } from './src/MainLayout'
import { TodoState } from './src/context/todo/TodoState'
import { ScreenState } from './src/context/screen/ScreenState'

export default function App() {
    const [isLoading, setIsLoading] = useState(true)

    if (isLoading) {
        return (
            <AppLoading
                startAsync={loadApp}
                onError={console.warn}
                onFinish={() => setIsLoading(false)}
            />
        )
    }

    return (
        <ScreenState>
            <TodoState>
                <MainLayout />
            </TodoState>
        </ScreenState>
    )
}

async function loadApp() {
    await Font.loadAsync({
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
    })
}

const _styles = StyleSheet.create({
    container: {
        flex: 1, // means take all space
        // height: 200, // not recommended due to variety of resolutions
        flexDirection: 'column',
        backgroundColor: '#000',
        alignItems: 'center', // horizontal alignment (for column, vice versa for row direction)
        justifyContent: 'center' // vertical alignment (for column, vice versa for row direction)
    },
    text: {
        color: '#fff',
        fontSize: 26
    }
})
