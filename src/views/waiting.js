import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {waitingStyles} from '../styles/waiting_style';
import {AxiosRouteGet, AxiosRoutePut} from '../api/routeApi';

const Waiting = ({route, navigation}) => {
  const routeParamsToken = route.params.token;
  const [data, setData] = useState([]);

  /* setTimeout(() => {
    navigation.navigate('Match', {token: routeParamsToken});
  }, 1 * 5 * 1000); */

  useEffect(() => {
    const searchMatch = async () => {
      const routeParamsToken = await AsyncStorage.getItem('Token');
      const value = route.params.idRoute;
      console.log('idRoute ' + value.idRoute);
      console.log('route ' + routeParamsToken);
      try {
        const response = await AxiosRoutePut(
          routeParamsToken,
          value.idRouteSeeker,
        );
        setData(response.data);
        console.log('axiosRoutePut ' + JSON.stringify(response.data));
        if (response.data) {
        }
        //return data;
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    searchMatch();
  }, [route.params.idRoute]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Match', {token: routeParamsToken});
    }, 1 * 5 * 1000);

    return () => clearTimeout(timeout);
  }, [navigation, routeParamsToken]);

  return (
    <SafeAreaView style={waitingStyles.screen}>
      <View style={waitingStyles.container}>
        <Image
          source={require('../assets/close_eye.png')}
          style={waitingStyles.icon}
        />
        <Text style={waitingStyles.text}>
          Votre demande a bien été prise en compte. Vous recevrez une
          notification dès que nous aurons trouvé le match idéal !
        </Text>
      </View>
      <ImageBackground
        style={waitingStyles.image}
        source={require('../assets/mapstations.png')}></ImageBackground>
    </SafeAreaView>
  );
};

export default Waiting;
