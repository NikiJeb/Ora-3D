//complete

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text, Image,
    useColorScheme,
    View, TouchableOpacity
} from 'react-native';



const Login = () => {


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


                <Text style={{
                    color: "#ffffff",
                    height: "auto",
                    width: "auto",
                    fontSize: 50,
                    borderColor: "#ffffff",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 10,

                }}>Ora-3D</Text>


                <View style={{
                    borderWidth: 0, borderColor: "#ffffff", height: "auto",
                    width: "100%", flexDirection: "column", justifyContent: "space-around",
                    alignItems: "center",
                }}>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "70%",
                        borderWidth: 0,
                        padding: 5,
                        backgroundColor: "#ffffff",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image style={{ width: 20, height: 20, }} source={require('../assets/googleicon.png')} />
                        <Text style={{ paddingHorizontal: 5 }}>Sign up with Google</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        height: "auto",
                        width: "70%",
                        borderWidth: 2,
                        padding: 5,
                        backgroundColor: "#3B5998",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                        <Image style={{ width: 20, height: 20, }} source={require('../assets/facebookicon.png')} />
                        <Text style={{ color: "#ffffff", paddingHorizontal: 5, }}>Sign up with Facebook</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "70%",
                        borderWidth: 2,
                        padding: 5,
                        backgroundColor: "#000000",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                        <Image style={{ width: 20, height: 20, }} source={require('../assets/applicon.png')} />
                        <Text style={{ color: "#ffffff", paddingHorizontal: 5 }}>Sign up with Apple</Text>

                    </TouchableOpacity>

                </View>


                <View style={{flexDirection: "row", justifyContent: "center", 
                    alignItems: "center"}}>
                    <Text style={{ color: "#ffffff" }}>Don't have an account?</Text>
                    <TouchableOpacity><Text style={{ color: "#ffffff" }}> Create</Text></TouchableOpacity>
                </View>



            </View>


            <View style={{
                height: "5%",
                width: "100%",
                backgroundColor: "#46FF33"
            }}>

            </View>

        </View>
    );
};


export default Login;
