import React from "react";
import { Image, StyleSheet, View, FlatList } from "react-native";
import { Separator } from "../../components/Separator";
import { Text } from "../../components/Text";

export function Items({hortifruti}){
   
    const renderItem = ({item : {name, image}}) => {
        return(
            <View style={styles.container} >
                <Image source={ image } style={styles.img}/>
                <Text style={styles.text}>{ name }</Text>
            </View>
        )
    }
   
    return(
        <>
            <Separator>
                <Text style={styles.title}>Basket items</Text>
            </Separator>

            <FlatList
                data={hortifruti}
                renderItem={renderItem}
                keyExtractor={({ name }) => name}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
    },
    title:{ 
        paddingVertical: 8,
        fontSize: 14,
        alignSelf: 'center',   
    },
    img:{
        width: 70,
        height: 70,
        marginRight: 15,
        marginVertical: 5
    },
    text:{
        fontSize: 16,
    }
})