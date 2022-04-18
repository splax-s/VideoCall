/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CallActionBox = () => {
    const [isCameraOn, setCameraOn] = useState(true);
    const [isMicOn, setMicOn] = useState(true);

    const onReverseCamera = () => {

    }

    const onToggleCamera = () => {
        setCameraOn(currentValue =>  !isCameraOn);
    }

    const onToggleMicrophone = () => {
        setMicOn(currentValue =>  !isMicOn);
    }

    const hangUp = () => {
        
    }

    
  return (
    <View style={styles.buttonsContainer}>
    <TouchableOpacity onPress={onReverseCamera} style={styles.iconButton}>
    <Ionicons name="ios-camera-reverse" size={30} color={'white'}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={onToggleCamera} style={styles.iconButton}>
    <MaterialCommunityIcons name={ isCameraOn ? 'video-off' : 'video'} size={30} color={'white'}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={onToggleMicrophone} style={styles.iconButton}>
    <MaterialCommunityIcons name={isMicOn ? 'microphone-off' : 'microphone'} size={30} color={'white'}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={hangUp} style={styles.iconButton1}>
    <MaterialIcons name="call-end" size={30} color={'white'}/>
    </TouchableOpacity>
</View>
  )
}

export default CallActionBox

const styles = StyleSheet.create({
    cameraPreview: {
        width: 100,
        height: 150,
        backgroundColor: '#ffff6e',
        position: 'absolute',
        right: 10,
        top: 100,
        borderRadius: 10,
    },
    buttonsContainer: {
        backgroundColor: '#333333',
        padding: 20,
        paddingBottom: 60,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
   },
   iconButton: {
       backgroundColor: '#4a4a4a',
       padding: 15,
       borderRadius: 50,
       alignItems: 'center',
   },
   iconButton1:{
       backgroundColor: 'red',
       padding: 15,
       borderRadius: 50,
       alignItems: 'center',
   },
   page:{
    height: '100%',
    backgroundColor: 'black',
   },
})