/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'
import dummyContact from '../VideoCallAssets/data/contacts.json'
import React, {useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/core'

const ContactsScreen = () => {

  const navigation = useNavigation()

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(dummyContact)

    useEffect(() => {
        const newContacts = dummyContact.filter((contact) => contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredContacts(newContacts)
    },[searchTerm])

    const callUser = user  => {
      navigation.navigate('Call', {user})
    }

  return (
    <View style={styles.page}>
        <TextInput value={searchTerm} onChangeText={setSearchTerm} style={styles.textInput} placeholder="Search..." placeholderTextColor={'grey'}/>
      <FlatList
      data={filteredContacts}
      renderItem={({item}) =>
      (
        <TouchableOpacity onPress={() => callUser(item)}>
          <Text style={styles.contactName}>{item.user_display_name}</Text>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={()=> (<Text style={styles.separator}/>)}
      />
      </View>
  )
};

export default ContactsScreen

const styles = StyleSheet.create({
      page:{
        padding: 15,
        backgroundColor: 'white',
        flex: 1,
      },
      contactName: {
        fontSize: 16,
        marginVertical: 10,
      },
      separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#f0f0f0',
      },
      textInput: {
          backgroundColor: '#f0f0f0',
          padding: 10,
          borderRadius: 5,
      },
})