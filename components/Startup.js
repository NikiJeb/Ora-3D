// complete


import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Startup = () => {


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
                justifyContent: "center"
            }}>


                <Text style={{
                    color: "#ffffff",
                    height: "auto",
                    width: "auto",
                    fontSize: 75,
                    borderColor: "#ffffff",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",

                }}>Ora-3D</Text>

                <Text style={{
                    color: "#ffffff",
                    height: "auto",
                    width: "auto",
                    fontSize: 13,
                    borderColor: "#ffffff",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",

                }}>New dimension of Oral Health Care</Text>

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


export default Startup;
