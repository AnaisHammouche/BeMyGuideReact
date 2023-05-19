import React, {useState, useEffect} from 'react';
import styles from '../../styles/LoginBindStyle';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {AxiosRouteGet} from '../../api/routeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import displayStyles from '../../styles/displayAllMyRoutesBlindStyle';

const Match = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMatch();
  }, []);

  const getMatch = async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    console.log('route token ' + routeParamsToken);
    try {
      const response = await AxiosRouteGet(routeParamsToken);
      setData(response);
      console.log('axiosRouteGet ' + JSON.stringify(response));
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>C'est un match !</Text>
        <Image></Image>
        <View>
          <Text>Votre demande de trajet</Text>
          <Text>De : </Text>
          <Text>{data[0].fromStation}</Text>
          <Text>À : </Text>
          <Text>{data[0].toStation}</Text>
          <Text>Le : </Text>
          <Text>{data[0].dateRoute}</Text>
          <Text>À : </Text>
          <Text>{data[0].startingTime}</Text>
          <TouchableOpacity
            style={displayStyles.button}
            onPress={() => console.log('Bouton validé cliqué')}>
            <Text style={displayStyles.connect}>VALIDER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={displayStyles.buttonRed}
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
