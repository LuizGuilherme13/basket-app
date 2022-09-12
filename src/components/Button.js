import React from "react";
import { TouchableOpacity } from "react-native";

export function Button({ children, ...rest}){
   return(
        <TouchableOpacity style={{
            width: '50%',
            borderRadius: 8,
            alignItems:'center',
            justifyContent:'center',
            ...rest,
        }}>
            { children }
        </TouchableOpacity>
   )
}