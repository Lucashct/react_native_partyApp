import React, { Component } from 'react';
import { Image, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/login';
import Menu from './views/menu';

const LogoTitle = () => {
  return (
    <View style={{ alignItems: 'center'}}>
    <Image
      style={{ width: 160, height: 40}}
      source={require('./assets/headerName.png')}
    />
    </View>
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
          <Stack.Screen name='Login' component={ Login } options={{ title:'', headerShown: false}}/>
          <Stack.Screen name='Menu' component={ Menu }/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

