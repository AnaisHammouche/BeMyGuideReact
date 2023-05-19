import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AppNavigator from '../src/components/navigators/AppNavigator';
import Tabs from './components/navigators/BottomTabNavigator';
import {axiosAuthUser, axiosLogin} from './api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './views/loading';

const MainScreen = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //const {token} = route.params;

  useEffect(() => {
    async function fetchUser() {
      await AsyncStorage.clear();
      await axiosAuthUser();
      const getTokenData = await AsyncStorage.getItem('Token');
      if (getTokenData) {
        // Appel API pour récupérer l'utilisateur
        const userData = await axiosLogin();
        console.log('token login :' + getTokenData);
        // et stocker les informations dans l'état local.
        setUser(userData);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <View>{user ? <AppNavigator /> : <Tabs />}</View>;
};

export default MainScreen;
