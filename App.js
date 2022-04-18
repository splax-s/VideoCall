/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View 
} from 'react-native';

import ContactsScreen from './Screens/ContactsScreen';
import CallingScreen from './Screens/CallingScreen';
import IncomingCallScreen from './Screens/IncomingCallScreen';
import OnCallingScreen from './Screens/OnCallingScreen';
import Index from './Navigation/index'



const App = () => {

  return (
    <>
      <StatusBar barStyle={'dark-content'}/>
      <Index/>
    </>
  ); 
};

const styles = StyleSheet.create({
  
});

export default App;
