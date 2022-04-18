/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import {Voximplant} from 'react-native-voximplant';
import {useNavigation} from '@react-navigation/core'

const LoginScreen = () => {

    const navigation = useNavigation()
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const voximplant = Voximplant.getInstance();
    


    useEffect(() => {
        const connectVoximplant = async () => { 
            const clientState = await voximplant.getClientState(); 
            console.log(clientState)
            if (clientState === Voximplant.ClientState.DISCONNECTED) { 
              await voximplant.connect(); 
            } else if (clientState === Voximplant.ClientState.LOGGED_IN) { 
              navigation.reset({index: 0, routes: [{name: 'Contacts'}]}); 
              return; 
            }
        }
        connectVoximplant();
    }, [voximplant, navigation]);

    


    const signIn = async() =>{
        try { 
            const work = await voximplant.login( 
              `${userName}@video.splax.voximplant.com`, 
              password, 
            ); 
            console.log(work)
            navigation.reset({index: 0, routes: [{name: 'Contacts'}]}); 
          } catch (e) { 
              console.log(e)
            Alert.alert(e.name, `Error code: ${e.code}`); 
          } 
          
    };      

  return (
    <View style={styles.page}>
      <TextInput value={userName} autoCapitalize="none" style={styles.input} placeholder="username" onChangeText={setUserName} placeholderTextColor={'grey'}/>
      <TextInput value={password} secureTextEntry style={styles.input} placeholder="password" onChangeText={setPassword} placeholderTextColor={'grey'}/>

      <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    page:{
        padding: 10,
        alignItems: 'stretch',
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'dodgerblue',
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
})