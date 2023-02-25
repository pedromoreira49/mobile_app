import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { datas } from '../data/Users'
import { Avatar, ListItem } from '@rneui/base';
import { Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont()

export default props => {

  function confirmUserDelete(item){
    Alert.alert('Excluir usuário', 'Deseja excluir este usuário?', [
      {
        text: 'sim',
        onPress(){
          console.warn('delete', item.nome)
        }
      },
      {
        text: 'não'
      }
    ])
  }

  function getActions(item){
    const btnEdit = () => {
      return (
        <>
          <Button
          onPress={() => props.navigation.navigate('UserForm', item)}
          type='clear'
          icon={<Icon name='edit' size={25} color='orange'/>}
          />
        </>
      )
    }

    const btnDelete = () => {
      return (
        <>
          <Button
          onPress={() => confirmUserDelete(item)}
          type='clear'
          icon={<Icon name='delete' size={25} color='red'/>}
          />
        </>
      )
    }

    const buttons = [{element: btnEdit}, {element: btnDelete}]

    return buttons
  }

  function getDatas({ item }){
    return (
      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{
            uri: item.avatar
          }}
          onPress={() => props.navigation.navigate('UserForm')}
        />
        <ListItem.Content>
          <ListItem.Title>{item.nome}</ListItem.Title>
          <ListItem.Subtitle>{item.username}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.ButtonGroup 
            buttons={getActions(item)}
          />
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList 
        keyExtractor={item => item.id}
        data={datas}
        renderItem={getDatas}
      />
    </View>
  )
}
