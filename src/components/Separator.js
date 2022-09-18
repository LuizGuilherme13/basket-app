import React from "react";
import { View } from "react-native";

export function Separator({children}){
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 16}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View style={{flex: 1}}>
                {children}
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
    )
}