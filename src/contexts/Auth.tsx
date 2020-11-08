import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {AuthData, User, authService} from '../services/authService';

type AuthContextData = {
  user?: User;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const token = await AsyncStorage.getItem('@RNAuth:token');
      const user = await AsyncStorage.getItem('@RNAuth:user');

      if (token && user) {
        setData({token: token, user: JSON.parse(user)});
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async () => {
    const authData = await authService.signIn();

    await AsyncStorage.multiSet([
      ['@RNAuth:token', authData.token],
      ['@RNAuth:user', JSON.stringify(authData.user)],
    ]);

    setData(authData);
  };

  const signOut = async () => {
    await AsyncStorage.multiRemove(['@RNAuth:user', '@RNAuth:token']);
    setData(null);
  };

  return (
    <AuthContext.Provider value={{user: data?.user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthContext, AuthProvider, useAuth};
