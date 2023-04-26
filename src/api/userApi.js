import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

let baseUrl = process.env.BASE_URL;

export async function postRegister(
  lastName,
  firstName,
  mail,
  password,
  isBlind,
  //gender,
  navigation,
) {
  axios
    .post(`${baseUrl}/auth/register`, {
      lastname: lastName,
      firstname: firstName,
      email: mail,
      password: password,
      isBlind: isBlind,
      //gender: gender,
    })
    .then(async function (response) {
      const tokenData = JSON.stringify(response.data.token);
      await AsyncStorage.setItem('Token', tokenData);
      if ((response.status = '200')) {
        const getTokenData = await AsyncStorage.getItem('Token');
        return getTokenData != null
          ? JSON.parse(getTokenData) &&
              navigation.navigate('FormRouteBlind', {token: getTokenData})
          : null;
      }
    })
    .catch(function (error) {
      Alert.alert('erreur : ' + JSON.stringify(error));
    });
}

export async function axiosLogin(email, password, navigation) {
  axios
    .post(`${baseUrl}/auth/authenticate`, {
      email: email,
      password: password,
      navigation,
    })
    .then(async function (response) {
      const tokenData = JSON.stringify(response.data.token);
      await AsyncStorage.setItem('Token', tokenData);
      if ((response.status = '200')) {
        const getTokenData = await AsyncStorage.getItem('Token');
        return getTokenData != null
          ? JSON.parse(getTokenData) &&
              navigation.navigate('FormRouteBlind', {token: getTokenData})
          : null;
      }
    })
    .catch(function (error) {
      Alert.alert('erreur : ' + JSON.stringify(error));
    });
}
