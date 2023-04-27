import React, {
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
  DatePickerIOSComponent

} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/formRoute_style';
import { AxiosRoute, AxiosRouteGet } from '../../api/routeApi';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker';


const currentDate = new Date();
function addOneYear(date) {
  date.setFullYear(date.getFullYear() + 1);
  return date;
}
const maxDate = addOneYear(currentDate);

// const [date, setDate] = useState('09-10-2021');


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
      routeParamsToken, navigation), AxiosRouteGet(fromStation,
        toStation,
        routeMateGender,
        routeParamsToken, navigation)}
      , [fromStation,
        toStation,
        routeMateGender,
        routeParamsToken, navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>OÙ ALLEZ-VOUS ?</Text>
        <Text style={styles.text}>STATION DE DÉPART</Text>
        <TextInput
          style={styles.input}
          placeholder="Station de départ"
          keyboardType="default"
          value={fromStation}
          onChangeText={setfromStation}
          required
        />

        <Text style={styles.text}>STATION D'ARRIVÉE</Text>
        <TextInput
          style={styles.input}
          placeholder="Station d'arrivée"
          keyboardType="default"
          value={toStation}
          onChangeText={setToStation}
          required
        />
        <Text style={styles.text}>JOUR DE DÉPART</Text>
        <DatePicker
        style={styles.inputDate}
          date={currentDate}
          mode="date"
          placeholder="Sélectionnez un jour de départ"
          format="DD/MM/YYYY"
          minDate={currentDate}
          maxDate={maxDate}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              right: -10,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
             // marginTop: 15,
              borderColor : "black",
            //  alignItems: "flex-start",
             // borderWidth: 0,
              width: '300%',
              //borderBottomWidth: 1,
              borderRadius: 5,
            },
            placeholderText: {
              padding: 10, 
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      
        <Text style={styles.text}>HORAIRE DE DÉPART</Text>
        <TextInput
          style={styles.input}
          placeholder="Horaire de départ"
          keyboardType="default"
          value={time}
          onChangeText={setTime}
        />
        <Text style={styles.text}>Genre souhaité de votre accompagnant</Text>
        <RNPickerSelect
          placeholder={{label: "Genre souhaité de l'accompagnant", value: null}}
          onValueChange={routeMateGender => setRouteMateGender(routeMateGender)}
          items={[
            {label: 'Femme', value: 'FEMALE'},
            {label: 'Homme', value: 'MALE'},
            {label: 'Pas de préférence', value: ''},
          ]}
        />
    
      <TouchableOpacity style={styles.button}
        // onPress={() => postRoute(fromStation, toStation, routeMateGender,
        //   routeParamsToken, 
        //   navigation)
        // }
        onPress={() => console.log(currentDate)}
        onLongPress={() => console.log(currentDate)}>
        <Text  style={styles.connect}>Valider</Text>
      </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
};

export default FormRouteBlind;
