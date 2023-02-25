import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from '@rneui/themed'

import UserList from './views/UserList'
import UserForm from './views/UserForm'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()

Icon.loadFont()

export default props => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='UserList'
                screenOptions={screenOptions}
            >
                <Stack.Screen 
                    name='UserList'
                    component={UserList}
                    options={({ navigation }) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button 
                                    onPress={() => navigation.navigate('UserForm')}
                                    type='clear'
                                    icon={icon}
                                    
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name='UserForm'
                    component={UserForm}
                    options={{
                        title: "Formulário de Usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const icon = <Icon name='add' size={25} color='#fff' />

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
}
