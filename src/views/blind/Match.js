import React, {useState, useEffect} from 'react';
import styles from '../../styles/LoginBindStyle';
import {SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {AxiosRouteGet} from '../../api/routeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import displayStyles from '../../styles/displayAllMyRoutesBlindStyle';
import {useNavigation} from '@react-navigation/native';
import {waitingStyles} from '../../styles/waiting_style';

const Match = ({route}) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  //const idRoute = route.params.idRoute;

  useEffect(() => {
    /* async function getMatch() {
      const routeParamsToken = await AsyncStorage.getItem('Token');
      const idRoute = await route.params.idRoute;
      console.log('idRoute ' + idRoute);
      console.log('route ' + routeParamsToken);
      const response = await AxiosRouteGet(routeParamsToken, idRoute);
      setData(response);
      console.log('axiosRouteGet ' + JSON.stringify(response));
      return data;
    } */
    getMatch();
  });

  const getMatch = async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    const value = route.params.idRoute;
    console.log('idRoute ' + value.idRoute);
    console.log('typeof ' + typeof value.idRoute);
    console.log('route ' + routeParamsToken);
    try {
      const response = await AxiosRouteGet(routeParamsToken, value.idRoute);
      setData(response.data);
      console.log('axiosRouteGet ' + response);
      //return data;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  //getMatch();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={waitingStyles.container2}>
        {/* <View style={waitingStyles.container3} ></View> */}
        
        <Text style={styles.title}>C'est un match !</Text>
        <View>
          <Text>Votre demande de trajet</Text>
          <Text>De : </Text>
          <Text>{data[0]?.fromStation}</Text>
          <Text>À : </Text>
          <Text>{data[0]?.toStation}</Text>
          <Text>Le : </Text>
          <Text>{data[0]?.dateRoute}</Text>
          <Text>À : </Text>
          <Text>{data[0]?.startingTime}</Text>
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
          <Text >à été confirmée par .</Text>
          <Text >N'oubliez pas de le contacter afin de convenir d'un lieu de rendez-vous plus précis tel que le numéro d'entée de la station par exemple. </Text>
          
           <View>
            <Image></Image>
            <Text>michel dupont</Text>
            <Text>Accompagnateur</Text>
        <TouchableOpacity
        onPress={() => console.log('tel cliqué')}>
           <Image
                source={require('../../assets/close_eye.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
        </TouchableOpacity>
        </View>
        
        </View>
        
        
      </View>
      <ImageBackground
        style={waitingStyles.image2}
        source={require('../../assets/mapstations.png')}></ImageBackground>
    </SafeAreaView>
  );
};

export default Match;
