import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

import {
  Button,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormRouteBlind = ({route, navigation}) => {
  const routeParamsToken = route.params.token;
  const [fromStation, setfromStation] = useState();
  const [toStation, setToStation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [routeMateGender, setRouteMateGender] = useState();

  const postRoute = useCallback(async (fromStation, toStation) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
      routeParamsToken,
    )}`;
    console.log('routeParamsToken form 1: ' + JSON.parse(routeParamsToken));

    axios
      .post('http://localhost:8080/api/v1/routes/add', {
        fromStation: fromStation,
        toStation: toStation,
        routeMateGender: routeMateGender
      })
      .then(async function (response) {
        const getAsynTokenStorage = await AsyncStorage.getItem('Token');
        console.log(
          'routeParamsToken async:' + JSON.parse(getAsynTokenStorage),
        );
        if ((response.status = '200' && fromStation && toStation && routeMateGender)) {
          const fromStationData = JSON.stringify(fromStation);
          console.log('fromstationPost : ' + fromStationData);
          const toStationData = JSON.stringify(toStation);
          console.log('tostationDataPost : ' + toStationData);
          const routeMateGender = JSON.stringify(routeMateGender);
          console.log('tostationDataPost : ' + toStationData);
          
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
   }, []);

  return (
    <SafeAreaView style={{marginTop: '50%'}}>
      <View>
        <Text>DÉPART</Text>
        <TextInput
          placeholder="Station de départ"
          keyboardType="default"
          value={fromStation}
          onChangeText={setfromStation}
          required
        />

        <Text>ARRIVÉE</Text>
        <TextInput
          placeholder="Station d'arrivée"
          keyboardType="default"
          value={toStation}
          onChangeText={setToStation}
          required
        />
        <Text>JOUR DE DÉPART</Text>
        <TextInput
          placeholder="Date"
          keyboardType="default"
          value={date}
          onChangeText={setDate}
        />
        <Text>HORAIRE DE DÉPART</Text>
        <TextInput
          placeholder="Horaire de départ"
          keyboardType="default"
          value={time}
          onChangeText={setTime}
        />
        <Text>Genre souhaité de l'accompagnant</Text>
        <RNPickerSelect
          placeholder={{label: "Genre souhaité de l'accompagnant", value: null}}
          onValueChange={(routeMateGender) => setRouteMateGender(routeMateGender)}
          items={[
            {label: 'Femme', value: 'FEMALE'},
            {label: 'Homme', value: 'MALE'},
            {label: 'Pas de préférence', value: ''},
          ]}
        />
      </View>
      <TouchableOpacity
        onPress={() => postRoute(fromStation, toStation)}
        onLongPress={() => console.log('pas de match désolé')}>
        <Text>Valider</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FormRouteBlind;
