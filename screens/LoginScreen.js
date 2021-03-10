import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import { KeyboardAvoidingView, ScrollView, View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import Regex from '../constants/Regex';
import { loginUser } from '../store/slices/AuthSlice';

const LoginScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('Enter valid Email');
    const [ password, setPassword] = useState('');
    const [PassErr, SetPassErr] = useState("Enter password")
    const [loader, setLoader] =useState(false);
    const dispatch = useDispatch();

    const state = useSelector(state=> state.root)

    const loginHandler = useCallback(() =>{
        if(email.length <= 0){
            alert(emailErr)
        }else if(!Regex.email.test(email)){
            alert(emailErr);
        }else if(password.length <= 0){
            alert(PassErr)
        }else{
            setLoader(true)
            dispatch(loginUser({email, password})).then((res)=>{
                if(res.payload.status === "1"){
                    setEmail('')
                    setPassword('')
                    setLoader(false)
                }
                
            })
        }
    }, [email, password, loginUser])

return(
    <KeyboardAvoidingView behavior='height'  style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
            <View style={styles.centered}>
                    <Text style={styles.loginTitle}>Login</Text>
                    <TextInput 
                        value={email}
                        autoCapitalize="none"
                        placeholder="Email"
                        style={styles.inputStyle}
                        onChangeText={(txt)=>{setEmail(txt)}}
                    />
                    <TextInput 
                        value={password}
                        placeholder="Password"
                        autoCapitalize="none"
                        style={styles.inputStyle}
                        onChangeText={(txt)=>{setPassword(txt)}}
                    />
                    <Text style={styles.forgetPass}>Forget Password?</Text>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={loginHandler}
                    >
                        { !loader ? <Text style={styles.loginBtnTxt}>Login</Text>:
                            <ActivityIndicator size="small" color={Colors.gray} />
                        }
                    </TouchableOpacity>
                </View>
        </ScrollView>

    </KeyboardAvoidingView>
)

}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    loginTitle: {
        alignSelf: 'flex-start',
        fontWeight: "bold",
        fontSize: 24,
        color: Colors.darkGray,
        marginTop: 50
    },
    inputStyle: {
        width: "100%",
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.darkGray,
        marginVertical: 20,
        paddingLeft: 10,
        
     },
     loginBtn: {
        backgroundColor: Colors.redLight,
        justifyContent: "center",
        alignItems: 'center',
        width: "97%",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 20
     },
     loginBtnTxt: {
         fontWeight: "bold",
         fontSize: 24,
         color: Colors.grayLight
     },
     forgetPass: {
        color: Colors.gray,
        alignSelf: "flex-end"
     }
})

export default LoginScreen