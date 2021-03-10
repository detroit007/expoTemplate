import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome5"
import Colors from "../constants/Colors";
import LogoutScreen from "../screens/LogoutScreen";

const BottomTab = ()=> {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: Colors.redLight,
                style: {
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderTopWidth: 0,
                    position: 'absolute',
                    elevation: 0 
                },
                
            }}
            initialRouteName="PAY"
            
        >
            <Tab.Screen name='HOME' component={HomeScreen} 
                options={{
                    tabBarIcon: ({color, size})=> <Icon name="home" size={size} color={color} />,
                }}
            
            />
            <Tab.Screen name='ORDERS' component={HomeScreen} 
                options={{
                    tabBarIcon: ({color, size})=> <Icon name="shopping-bag" size={size} color={color} />
                }}
            />
            <Tab.Screen name='PAY' component={HomeScreen} 
                options={{
                    tabBarIcon: ({color, size})=> <Icon name="hand-pointer" size={size} color={color} />
                }}
            />
            <Tab.Screen name='DB WALLET' component={HomeScreen} 
                options={{
                    tabBarIcon: ({color, size})=> <Icon name="wallet" size={size} color={color} />
                }}
            />
            <Tab.Screen name='ACCOUNT' component={LogoutScreen} 
                options={{
                    tabBarIcon: ({color, size})=> <Icon name="user" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;