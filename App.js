/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler'
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View,
  Platform,
  PermissionsAndroid 
} from 'react-native';

import ContactsScreen from './Screens/ContactsScreen';
import CallingScreen from './Screens/CallingScreen';
import IncomingCallScreen from './Screens/IncomingCallScreen';
import OnCallingScreen from './Screens/OnCallingScreen';
import Index from './Navigation/index'



const App = () => {

  const [permissionGranted, setPermissionGranted] = useState(false)

  const permissions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA,
  ]

  

  useEffect(() => { 
    const requestPermissions = async () => { 
      const granted = await PermissionsAndroid.requestMultiple(permissions); 
      const recordAudioGranted = 
        granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted'; 
      const cameraGranted = 
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted'; 
      if (!cameraGranted || !recordAudioGranted) { 
        Alert.alert('Permissions not granted'); 
      } else { 
        setPermissionGranted(true); 
      } 
    };

    if (Platform.OS === 'android') {requestPermissions()}   
    else {setPermissionGranted(true);} 
  }, []); 


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
