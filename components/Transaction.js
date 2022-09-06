// complete

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text, Image,
    useColorScheme,
    View, TouchableOpacity
} from 'react-native';



const Transaction = () => {


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
                justifyContent: "flex-star t"
            }}>


                <Text style={{
                    color: "#ffffff",
                    height: "10%",
                    width: "100%",
                    fontSize: 20,
                    borderWidth: 0,
                    borderColor: "#ffffff",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    textAlign: "flex-start",
                    padding: 20,

                }}>May 10th, 2022</Text>


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
                        
                        <Text style={{ paddingHorizontal: 5 }}>Patient X annual checkup</Text>

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

                        
                        <Text style={{ paddingHorizontal: 5, }}>Patient X annual checkup </Text>

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

                        
                        <Text style={{ paddingHorizontal: 5 }}>Patient X annual checkup</Text>

                    </TouchableOpacity>

                </View>

                <Text style={{
                    color: "#ffffff",
                    height: "10%",
                    width: "100%",
                    fontSize: 20,
                    borderWidth: 0,
                    borderColor: "#ffffff",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    textAlign: "flex-start",
                    padding: 20,

                }}>August 10th, 2022</Text>


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
                        
                        <Text style={{ paddingHorizontal: 5 }}>Patient X annual checkup</Text>

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

                        
                        <Text style={{ paddingHorizontal: 5, }}>Patient X annual checkup </Text>

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

                        
                        <Text style={{ paddingHorizontal: 5 }}>Patient X annual checkup</Text>

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


export default Transaction;