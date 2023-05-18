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
import styles from '../../styles/formRoute_style';
import {AxiosRoute} from '../../api/routeApi';

const FormRouteV = () => {
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>OÙ ALLEZ-VOUS ?</Text>
        <Text style={styles.text}>DÉPART</Text>
        <TextInput
          placeholder="Station de départ"
          keyboardType="default"
          value={fromStation}
          onChangeText={setfromStation}
          required
        />
        <Text style={styles.text}>ARRIVÉE</Text>
        <TextInput
          placeholder="Station d'arrivée"
          keyboardType="default"
          value={toStation}
          onChangeText={setToStation}
          required
        />
        <Text style={styles.text}>JOURS DE DÉPART</Text>
        <TextInput
          placeholder="Date"
          keyboardType="default"
          value={date}
          onChangeText={setDate}
        />
        <Text style={styles.text}>HORAIRE DE DÉPART</Text>
        <TextInput
          placeholder="Horaire de départ"
          keyboardType="default"
          value={time}
          onChangeText={setTime}
        />
        <Text style={styles.text}>Genre souhaité de votre accompagné</Text>
        <RNPickerSelect
          placeholder={{label: "Genre souhaité de l'accompagnant", value: null}}
          onValueChange={() => setRouteMateGender(routeMateGender)}
          items={[
            {label: 'Femme', value: 'FEMALE'},
            {label: 'Homme', value: 'MALE'},
            {label: 'Pas de préférence', value: ''},
          ]}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={postRoute}
          onLongPress={() => console.log('pas de match désolé')}>
          <Text style={styles.connect}>Valider</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FormRouteV;
