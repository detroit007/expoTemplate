import React, { useCallback, useEffect, useRef, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import BottomTab from './BottomTab';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainStack = () =>{
    const Stack = createStackNavigator();
    const loginState = useSelector(state => state.root);
    const [ loginUser, setLoginUser ] = useState(undefined)

    const {login} = loginState ;

    const getData = useCallback(async()=>{
        const data = await AsyncStorage.getItem("user_data");
        const user = data != null ? JSON.parse(data) : null;
        user === null ? setLoginUser(login) : setLoginUser(user.login)
    }, [AsyncStorage])
    
    useEffect(()=>{
        getData()
    }, [getData])

    return(
        <NavigationContainer>
            <Stack.Navigator>
               { !loginUser ?
                <Stack.Screen
                options={{
                    headerShown: false
                }}
                    name="Login"
                    component={LoginScreen}
                /> :
                <Stack.Screen
                options={{
                    headerShown: false
                }}
                    name="Home"
                    component={BottomTab}
                />
            }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;