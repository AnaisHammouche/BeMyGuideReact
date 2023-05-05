import React, {useCallback, useState, useMemo} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles/login_style';
import {axiosLogin, axiosUser} from '../api/userApi';

const Login = () => {
  const navigation = useNavigation();
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isBlind, setIsBlind] = useState('true');

  /* useMemo(() => {
    if (isBlind === true) {
      setIsBlind(true);
    } else {
      setIsBlind(false);
    }
  }, [isBlind]); */

  const postLogin = useCallback(() => {
    //if (isBlind) {
    axiosLogin(email, password, navigation, isBlind);
    //console.log(isBlind);
    /* } else {
      alert(
        'Veuillez remplir les informations nécessaires à votre connection.',
      );
    } */
    //axiosUser(email, password, isBlind, navigation);
  }, [email, password, navigation, isBlind]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Cela faisait longtemps qu'on ne vous avait pas vu.
        </Text>
        <Image
          source={require('../assets/close_eye.png')}
          style={styles.icon}
        />
        <View style={styles.smallContainer}>
          <Text style={styles.text}>VOTRE ADRESSE MAIL</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="bonjour@bemyguide.fr"
            keyboardType="email-address"
            value={email}
            onChangeText={setMail}
          />
          <Text style={styles.text} keyboardType="default">
            VOTRE MOT DE PASSE
          </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="VOTRE MOT DE PASSE"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={isBlind => postLogin(email, password)}>
          <Text style={styles.buttonText}>ME CONNECTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
