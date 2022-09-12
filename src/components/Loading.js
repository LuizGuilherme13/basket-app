import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Loading() {
    return (
        <View style={styles.container}>
            <Text style={{color: '#FFF'}}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        height: '100%',
        width: '100%'     
    }
})