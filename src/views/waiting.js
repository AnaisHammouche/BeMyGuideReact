import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import {WaitingStyles} from '../styles/WaitingStyle';
import React from 'react';

const Waiting = ({route, navigation}) => {
  const routeParamsToken = route.params.token;

  setTimeout(() => {
    navigation.navigate('Match', {token: routeParamsToken});
  }, 1 * 5 * 1000);

  return (
    <SafeAreaView style={WaitingStyles.screen}>
      <View style={WaitingStyles.container}>
        <Image
          source={require('../assets/close_eye.png')}
          style={WaitingStyles.icon}
        />
        <Text style={WaitingStyles.text}>
          Votre demande a bien été prise en compte. Vous recevrez une
          notification dès que nous aurons trouvé le match idéal !
        </Text>
      </View>
      <ImageBackground
        style={WaitingStyles.image}
        source={require('../assets/mapstations.png')}></ImageBackground>
    </SafeAreaView>
  );
};

export default Waiting;
