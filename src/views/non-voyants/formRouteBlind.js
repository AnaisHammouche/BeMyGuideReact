import React, { Component, useCallback, useContext, useEffect, useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import axios from 'axios';

import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const FormRouteBlind = ({ route, navigation }) => {

  const routeParamsToken = route.params.token;

  const [fromStation, setfromStation] = useState();
  const [toStation, setToStation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const postRoute = useCallback(async (fromStation, toStation) => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(routeParamsToken)}`;

    axios
      // (mettre son ip ici après le http://)
    //  .post("http://192.168.1.20:8080/api/v1/routes/add", {
      .post("http://localhost:8080/api/v1/routes/add", {
        fromStation: fromStation,
        toStation: toStation
})
      .then(async function (response) {
        if (response.status = "200") {
          const fromStationData = JSON.stringify(fromStation);
          console.log('fromstation : ' + fromStationData);
          
          const toStationData = JSON.stringify(toStation);
          console.log('tostationDataa : ' + toStationData );
        
          //  alert("reponse : " + JSON.stringify(response.data.token));
          console.log("c'est gagné ! ")
        
          navigation.navigate('Match', { fromStation: fromStationData, toStation: toStationData });
        }

      })
      .catch(function (error) {
        alert('erreur : ' + JSON.stringify(error));
        console.log("perdu ! " + error)
      });

  }, []);

  return (
    <SafeAreaView style={{marginTop: '50%'}}>
      <View >
       
        <Text>DÉPART</Text>
          <TextInput
          placeholder="Station de départ"
          keyboardType="default"
          value={fromStation}
          onChangeText={setfromStation}
        />

        <Text>ARRIVÉE</Text>
        <TextInput
          placeholder="Station d'arrivée"
          keyboardType="default"
          value={toStation}
          onChangeText={setToStation}
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
         <Text>GENRE</Text>
        <RNPickerSelect
          placeholder={{ label: "Séléctionnez votre genre", value: null }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Femme", value: "Femme" },
            { label: "Homme", value: "Homme" },
            { label: "Non genré", value: "Non genré" },
          ]}
        />

      </View>
      <TouchableOpacity
        onPress={() => postRoute(fromStation, toStation)}>
        <Text >
          Valider
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



export default FormRouteBlind;
