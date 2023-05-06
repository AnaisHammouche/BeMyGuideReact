import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

let baseUrl = process.env.BASE_URL;

export async function axiosRegister(
  lastName,
  firstName,
  email,
  password,
  isBlind,
  navigation,
) {
  axios
    .post(`${baseUrl}/auth/register`, {
      lastname: lastName,
      firstname: firstName,
      email: email,
      password: password,
      isBlind: isBlind,
    })
    .then(async function (response) {
      const tokenData = JSON.stringify(response.data.token);
      await AsyncStorage.setItem('Token', tokenData);
      if (tokenData != null) {
        JSON.parse(tokenData);
        alert('Bienvenue ' + firstName + ', ravis de vous compter parmi nous.');
        navigation.navigate('FormRouteBlind', {token: tokenData});
        return;
      }
    })

    .catch(function (error) {
      if (error.name === 'AxiosError') {
        Alert.alert(
          "Vous n'êtes pas connecté à internet, veuillez vérifier votre réseau.",
        );
      } else {
        Alert.alert('erreur : ' + JSON.stringify(error.name));
      }
    });
}

export async function axiosLogin(email, password, navigation) {
  try {
    const responseUser = await axios
      .post(`${baseUrl}/auth/authenticate`, {
        email: email,
        password: password,
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
        if (error.name === 'AxiosError') {
          Alert.alert(
            "Vous n'êtes pas connecté à internet, veuillez vérifier votre réseau.",
          );
        } else {
          Alert.alert('erreur : ' + JSON.stringify(error.name));
        }
      });
    const userStatus = responseUser.isBlind;

    if (userStatus === 'true') {
      console.log('Blind');
    } else if (userStatus === 'false') {
      console.log('Sighted');
    } else {
      console.log('Pas connus');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function axiosUser(email, password, isBlind, navigation) {
  try {
    const responseUser = await axios
      .get(`${baseUrl}/users/email/{email}`, {
        email: email,
        password: password,
        isBlind: isBlind,
        navigation,
      })
      .then(async function (response) {
        const getUserInfo = await AsyncStorage.getItem('userInfo');
        return JSON.parse(getUserInfo);
      });
    console.log(responseUser);
    //const postData = {data: responseUser.data};
    /* const postResponse = await axios
      .post(`${baseUrl}/auth/authenticate`, postData)
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
        if (error.name === 'AxiosError') {
          Alert.alert(
            "Vous n'êtes pas connecté à internet, veuillez vérifier votre réseau.",
          );
        } else {
          Alert.alert('erreur : ' + JSON.stringify(error.name));
        }
      }); */
    //console.log(postResponse.data);
  } catch (error) {
    console.error(error);
  }
}
