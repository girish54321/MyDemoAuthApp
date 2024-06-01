import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/stack/screen/LoginScreen';
import HomeScreen from './src/stack/screen/HomeScreen';
import ContentScreen from './src/stack/screen/ContentScreen';
import AppScreenName from './src/appconst/ScreenName';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} initialRouteName={AppScreenName.LoginScreen}>
        <Stack.Screen name={AppScreenName.LoginScreen} component={LoginScreen} />
        <Stack.Screen name={AppScreenName.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={AppScreenName.ContentScreen} component={ContentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}