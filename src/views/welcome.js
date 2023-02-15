import React, {useCallback} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonDefault from '../components/button';
import {styles} from '../styles/welcome_style';

const Welcome = props => {
  const {navigation} = props;

  const goToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={require('../assets/main_aidant.png')}>
        <View style={styles.separator}>
          <Image
            source={require('../assets/close_eye.png')}
            style={styles.icon}
          />
        </View>
        <Text style={styles.title}>Où tu iras, nous irons aussi.</Text>
        <Text style={styles.text}>
          Avec Be my guide, trouvez facilement un(e) accompagnateur(trice)
          adapté(e) à vos besoins et disponible surtout quand vous en avez
          besoin.
        </Text>
        <View style={styles.separator}>
          <ButtonDefault title="Rejoignez-nous" onPress={goToRegister} />
          <Text style={styles.textConnect}>Vous avez déjà un compte ?</Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.connect}> Connectez-vous</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
