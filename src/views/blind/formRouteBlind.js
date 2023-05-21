import React, {useCallback, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import FormRouteStyle from '../../styles/FormRouteStyle';
import {AxiosRoute} from '../../api/RouteApi';
import {ButtonDisplay} from '../../components/Buttons';

const FormRouteBlind = () => {
  const navigation = useNavigation();
  const [fromStation, setfromStation] = useState();
  const [toStation, setToStation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [routeMateGender, setRouteMateGender] = useState();

  const postRoute = useCallback(async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    console.log('route token' + routeParamsToken);
    AxiosRoute(
      fromStation,
      toStation,
      routeMateGender,
      routeParamsToken,
      navigation,
    );
  }, [fromStation, toStation, routeMateGender, navigation]);

  return (
    <SafeAreaView style={FormRouteStyle.safeArea}>
      <View style={FormRouteStyle.container}>
        <Text style={FormRouteStyle.title}>OÙ ALLEZ-VOUS ?</Text>
        <Text style={FormRouteStyle.text}>STATION DE DÉPART</Text>
        <TextInput
          style={FormRouteStyle.input}
          placeholder="Station de départ"
          keyboardType="default"
          value={fromStation}
          onChangeText={setfromStation}
          required
        />

        <Text style={FormRouteStyle.text}>STATION D'ARRIVÉE</Text>
        <TextInput
          style={FormRouteStyle.input}
          placeholder="Station d'arrivée"
          keyboardType="default"
          value={toStation}
          onChangeText={setToStation}
          required
        />
        <Text style={FormRouteStyle.text}>JOUR DE DÉPART</Text>
        <TextInput
          style={FormRouteStyle.input}
          placeholder="Date"
          keyboardType="default"
          value={date}
          onChangeText={setDate}
        />
        <Text style={FormRouteStyle.text}>HORAIRE DE DÉPART</Text>
        <TextInput
          style={FormRouteStyle.input}
          placeholder="Horaire de départ"
          keyboardType="default"
          value={time}
          onChangeText={setTime}
        />
        <Text style={FormRouteStyle.text}>
          Genre souhaité de votre accompagnant
        </Text>
        <RNPickerSelect
          placeholder={{label: "Genre souhaité de l'accompagnant", value: null}}
          onValueChange={() => setRouteMateGender(routeMateGender)}
          items={[
            {label: 'Femme', value: 'FEMALE'},
            {label: 'Homme', value: 'MALE'},
            {label: 'Pas de préférence', value: ''},
          ]}
        />
        <ButtonDisplay title={'Valider'} onPress={postRoute} />
      </View>
    </SafeAreaView>
  );
};

export default FormRouteBlind;
