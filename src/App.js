import React, { Component } from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/login';
import Menu from './views/menu';

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50, marginLeft: 160}}
      source={{ uri: 'https://img2.gratispng.com/20180724/vbc/kisspng-test-case-logo-software-testing-engineering-use-ca-5b57f03d5612b1.1497376915324897893526.jpg' }}
    />
  );
}

const Stack = createNativeStackNavigator();

export default class App extends Component {
	render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerTitle: props => <LogoTitle { ...props }/>,
          headerBackVisible: false
        }}>
          <Stack.Screen name='Login' component={ Login } options={{ title:''}}/>
          <Stack.Screen name='Menu' component={ Menu}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

