import React, {useCallback} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles/welcome_style';

const Welcome = props => {
  const {navigation} = props;

  const goToRegisterBlind = useCallback(() => {
    navigation.navigate('RegisterBlind', {userIsBlind: true});
  }, [navigation]);

  const goToRegister = useCallback(() => {
    navigation.navigate('RegisterBlind', {userIsBlind: false});
  }, [navigation]);

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require('../assets/main_aidant.png')}
        accessible={true}
        accessibilityLabel="Image de fond">
        <View style={styles.titleContainer}>
          <Text
            style={styles.title}
            accessible={true}
            accessibilityLabel="Titre 1">
            Où tu iras,
          </Text>
          <Text
            style={styles.title}
            accessible={true}
            accessibilityLabel="Titre 2">
            nous irons aussi.
          </Text>
          <Image
            source={require('../assets/close_eye.png')}
            style={styles.icon}
            accessible={true}
            accessibilityLabel="Logo"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={goToRegisterBlind}
            style={styles.button1}
            accessible={true}
            accessibilityLabel="Bouton Me faire accompagner">
            <Text style={styles.connect}> ME FAIRE ACCOMPAGNER</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goToRegister}
            style={styles.button2}
            accessible={true}
            accessibilityLabel="Bouton Accompagner quelqu'un">
            <Text style={styles.connect}> ACCOMPAGNER QUELQU'UN</Text>
          </TouchableOpacity>

          <Text
            style={styles.textConnect}
            accessible={true}
            accessibilityLabel="Texte Vous avez déjà un compte ?">
            Vous avez déjà un compte ?
          </Text>
          <TouchableOpacity
            onPress={goToLogin}
            style={styles.button}
            accessible={true}
            accessibilityLabel="Bouton Connectez-vous">
            <Text style={styles.connect}> Connectez-vous</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
