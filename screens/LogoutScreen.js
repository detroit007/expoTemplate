import React from "react";
import {View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import { login } from "../store/slices/AuthSlice";

const LogoutScreen = ({ title, style}) =>{
    const dispatch = useDispatch();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.btnStyle, ...style}} activeOpacity={0.6}
                onPress={()=>{dispatch(login({}))}}
            >
                <Text style={styles.textStyle}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStyle :{
        backgroundColor: Colors.redLight
    },
    textStyle: {
        color: Colors.gray
    }
});

export default LogoutScreen;