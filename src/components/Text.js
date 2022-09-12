import React from "react";
import { StyleSheet, Text as TextReactNative } from "react-native";

export function Text({ children, style }){
    let textStyle = style?.fontWeight === "bold" ? styles.textBold : styles.textRegular

    return <TextReactNative style={[style, textStyle]}>{ children }</TextReactNative>
}

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },

    textBold:{
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})