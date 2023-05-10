import React, {useCallback, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/formRoute';
import {AxiosRoute, AxiosRouteGet} from '../../api/routeApi';

// initiation of the route form
// useState to renew render when data changes
const FormRouteBlind = ({route, navigation}) => {
  //const routeParamsToken = route.params.token;
  const [fromStation, setfromStation] = useState();
  const [toStation, setToStation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [routeMateGender, setRouteMateGender] = useState();

  //  Call of the axios function in the API directory
  const postRoute = useCallback(() => {
    AxiosRoute(
      fromStation,
      toStation,
      routeMateGender,
      //routeParamsToken,
      navigation,
    ),
      AxiosRouteGet(
        fromStation,
        toStation,
        routeMateGender,
        //routeParamsToken,
        navigation,
      );
  }, [fromStation, toStation, routeMateGender, navigation]);

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
        <TextInput
          style={styles.input}
          placeholder="Date"
          keyboardType="default"
          value={date}
          onChangeText={setDate}
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => postRoute}
          onLongPress={() => console.log('pas de match désolé')}>
          <Text style={styles.connect}>Valider</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FormRouteBlind;
