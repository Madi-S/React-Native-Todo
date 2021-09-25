import React from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'

import { Todo } from '../components/Todo'
import { AddTodo } from '../components/AddTodo'

export const MainScreen = ({ todos, openTodo, addTodo, removeTodo }) => {
    let content = (
        <View style={styles.imgWrapper}>
            <Image
                style={styles.img}
                source={require('../../assets/img/no-items.png')}
            />
        </View>
    )

    if (todos.length) {
        content = (
            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Todo
                        todo={item}
                        onPress={openTodo}
                        onLongPress={removeTodo}
                    />
                )}
            />
        )
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})
