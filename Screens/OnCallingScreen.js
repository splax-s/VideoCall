/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CallActionBox from '../Components/CallActionBox';

const OnCallingScreen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.cameraPreview}/>
       <CallActionBox />
    </View>
  )
}

export default OnCallingScreen

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