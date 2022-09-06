
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text, Image,
    useColorScheme,
    View, TouchableOpacity
} from 'react-native';
import MyTab from './BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const AccountView = () => {


    return (
        <View style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "100%"
        }}>

            <View style={{
                height: "5%",
                width: "100%",
                backgroundColor: "#46FF33" /*green top one*/
            }} />


            <View style={{
                height: "90%",
                width: "100%",
                backgroundColor: "#17215C",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-around"
            }}>



                <View style={{
                    borderWidth: 0, borderColor: "#ffffff", height: "70%",
                    width: "100%", flexDirection: "column", justifyContent: "space-between",
                    alignItems: "center",
                }}>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "75%",
                        borderWidth: 2,
                        padding: 50,
                        backgroundColor: "#ffffff",
                        borderRadius: 20,
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        
                        <Text style={{ paddingHorizontal: 5 }}>Monthly Earnings</Text>
                        <Text style={{ paddingHorizontal: 5 }}>$1234.50</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        height: "auto",
                        width: "75%",
                        borderWidth: 2,
                        padding: 70,
                        backgroundColor: "#ffffff",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                        

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "75%",
                        borderWidth: 2,
                        padding: 120,
                        backgroundColor: "#ffffff",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                        
                        

                    </TouchableOpacity>

                    

                </View>




            </View>


            <View style={{
                height: "5%",
                width: "100%",
                backgroundColor: "#46FF33"
            }}>

            </View>

                        <MyTab/>

        </View>
    );
};


export default AccountView;
