import React from "react";
import {View , Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const AdCard = ({source, title, style}) =>{
    return(
        <TouchableOpacity style={{...styles.container, ...style}} activeOpacity={0.6}>
            <Image source={{uri: source}} style={styles.imgStyle} />
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    container:{
        padding: 5,
    },
    imgStyle: { 
        width: 160,
        height: 200,
        borderRadius: 10,
    }, 
    textStyle: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default AdCard;