import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const ServiceCard = ({source, title, style}) =>{
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
        width: 80,
        height: 80,
        borderRadius: 40,
    }, 
    textStyle: {
        textAlign: 'center'
    }
});

export default ServiceCard;