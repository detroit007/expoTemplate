import React, { useCallback, useEffect } from 'react';
import { KeyboardAvoidingView, ScrollView, View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView, Platform} from 'react-native'
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/slices/AuthSlice';
import AdCard from '../components/AdCard';
import ServiceCard from '../components/ServiceCard';
import { getDashboardData } from '../store/slices/DashboardSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ()=>{
    const homeState = useSelector(state=> state.root)
    const dashboardState = useSelector(state => state.dashboard)
    const dispatch = useDispatch();

    let categories = [];
    for(const key in dashboardState ){
        categories.push(dashboardState[key]);
    }

    const getDashboardDataHandler = useCallback(async(id) =>{
        dispatch(getDashboardData(id))
    },[getDashboardData])

    useEffect(()=>{
        getDashboardDataHandler(homeState.id);
    }, [getDashboardDataHandler, homeState])

    console.log(categories);
    
return(
    <KeyboardAvoidingView behavior='height'  style={{flex: 1}}>
        <SafeAreaView style={styles.screen}>
           <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerBox}>

                    <View style={styles.searchbar}>
                        <TouchableOpacity style={styles.searchBtn}
                            onPress={()=>{ 
                                dispatch(login(false))
                            }}
                        >
                            <Icon name="circle" size={35} color="black" />
                            <Text style={styles.searchBtnText}>pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.searchInputBox} activeOpacity={0.6}>
                            <Icon name="search" style={styles.searchIcon} size={25} color={Colors.gray} />
                            <Text style={styles.input}> Search within DBazzar
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userDetailBox}>
                        <View style={styles.userDetailBoxRow}>
                            <Text><Text style={styles.boldText}>Hi John,</Text> you have</Text>
                            <Text style={styles.boldText} >RM 1285.21</Text>
                        </View>
                        <View style={styles.userDetailBoxRow}>
                            <Text style={styles.boldText}>214,674</Text>
                            <Text style={styles.boldText}>0 unused vouchers</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <ServiceCard 
                        source="https://cdn2.vectorstock.com/i/1000x1000/47/81/massive-sale-social-media-promo-ad-poster-banner-vector-30904781.jpg"
                        title="Food"
                        style={styles.serviceBox}
                    />
                    <ServiceCard 
                        source="https://cdn4.vectorstock.com/i/1000x1000/88/83/geometric-shape-ad-promo-banner-vector-9548883.jpg"
                        title="Food"
                        style={styles.serviceBox}
                    />
                    <ServiceCard 
                        source="https://cdn2.vectorstock.com/i/1000x1000/47/81/massive-sale-social-media-promo-ad-poster-banner-vector-30904781.jpg"
                        title="Food"
                        style={styles.serviceBox}
                    />
                    <ServiceCard 
                        source="https://cdn4.vectorstock.com/i/1000x1000/88/83/geometric-shape-ad-promo-banner-vector-9548883.jpg"
                        title="Food"
                        style={styles.serviceBox}
                    />
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <ServiceCard 
                        source="https://cdn2.vectorstock.com/i/1000x1000/47/81/massive-sale-social-media-promo-ad-poster-banner-vector-30904781.jpg"
                        title="Food"
                        style={styles.serviceBox}
                    />
                    <ServiceCard 
                        source="https://cdn4.vectorstock.com/i/1000x1000/88/83/geometric-shape-ad-promo-banner-vector-9548883.jpg"
                        title="Food"
                        style={styles.serviceBox}
                    />
                    <ServiceCard 
                        source="https://cdn2.vectorstock.com/i/1000x1000/47/81/massive-sale-social-media-promo-ad-poster-banner-vector-30904781.jpg"
                        title="Food"
                        style={styles.serviceBox}
                    />
                    <ServiceCard 
                        source="https://cdn4.vectorstock.com/i/1000x1000/88/83/geometric-shape-ad-promo-banner-vector-9548883.jpg"
                        title="Food"
                        style={styles.serviceBox}
                    />
                
                </View>
            </View>
            <View style={styles.adContainer}>
                <AdCard
                    source="https://cdn2.vectorstock.com/i/1000x1000/47/81/massive-sale-social-media-promo-ad-poster-banner-vector-30904781.jpg"
                    title="Placeholder Promo"
                    style={styles.adBox}
                />
                <AdCard
                    source="https://cdn4.vectorstock.com/i/1000x1000/88/83/geometric-shape-ad-promo-banner-vector-9548883.jpg"
                    title="PlaceHolder Title"
                    style={styles.adBox}
                />
            </View>
           </ScrollView>
        </SafeAreaView>
    </KeyboardAvoidingView>
)

}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === "android" ? 25 : 0,
    },
    container: {
        flex: 1,
    },
    containerBox: {
        height: 200,
        backgroundColor: Colors.redLight,
        paddingHorizontal: 20,
    },
    searchbar: {
        width: "100%",
        height: 60,
        borderRadius: 5,
        overflow: "hidden",
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: Colors.white,
    },
    searchBtn: {
        backgroundColor: Colors.grayLight,
        paddingHorizontal: 10,
        paddingTop: 3,
        width: 55,
        height: 60
     },
     searchBtnText: {
        textAlign: "center",
     },
     searchInputBox: {
         justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
     },
     userDetailBox: {
         backgroundColor: Colors.white,
         borderRadius: 5
     },
     userDetailBoxRow: {
         flexDirection: "row",
         justifyContent: "space-between",
         margin: 10
     },
     boldText: {
         fontWeight: "bold",
         fontSize: 18
     },
     adContainer: {
         flexDirection: "row",
     },
     adBox: {
         marginHorizontal: 10
     },
     serviceBox: {
         margin: 5
     }
})

export default HomeScreen