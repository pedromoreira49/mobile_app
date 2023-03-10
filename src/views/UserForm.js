import React, { useContext, useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {})

  const { dispatch } = useContext(UsersContext)

  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput 
        style={style.input}
        onChangeText={nome => setUser({...user, nome})}
        placeholder="Informe o nome"
        value={user.nome}
      />
      <TextInput 
        style={style.input}
        onChangeText={username => setUser({...user, username})}
        placeholder="Informe o nome"
        value={user.username}
      />
      <TextInput 
        style={style.input}
        onChangeText={avatar => setUser({...user, avatar})}
        placeholder="Informe o nome"
        value={user.avatar}
      />
      <Button 
        title='Salvar'
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user
          })
          navigation.goBack()
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    padding: 12
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
  }
})
