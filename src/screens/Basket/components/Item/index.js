import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "../../../../components/Text";

export function Item({item : {name, image}}){
    return(
        <>
            <View style={styles.container} >
                <Image source={ image } style={styles.img}/>
                <Text style={styles.text}>{ name }</Text>
            </View>      
        </>
    )      
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
        paddingVertical:8,
        marginHorizontal:16,

    },
    img:{
        width: 60,
        height: 60,
        marginRight: 15,
        marginVertical: 5
    },
    text:{
        fontSize: 16,   
    }
})