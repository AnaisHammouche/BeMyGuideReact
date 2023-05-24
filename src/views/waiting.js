import React, { useCallback } from 'react';
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';

import { waitingStyles } from '../styles/waiting_style';

const Waiting = ({ route, navigation }) => {
  const routeParamsToken = route.params.token;

  setTimeout(() => {
    navigation.navigate('Match', { token: routeParamsToken });
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
