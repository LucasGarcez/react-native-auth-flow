import React from 'react';
import {Button, Text, View} from 'react-native';

export const SignInScreen = () => {
  const logOut = () => {
    //get auth here
  };

  return (
    <View>
      <Text>HOME SCREEN</Text>
      <Button title="log out" onPress={logOut} />
    </View>
  );
};
