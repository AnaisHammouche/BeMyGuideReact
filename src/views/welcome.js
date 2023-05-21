import React, {useCallback} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WelcomeStyle} from '../styles/WelcomeStyle';
import {ButtonWelcome, ButtonWelcome2} from '../components/Buttons';

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
    <SafeAreaView style={WelcomeStyle.screen}>
      <ImageBackground source={require('../assets/main_aidant.png')}>
        <View style={WelcomeStyle.titleContainer}>
          <Text style={WelcomeStyle.title}>Où tu iras, </Text>
          <Text style={WelcomeStyle.title}>nous irons aussi.</Text>
          <Image
            source={require('../assets/close_eye.png')}
            style={WelcomeStyle.icon}
          />
        </View>
        <View style={WelcomeStyle.buttonContainer}>
          <ButtonWelcome
            title={'ME FAIRE ACCOMPAGNER'}
            onPress={goToRegisterBlind}
          />
          <ButtonWelcome2
            title={"ACCOMPAGNER QUELQU'UN"}
            onPress={goToRegister}
          />
          <Text style={WelcomeStyle.textConnect}>
            Vous avez déjà un compte ?
          </Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={WelcomeStyle.connect}> Connectez-vous</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
