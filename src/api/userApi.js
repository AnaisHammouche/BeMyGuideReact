import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

let baseUrl = process.env.BASE_URL;

// Fonction pour s'inscrire avec une requête POST
export async function axiosRegister(
  gender,
  lastName,
  firstName,
  email,
  password,
  isBlind,
  phoneNumber,
  navigation,
) {
  try {
    const response = await axios.post(`${baseUrl}/auth/register`, {
      gender: gender,
      lastname: lastName,
      firstname: firstName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      isBlind: isBlind,
    });
    const tokenData = JSON.stringify(response.data.token);
    await AsyncStorage.setItem('Token', tokenData);
    if (tokenData != null) {
      Alert.alert('Bienvenue ' + firstName + ', ravis de vous compter parmi nous.');
      console.log('tokenData: ', tokenData);
      navigation.navigate('FormRouteBlind', {userIsBlind: isBlind});
    }
  } catch (error) {
    if (error.name === 'AxiosError') {
      console.log('error.name : ' + error.name);
      Alert.alert(
        "Vous n'êtes pas connecté à internet, veuillez vérifier votre réseau."
      );
    } else {
      Alert.alert('erreur : ' + JSON.stringify(error.name));
    }
  }
}


// Fonction pour se connecter avec une requête POST
export async function axiosLogin(email, password) {
  return await axios
    .post(`${baseUrl}/auth/authenticate`, {
      email: email,
      password: password,
    })
    .then(async function (response) {
      if (response.status == '200') {
        const tokenData = JSON.stringify(response.data.token);
        await AsyncStorage.setItem('Token', tokenData);
        const getTokenData = AsyncStorage.getItem('Token');
        console.log(response);
        return getTokenData;
      }

      if (response.status == '403') {
        Alert.alert("Mot de passe ou nom d'utilisateur invalide.");
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

// Fonction pour vérifier si l'utilisateur est aveugle avec une requête GET
export async function axiosUserIsBlind(email, token) {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
      token,
    )}`;
    return await axios
      .get(`${baseUrl}/users/email/${email}`)
      .then(async function (response) {
        if (await response.data) {
          return JSON.parse(await response.data.blind);
        }
        null;
      });
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Fonction pour récupérer le profil de l'utilisateur avec une requête GET
export async function axiosProfile(token, id) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
    token,
  )}`;
  return await axios
    .get(`${baseUrl}/users/${id}`)
    .then(async function (response) {
      if (await response.data) {
        console.log('data profile ' + JSON.stringify(response.data));
        return response.data;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

// Fonction pour récupérer l'utilisateur authentifié avec une requête GET
export async function axiosAuthUser(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
    token,
  )}`;
  return await axios
    .get(`${baseUrl}/users/authuser`)
    .then(async function (response) {
      if (await response.data) {
        console.log('data profile ' + JSON.stringify(response.data));
        return response.data;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export  async function axiosNumberOfRoutesDone(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
    token,
  )}`;
  return await axios
  .get(`${baseUrl}/routes/routesDone`)
  .then(async function (response){
    if (response.data != null){
      return response.data;
    }
  })
  .catch(error => {
    console.error(error);
  });
}
