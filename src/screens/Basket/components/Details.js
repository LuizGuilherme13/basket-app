import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text }  from "../../../components/Text";
import { Button } from "../../../components/Button";

export function Details({producer, product}){
    return(
        <>
            <Text style={styles.productTitle}>{product.title}</Text>
            
            <View style={styles.producerContainer}>
                <Image source={producer.logo} style={styles.producerLogo}/>
                <Text style={styles.producerName}>{producer.name}</Text>
            </View>

            <Text style={styles.productDescription}>{product.description}</Text>

            <View style={{
                flexDirection:'row', 
                justifyContent: 'space-between',
            }}>
                <Text style={styles.productValue}>{product.value}</Text>
                
                <Button backgroundColor={'green'} marginTop={8}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Button>
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    productTitle:{
        color: '#464646',
        fontSize: 24,
        lineHeight: 42,
        fontWeight: "bold",
    },
    producerContainer:{
        flexDirection:'row',
        paddingVertical: 8
    },
    producerLogo:{
        width: 32,
        height: 32
    },
    producerName:{
        fontSize: 14,
        lineHeight: 26,
        marginLeft: 10,
    },

    productDescription:{
        color:'#A3A3A3',
        fontSize: 14,
        lineHeight: 26
    },

    productValue:{
        color: '#2A9F85',
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8,
    },

    buttonText:{
        color:'#FFF',
        fontSize: 20, 
        fontWeight: 'bold', 
        lineHeight: 24
    }
})