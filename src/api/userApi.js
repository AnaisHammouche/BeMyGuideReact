import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

// baseUrl is in the .env
let baseUrl = process.env.BASE_URL;

// connection between the API for users and the front via Axios

// User registration
export async function axiosRegiter(
  firstName,
  lastName,
  email,
  password,
  isBlind,
  navigation,
) {
  axios
    .post(`${baseUrl}/auth/register`, {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      isBlind: isBlind,
    })
    // the promise we get
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
    // in case of error, we get it
    .catch(function (error) {
      Alert.alert('erreur : ' + JSON.stringify(error));
    });
}

// User login
export async function axiosLogin(email, password, navigation) {
  axios
    .post(`${baseUrl}/auth/authenticate`, {
      email: email,
      password: password,
    })
    // the promise we get
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
    // in case of error, we get it
    .catch(function (error) {
      Alert.alert('erreur : ' + JSON.stringify(error));
    });
}
