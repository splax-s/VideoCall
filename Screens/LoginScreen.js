/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'

const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () =>{
        console.log('pressed')
    }
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