import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
//import {useAuth} from 'src/hooks/auth';

export const Router = () => {
  const {token, loading} = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <ActivityIndicator color={'#000'} animating={true} size="small" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
