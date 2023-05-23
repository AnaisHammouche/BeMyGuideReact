import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import {waitingStyles} from '../styles/waiting_style';
import React from 'react';

const Waiting = ({route, navigation}) => {
  //const routeParamsToken = route.params.token;
  const idRoute = route.params.idRoute;

  setTimeout(() => {
    navigation.navigate('Match', {idRoute: idRoute});
  }, 1 * 5 * 1000);

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
