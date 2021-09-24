import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import { Todo } from './../components/Todo'
import { AddTodo } from './../components/AddTodo'

export const MainScreen = ({ todos, addTodo, removeTodo }) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />

            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Todo todo={item} onLongPress={removeTodo} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
