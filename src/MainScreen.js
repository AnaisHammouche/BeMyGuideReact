import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AppNavigator from '../src/components/navigators/AppNavigator';
import Tabs from './components/navigators/BottomTabNavigator';
import {axiosAuthUser} from './api/UserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './views/Loading';

const MainScreen = () => {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  //const {token} = route.params;

  useEffect(() => {
    async function fetchUser() {
      await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
      const getTokenData = await AsyncStorage.getItem('Token');
      //await axiosAuthUser(getTokenData);
      if (getTokenData) {
        // Appel API pour récupérer l'utilisateur
        const userData = await axiosAuthUser();
        console.log('user ' + userData);
        console.log('token login :' + getTokenData);
        // et stocker les informations dans l'état local.
        setUser(userData);
        //return <View>{user ? <Tabs /> : <AppNavigator />}</View>;
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <View>{user ? <Tabs /> : <AppNavigator />}</View>;
};

export default MainScreen;
