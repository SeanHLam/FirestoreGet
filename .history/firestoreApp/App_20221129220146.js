import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from '../screens/Home';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
        screenOptions={{
          //headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Homescreen} 
        />
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}


