import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

let baseUrl = process.env.BASE_URL;

export async function AxiosRoute(
  fromStation,
  toStation,
  routeMateGender,
  routeParamsToken, 
  navigation
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
      navigation
    })
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

    .catch(function (error) {
      if (!fromStation || !toStation) {
        console.log('champ vide');
        alert('erreur : ' + JSON.stringify(error));
        console.log('perdu ! ' + error);
      }
    });

  // axios
  //   .get('http://localhost:8080/api/v1/routes/matches', {
  //     fromStation: fromStation,
  //     toStation: toStation,
  //     routeMateGender: routeMateGender
  //   })
  //   .then(
  //     function (response) {
  //       if (response.data) {
  //         navigation.navigate('Waiting');
  //         console.log('dans response data get');
  //         axios
  //           .post('http://localhost:8080/api/v1/sendgrid', {})
  //           .then(async function (response) {
  //             console.log('dans le post sendgrid');
  //           });
  //       }
  //     }

  // const getAsynTokenStorage = AsyncStorage.getItem('Token');
  //  const fromStationData = fromStation;
  //  console.log('fromstationGet : ' + fromStationData);
  // const toStationData = toStation;
  //  console.log('tostationDataaGet : ' + toStationData );
  // return getAsynTokenStorage != null ? JSON.parse(getAsynTokenStorage) && navigation.navigate('Match', { fromStation: fromStationData, toStation: toStationData, token: getAsynTokenStorage }) : null;

  // } else {
  //   navigation.navigate('Waiting')
  // }
  //  console.log(response.data[0]['fromStation'] + response.data[0]['fromStation'] )

  //         .catch(function (error) {
  //           if (!response.data || response.data == null) {
  //             console.log('get erreur reponse vide ou null !');
  //           } else {
  //             console.log('get erreur !');
  //             alert('erreur : ' + JSON.stringify(error));
  //             console.log('perdu ! ' + error);
  //           }
  //         }),
  //     );
}
[];
