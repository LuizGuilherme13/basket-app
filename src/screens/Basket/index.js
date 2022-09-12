import React from "react";
import { styles } from './styles'
import { Image, View, ScrollView } from "react-native";
import { Details }  from "./components/Details";
import ImageTop from '../../../assets/img-basket.jpg'
import { Items } from "../Items";

export function Basket({details, items}){  
    return(
        <ScrollView>
            <Image source={ImageTop} style={styles.imageTop}/>

            <View style={styles.productContainer}>
                <Details {...details}/>
                <Items {...items}/>
            </View>        
        </ScrollView>      
        
    )
}

