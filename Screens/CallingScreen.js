/* eslint-disable comma-dangle */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CallActionBox from '../Components/CallActionBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/core';

const CallingScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const user = route?.params?.user;

  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.backButton}>
      <Ionicons name = "chevron-back" color={'white'} size={25}/>
      </TouchableOpacity>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.phoneNumber}>Ringing +44 456 678 890</Text>
        </View>
       <CallActionBox/>
    </View>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: '#7b4e80',
    },
  cameraPreview: {
      
      flex: 1,
      alignItems: 'center',
      paddingTop: 10,
      paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 60,
    marginBottom: 15,
  },
  phoneNumber: {
      fontSize: 20,
      color: 'white',
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
  },backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 10,
  }
});
