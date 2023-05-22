import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

let baseUrl = process.env.BASE_URL;

export async function AxiosRoute(
  fromStation,
  toStation,
  routeMateGender,
  dateRoute,
  startingTime,
  routeParamsToken,
  navigation,
) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
    routeParamsToken,
  )}`;
  console.log('routeParamsToken form 1: ' + JSON.parse(routeParamsToken));

  return await axios
    .post(`${baseUrl}/routes/add`, {
      fromStation: fromStation,
      toStation: toStation,
      routeMateGender: routeMateGender,
      dateRoute: dateRoute,
      startingTime: startingTime,
      routeParamsToken,
      navigation,
    })
    .then(async function (response) {
      const data = JSON.stringify(response.data);
      console.log('id route ' + response.data);
      if (data) {
        const fromStationData = JSON.stringify(fromStation);
        console.log('fromstationPost : ' + fromStationData);
        const toStationData = JSON.stringify(toStation);
        console.log('tostationDataPost : ' + toStationData);
        const routeMateGenderData = JSON.stringify(routeMateGender);
        console.log('routeMateGender : ' + routeMateGenderData);
        const dateRouteData = JSON.stringify(dateRoute);
        console.log('dateRoute : ' + dateRouteData);
        const startingTimeData = JSON.stringify(startingTime);
        console.log('startingTime : ' + startingTimeData);
        navigation.navigate('Waiting', {idRoute: data});
        return;
      }
    })
    .catch(function (error) {
      if (!fromStation || !toStation) {
        console.log('champ vide');
        Alert('erreur : ' + JSON.stringify(error));
        console.log('perdu ! ' + error);
      }
    });
}
[];


export async function AxiosListRoutes(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
    token,
  )}`;
  return await axios
    .get(`${baseUrl}/routes/auth/all`)
  .then(async function (response) {
      if (await response.data) {
        console.log('data axios ' + JSON.stringify(response.data));
        return response.data;
      }
    });
}

export async function AxiosRouteGet(
  fromStation,
  toStation,
  routeMateGender,
  dateRoute,
  startingTime,
  routeParamsToken,
  navigation,
) {
  axios
    .get(`${baseUrl}/routes/matches`, {
      fromStation: fromStation,
      toStation: toStation,
      routeMateGender: routeMateGender,
      dateRoute: dateRoute,
      startingTime: startingTime,
      routeParamsToken,
      navigation,
    })
    .then(response => {
    const data = response.data;
    console.log('match ' + JSON.stringify(data));
    return data;
    /* if (data) {
      const getAsyncTokenStorage = AsyncStorage.getItem('Token');
      console.log('routeParamsToken : ' + getAsyncTokenStorage);
      axios.post(`${baseUrl}/sendgrid`).then(async function (response) {
        console.log('dans le post sendgrid');
      });
    } */
  });
    

// export async function PostAxiosSendGrid (){
//     axios
//     .post(`${baseUrl}/sendgrid`, {})
//     .then(async function (response) {
//       console.log('dans le post sendgrid');
//     });

 }
