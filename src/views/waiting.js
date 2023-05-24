import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {waitingStyles} from '../styles/waiting_style';
import {AxiosRoutePut} from '../api/routeApi';

const Waiting = ({ route, navigation }) => {
  const routeParamsToken = route.params.token;
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchMatch = async () => {
      const routeParamsToken = await AsyncStorage.getItem('Token');
      const idRoute = route.params.idRoute.idRoute;
      console.log('idRoute ' + idRoute);
      console.log('idRoute typeof ' + typeof idRoute);
      console.log('route ' + routeParamsToken);
      try {
        const response = await AxiosRoutePut(routeParamsToken, idRoute);
        /* setData(response);
        console.log('axiosRoutePut ' + response);
        if (response) {
        } */
        //return data;
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    searchMatch();
  }, [route.params.idRoute.idRoute]);

  setTimeout(() => {
    navigation.navigate('Match', {token: routeParamsToken});
  }, 1 * 5 * 1000);

  return (
    <SafeAreaView style={waitingStyles.screen}>
      <View style={waitingStyles.container} accessible={true} accessibilityLabel="Attente">
        <Image
          source={require('../assets/close_eye.png')}
          style={waitingStyles.icon}
          accessible={true}
          accessibilityLabel="Logo"
        />
        <Text style={waitingStyles.text} accessible={true} accessibilityLabel="Message d'attente">
          Votre demande a bien été prise en compte. Vous recevrez une notification dès que nous aurons trouvé le match idéal !
        </Text>
      </View>
      <ImageBackground
        style={waitingStyles.image}
        source={require('../assets/mapstations.png')}
        accessible={true}
        accessibilityLabel="Image de fond"
      ></ImageBackground>
    </SafeAreaView>
  );
};

export default Waiting;
