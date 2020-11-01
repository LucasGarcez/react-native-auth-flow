import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../screens/SignInScreen';
//import {ForgetPasswordScreen} from 'src/screens/ForgetPasswordScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={SignInScreen} />
      {/* <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} /> */}
    </Stack.Navigator>
  );
};
