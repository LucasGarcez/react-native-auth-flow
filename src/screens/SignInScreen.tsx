import React from 'react';
import {Button, Text, View} from 'react-native';

import {styles} from './styles';
import {useAuth} from '../contexts/Auth';

export const SignInScreen = () => {
  const auth = useAuth();
  const signIn = () => {
    auth.signIn();
  };

  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
};
