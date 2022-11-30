import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator 
      initialRouteName='Home'
        screenOptions={{
          //headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}


