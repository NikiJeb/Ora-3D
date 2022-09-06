import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

const CreateAccount = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
      }}>
      <View
        style={{
          height: '5%',
          width: '100%',
          backgroundColor: '#46FF33' /*green top one*/,
        }}
      />

      <View
        style={{
          height: '90%',
          width: '100%',
          backgroundColor: '#17215C',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: '#ffffff',
            height: 'auto',
            width: 'auto',
            fontSize: 50,
            borderColor: '#ffffff',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 10,
          }}>
          Ora-3D
        </Text>

        <View
          style={{
            borderWidth: 0,
            borderColor: '#ffffff',
            height: 'auto',
            width: '70%',
            marginTop: '-25%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 'auto',
              width: '100%',
              borderWidth: 2,
              padding: 5,
              backgroundColor: '#ffffff',
              borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/googleicon.png')}
            />
            <Text style={{paddingHorizontal: 5}}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 'auto',
              width: '100%',
              borderWidth: 2,
              padding: 5,
              backgroundColor: '#ffffff',
              borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/facebookicon.png')}
            />
            <Text style={{color: '#000000', paddingHorizontal: 5}}>
              Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 'auto',
              width: '100%',
              borderWidth: 2,
              padding: 5,
              backgroundColor: '#ffffff',
              borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/applicon.png')}
            />
            <Text style={{color: '#000000', paddingHorizontal: 5}}>
              Phone Number
            </Text>
          </TouchableOpacity>

          <View
            style={{
              padding: 10,
              borderWidth: 0,
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text
              style={{color: '#ffffff', paddingHorizontal: 10, fontSize: 13}}>
              Agree to two factor authentication
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              borderWidth: 0,
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text
              style={{color: '#ffffff', paddingHorizontal: 10, fontSize: 13}}>
              Recieve updates from Ora 3-D
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#ffffff'}}>Already have an account</Text>
          <TouchableOpacity>
            <Text style={{color: '#ffffff'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: '5%',
          width: '100%',
          backgroundColor: '#46FF33',
        }}></View>
    </View>
  );
};

export default CreateAccount;
