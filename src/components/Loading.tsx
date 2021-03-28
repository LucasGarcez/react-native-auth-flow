import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator color={'#000'} animating={true} size="small" />
    </View>
  );
};
