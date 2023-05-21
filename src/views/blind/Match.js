import React, {useState, useEffect} from 'react';
import LoginBlindStyle from '../../styles/LoginBlindStyle';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {AxiosRouteGet} from '../../api/RouteApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonDisplay, ButtonDisplayRed} from '../../components/Buttons';

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
    <SafeAreaView style={LoginBlindStyle.screen}>
      <View>
        <Text style={LoginBlindStyle.title}>C'est un match !</Text>
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
          <ButtonDisplay
            title={'VALIDER'}
            onPress={() => console.log('Bouton validé cliqué')}
          />
          <ButtonDisplayRed
            title={'ANNULER'}
            onPress={() => console.log('bouton annulé cliqué')}
          />
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
