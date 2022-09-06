/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
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
 import Startup from './components/Startup';
 import Login from './components/Login';
 import CreateAccount from './components/CreateAccount';
import Menu from './components/Menu';
import PatientSearch from './components/PatientSearch';
import AccountView from './components/AccountView';
import Messages from './components/Messages';
import Transaction from './components/Transaction';

 
 
 
 const App: () =>Node = () => {
 
 
   return (
     <CreateAccount/>
   );
 };
 
 
 export default App;
 