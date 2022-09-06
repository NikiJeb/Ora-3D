import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text, Image,
    useColorScheme,
    View, TouchableOpacity
} from 'react-native';



const Messages = () => {


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
                justifyContent: "flex-start"
            }}>


                <Text style={{
                    color: "#ffffff",
                    height: "25%",
                    width: "100%",
                    fontSize: 50,
                    borderWidth: 0,
                    borderColor: "#ffffff",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    textAlign: "flex-start",
                    padding: 20,

                }}>Messages</Text>


                <View style={{
                    borderWidth: 0, borderColor: "#ffffff", height: "auto",
                    width: "100%", flexDirection: "column", justifyContent: "space-around",
                    alignItems: "center",
                }}>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "90%",
                        borderWidth: 2,
                        padding: 20,
                        backgroundColor: "#ffffff",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                        <Image style={{ width: 30, height: 30, }} source={require('../assets/profile.png')} />
                        <Text style={{ paddingHorizontal: 5 }}>Patient #1</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        height: "auto",
                        width: "90%",
                        borderWidth: 2,
                        padding: 20,
                        backgroundColor: "#ffffff",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>

                        <Image style={{ width: 30, height: 30, }} source={require('../assets/profile.png')} />
                        <Text style={{ paddingHorizontal: 5, }}>Patient #2</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "90%",
                        borderWidth: 2,
                        padding: 20,
                        backgroundColor: "#ffffff",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>

                        <Image style={{ width: 30, height: 30, }} source={require('../assets/profile.png')} />
                        <Text style={{ paddingHorizontal: 5 }}>Ora-3D Support</Text>

                    </TouchableOpacity>

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


export default Messages;