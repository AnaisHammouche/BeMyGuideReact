import React, {useState, useCallback, useEffect} from 'react';
import styles from '../../styles/LoginBindStyle';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {AxiosRouteGet} from '../../api/routeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import displayStyles from '../../styles/displayAllMyRoutesBlindStyle';

const Match = ({route}) => {
  /* const routeParamsFromStation = JSON.parse(route.params.fromStation);
  console.log('ROUTPARAMFROMSTATION : ' + routeParamsFromStation);
  const routeParamsToStation = JSON.parse(route.params.toStation);
  console.log('ROUTPARAMTOSTATION : ' + routeParamsToStation); */
  //const routeParamsToken = JSON.parse(route.params.token);
  const navigation = useNavigation();
  const [fromStation, setFromStation] = useState([]);
  const [toStation, setToStation] = useState([]);
  const [date, setDate] = useState();
  const [hours, setHours] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [get, setGet] = useState(null);

  useEffect(() => {
    getMatch();
  }, []);

  const getMatch = async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    console.log('enfoiré ' + routeParamsToken);
    try {
      const response = await AxiosRouteGet(routeParamsToken);
      console.log('bouh ' + response);
      setFromStation(response.fromStation);
      setToStation(response.toStation);
      setDate(response.dateRoute);
      setHours(response.startingTime);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  /* const getMatch = useCallback(async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    const routeMateGender = await AsyncStorage.getItem('Gender');
    AxiosRouteGet(
      fromStation,
      toStation,
      routeMateGender,
      routeParamsToken,
      navigation,
    );
  }, [fromStation, navigation, toStation]); */

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>C'est un match !</Text>
        {/* <Image></Image> */}
        <View>
          <Text>Votre demande de trajet</Text>
          <Text>De : </Text>
          <Text>{fromStation}</Text>
          <Text>À : </Text>
          <Text>{toStation}</Text>
          <Text>Le : </Text>
          <Text>{date}</Text>
          <Text>À : </Text>
          <Text>{hours}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Bouton validé cliqué')}>
            <Text style={displayStyles.connect}>VALIDER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRed}
            onPress={() => console.log('bouton annulé cliqué')}>
            <Text style={displayStyles.connect}>ANNULER</Text>
          </TouchableOpacity>
          {/* <Text >à été confirmée par {firstName}.</Text> */}
          {/* <Text >N'oubliez pas de le contacter afin de convenir d'un lieu de rendez-vous plus précis tel que le numéro d'entée de la station. </Text>
           */}
          {/* <View>
            <Image></Image>
            <Text>{firstName} {lastName}</Text>
            <Text>Accompagnateur</Text>
        <TouchableOpacity
        onPress={() => getMatch(fromStation,toStation)}>
          <Text >
            CHAT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => Alert.alert(JSON.stringify('num : ' + num ))}>
          <Text >
            TEL
          </Text>
        </TouchableOpacity>
        </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Match;
