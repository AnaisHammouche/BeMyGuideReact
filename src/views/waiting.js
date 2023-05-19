import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import {waitingStyles} from '../styles/waiting_style';
import React, {useCallback} from 'react';

const Waiting = ({route, navigation}) => {
  const routeParamsToken = route.params.token;

  setTimeout(() => {
    navigation.navigate('Match', {token: routeParamsToken});
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
