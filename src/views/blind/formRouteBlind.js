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
import { AxiosRoute } from '../../api/routeApi';

const FormRouteBlind = ({route, navigation}) => {
  const routeParamsToken = route.params.token;
  const [fromStation, setfromStation] = useState();
  const [toStation, setToStation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [routeMateGender, setRouteMateGender] = useState();

  const postRoute = useCallback( () => {
      AxiosRoute(fromStation,
        toStation,
        routeMateGender,
        routeParamsToken, navigation)}, [fromStation,
          toStation,
          routeMateGender,
          routeParamsToken, navigation]);

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
        onPress={() => postRoute(fromStation,
          toStation,
          routeMateGender,
          routeParamsToken, 
          navigation)}
        onLongPress={() => console.log('pas de match désolé')}>
        <Text>Valider</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FormRouteBlind;
