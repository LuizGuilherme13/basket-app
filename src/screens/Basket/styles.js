import React from "react"
import { StyleSheet, Dimensions } from "react-native"

const SCREEN_WIDTH = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    imageTop:{
        width: '100%',
        height:( 257 / 180) * (SCREEN_WIDTH / 1.3) ,
    },
    productContainer:{
        paddingHorizontal: 16,
        paddingVertical: 8
    }, 
})