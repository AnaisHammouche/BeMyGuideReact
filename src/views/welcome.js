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
    navigation.navigate('RegisterBlind');
  }, [navigation]);

  const goToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={require('../assets/main_aidant.png')}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Où tu iras, </Text>
          <Text style={styles.title}>nous irons aussi.</Text>
          <Image
            source={require('../assets/close_eye.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.buttonContainer}>

          <TouchableOpacity onPress={goToRegisterBlind} style={styles.button1}>
            <Text style={styles.connect}>
              {' '}
              ME FAIRE ACCOMPAGNER
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToRegister} style={styles.button2}>
            <Text style={styles.connect}>
              {' '}
              ACCOMPAGNER QUELQU'UN
            </Text>
          </TouchableOpacity>

          <Text style={styles.textConnect}>Vous avez déjà un compte ?</Text>
          <TouchableOpacity onPress={goToLogin} style={styles.button}>
            <Text style={styles.connect}> Connectez-vous</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
