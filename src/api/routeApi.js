import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

// baseUrl is in the .env
let baseUrl = process.env.BASE_URL;

// linking the API for routes and the front via Axios

// To post a route
export async function AxiosRoute(
  fromStation,
  toStation,
  routeMateGender,
  routeParamsToken,
  navigation,
) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
    routeParamsToken,
  )}`;
  console.log('routeParamsToken form 1: ' + JSON.parse(routeParamsToken));

  axios
    .post(`${baseUrl}/routes/add`, {
      fromStation: fromStation,
      toStation: toStation,
      routeMateGender: routeMateGender,
      routeParamsToken,
      navigation,
    })

    // the promise we get
    .then(async function (response) {
      const getAsynTokenStorage = await AsyncStorage.getItem('Token');
      console.log('routeParamsToken async:' + JSON.parse(getAsynTokenStorage));
      if (
        (response.status = '200' && fromStation && toStation && routeMateGender)
      ) {
        const fromStationData = JSON.stringify(fromStation);
        console.log('fromstationPost : ' + fromStationData);
        const toStationData = JSON.stringify(toStation);
        console.log('tostationDataPost : ' + toStationData);
        const routeMateGenderData = JSON.stringify(routeMateGender);
        console.log('routeMateGender : ' + routeMateGenderData);

        return getAsynTokenStorage != null
          ? JSON.parse(getAsynTokenStorage)
          : null;
      }
    })

    // in case of error, we get it
    .catch(function (error) {
      if (!fromStation || !toStation) {
        console.log('champ vide');
        alert('erreur : ' + JSON.stringify(error));
        console.log('perdu ! ' + error);
      }
    });
}
[];

// Get a route
export async function AxiosRouteGet(
  fromStation,
  toStation,
  routeMateGender,
  routeParamsToken,
  navigation,
) {
  axios
    .get(`${baseUrl}/routes/matches`, {
      fromStation: fromStation,
      toStation: toStation,
      routeMateGender: routeMateGender,
      routeParamsToken,
      navigation,
    })
    .then(async function (response) {
      if (response.data) {
        const getAsynTokenStorage = await AsyncStorage.getItem('Token');
        console.log('routeParamsToken : ' + getAsynTokenStorage);
        navigation.navigate('Waiting', {token: getAsynTokenStorage});
        axios.post(`${baseUrl}/sendgrid`, {}).then(async function (response) {
          console.log('dans le post sendgrid');
        });
      }
    });
}
