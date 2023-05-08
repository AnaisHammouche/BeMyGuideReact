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

export async function axiosLogin(email, password) {
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
          return getTokenData;
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
  } catch (error) {
    console.log(error);
  }
}

export async function axiosUserIsBlind(email, token) {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
      token,
    )}`;
    await axios
      .get(`${baseUrl}/users/email/${email}`)
      .then(async function (response) {
        if (await response.data) {
          let getUserIsBlind = await response.data.blind;
          console.log('blind ?' + getUserIsBlind);
          return getUserIsBlind;
        }
        null;
      });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function axiosAuthUser() {
  axios.get(`${baseUrl}/users/test`).then(async function (response) {
    return;
  });
}
