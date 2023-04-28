import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import {styles} from '../styles/waitingStyle';
import React from 'react';

const Waiting = ({route, navigation}) => {
  const routeParamsToken = route.params.token;

  setTimeout(() => {
    navigation.navigate('FormRouteBlind', {token: routeParamsToken});
  }, 1 * 10 * 1000);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image
          source={require('../assets/close_eye.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>
          Votre demande a bien été prise en compte. Vous recevrez une
          notification dès que nous aurons trouvé le match idéal !
        </Text>
      </View>
      <ImageBackground
        style={styles.image}
        source={require('../assets/mapstations.png')}></ImageBackground>
    </SafeAreaView>
  );

  return navigation.navigate('Match');
};

export default Waiting;
