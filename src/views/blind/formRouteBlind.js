import React, {useCallback, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

//import {DatePickerIOSComponent} from '@react-native-community/datetimepicker'

//import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/formRoute_style';
import {AxiosRoute, AxiosRouteGet} from '../../api/routeApi';
//import DatePicker from 'react-native-datepicker';
//import TimePicker from 'react-native-simple-time-picker';
import BottomTabNavigator from '../../components/navigators/BottomTabNavigator';

const currentDate = new Date();
function addOneYear(date) {
  date.setFullYear(date.getFullYear() + 1);
  return date;
}
const maxDate = addOneYear(currentDate);
//import styles from '../../styles/formRoute_style';
//import {AxiosRoute} from '../../api/routeApi';

const FormRouteBlind = ({navigation, route}) => {
  const isBlind = JSON.stringify(route.params.isBlindUser);
  console.log('claire isBlind : ' + isBlind);
  console.log('check type : ' + typeof isBlind);
  const [fromStation, setfromStation] = useState();
  const [toStation, setToStation] = useState();
  const [dateRoute, setDate] = useState();
  const [startingTime, setTime] = useState();
  const [routeMateGender, setRouteMateGender] = useState();
  console.log();

  const postRoute = useCallback(async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    console.log('route token' + routeParamsToken);
    AxiosRoute(
      fromStation,
      toStation,
      routeMateGender,
      dateRoute,
      startingTime,
      routeParamsToken,
      navigation,
    );
  }, [
    fromStation,
    toStation,
    routeMateGender,
    dateRoute,
    startingTime,
    navigation,
  ]);

  function Item(userIsBlind) {
    userIsBlind = isBlind;
    if (userIsBlind) {
      console.log('inside function' + userIsBlind);
      return (
        <View style={styles.containerOfGender}>
          <Text style={styles.text} className="item">
            GENRE SOUHAITÉ DE L'ACCOMPAGNANT :
          </Text>
          <RNPickerSelect
            placeholder={{
              label: "Genre souhaité de l'accompagnant",
              value: null,
            }}
            onValueChange={routeMateGender =>
              setRouteMateGender(routeMateGender)
            }
            items={[
              {label: 'Femme', value: 'FEMALE'},
              {label: 'Homme', value: 'MALE'},
              {label: 'Pas de préférence', value: ''},
            ]}
          />
        </View>
      );
    } else {
      return null;
    }
  }

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
          value={dateRoute}
          onChangeText={setDate}
        />

        <Text style={styles.text}>HORAIRE DE DÉPART</Text>
        <TextInput
          style={styles.input}
          placeholder="Horaire de départ"
          keyboardType="default"
          value={startingTime}
          onChangeText={setTime}
        />

        <Item userIsBlind={true} />

        <TouchableOpacity
          style={styles.button}
          onPress={postRoute}
          onLongPress={() => console.log('pas de match désolé')}>
          <Text style={styles.buttonText}>VALIDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FormRouteBlind;
