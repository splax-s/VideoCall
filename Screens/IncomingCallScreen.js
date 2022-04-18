/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import bg from '../VideoCallAssets/images/wow.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const IncomingCallScreen = () => {
    const [onDecline, setOnDecline] = useState(false);
    const [onAccept, setOnAccept] = useState(false);

    const accept = ()=>{
        setOnAccept(true)
    };

    const decline = ()=>{
        setOnDecline(true)
    };
  return (
  <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
        <Text style={styles.name}>Splax</Text>
        <Text style={styles.phoneNumber}>WhatsApp Video...</Text>

        <View style={[styles.row, {marginTop: 'auto'}]}>
            <View style={styles.iconContainer}>
                <Ionicons style={styles.icon} name = "alarm" color={'white'} size={30}/>
                <Text style={styles.iconText}>Remind Me</Text>
            </View>
            <View style={styles.iconContainer}>
                <Feather style={styles.icon} name = "message-circle" color={'white'} size={30}/>
                <Text style={styles.iconText}>Message</Text>
            </View>
        </View>

        <View style={[styles.row]}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={decline} style={styles.iconButtonContainer}>
                <Feather name= "x" color={'white'} size={40} />
                </TouchableOpacity>
                <Text style={styles.iconText} >Decline</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={accept} style={styles.iconButtonContainer2}>
                <Feather name= "check" color={'white'} size={40}/>
                </TouchableOpacity>
                <Text style={styles.iconText} >Accept</Text>
            </View>
        </View>
    </ImageBackground>
  )
}

export default IncomingCallScreen

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 100,
        marginBottom: 15,
      },
      phoneNumber: {
          fontSize: 20,
          color: 'white',
      },
      bg:{
          flex: 1,
          alignItems: 'center',
          padding: 10,
          paddingBottom: '25%',
      },
      row:{
          width: '120%',
          flexDirection: 'row',
          justifyContent: 'space-around',
      },
      iconContainer:{
        alignItems: 'center',
        marginVertical: 20,
      },
      iconText:{
        color: 'white',
        marginTop: 10,
      },
      iconButtonContainer: {
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 50,
        margin: 10,
      },
      iconButtonContainer2:{
        backgroundColor: '#2e7bff',
        padding: 20,
        borderRadius: 50,
        margin: 10,
      }
});