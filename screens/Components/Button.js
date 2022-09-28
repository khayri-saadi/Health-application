import React from "react";
import {Text, View, Button, StyleSheet,Pressable} from 'react-native'

const CustomButton = ({onPress , text, type='PRIMARY', bgColor ,fgColor})=> {
    return (
        <Pressable onPress={onPress} style={[styles.root,
         styles[`root_${type}`], 
         bgColor ? {backgroundColor : bgColor}  : {}]}>
            <Text style={[styles.text,
             styles[`text_${type}`],
             fgColor ? {color : fgColor } : {}]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text : {
        color : 'white',
        fontWeight : 'bold'
    },
    root: {
        width : '100%',
        padding : 15,
        marginVertical : 7,
        alignItems : 'center',
        borderRadius : 10
    },
    root_TERTIARY : {
     
    },
    root_PRIMARY : {
        backgroundColor : '#3b71f3',
    },
    root_SECONDARY : {
        borderColor : '#3b71f3',
        borderWidth : 2,

    },
    text_SECONDARY : {
        color : '#3b71f3'

    },
    text_TERTIARY :{
        color : 'grey'
    }
})
export default CustomButton;