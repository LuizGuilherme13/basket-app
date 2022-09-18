import React from "react";
import { styles } from './styles'
import { Item } from "./components/Item";
import { Text } from "../../components/Text";
import { Details }  from "./components/Details";
import {Separator} from "../../components/Separator"
import { Image, View, FlatList } from "react-native";
import ImageTop from '../../../assets/img-basket.jpg'

export function Basket({details, items}){  
    return(
        <>
            <FlatList
                data={items.hortifruti}
                renderItem={Item}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() =>{
                    return(
                        <>
                            <Image source={ImageTop} style={styles.imageTop}/>
                            <View style={styles.productContainer}>
                                <Details {...details}/>
                            </View>
                            <Separator>
                                <Text style={styles.title}>Basket items</Text>
                            </Separator>
                        </>
                    )
                }}
            />               
        </>      
        
    )
}

