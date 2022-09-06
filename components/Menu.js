// complete just have to finish lines


import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text, Image,
    useColorScheme,
    View, TouchableOpacity
} from 'react-native';



const Menu = () => {


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
                    height: "auto",
                    width: "auto",
                    fontSize: 50,
                    borderColor: "#ffffff",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    textAlign: "center",
                    padding: 50,

                }}>Menu</Text>


                <View style={{
                    borderWidth: 0, borderColor: "#ffffff", height: "auto",
                    width: "100%", flexDirection: "column", justifyContent: "space-evenly",
                    alignItems: "flex-start",
                }}>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "70%",
                        padding: 20,
                        backgroundColor: "#17215C",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                        
                        <Text style={{ color: "#ffffff" , paddingHorizontal: 10 }}>Profile</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        height: "auto",
                        width: "70%",
                       
                        padding: 20,
                        backgroundColor: "#17215C",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>

                       
                        <Text style={{ color: "#ffffff", paddingHorizontal: 10, }}>Payment Method</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "70%",
                        
                        padding: 20,
                        backgroundColor: "#17215C",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>

                       
                        <Text style={{ color: "#ffffff", paddingHorizontal: 10 }}>Shipping Address</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "70%",
                        
                        padding: 20,
                        backgroundColor: "#17215C",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>

                       
                        <Text style={{ color: "#ffffff", paddingHorizontal: 10}}>Data Policies</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: "auto",
                        width: "70%",
                        
                        padding: 20,
                        backgroundColor: "#17215C",
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>

                       
                        <Text style={{ color: "#ffffff", paddingHorizontal: 10 }}>Help</Text>

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


export default Menu;
