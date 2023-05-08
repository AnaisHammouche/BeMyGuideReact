import React, {useCallback, useMemo, useState} from 'react';
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
import {axiosLogin, axiosUserIsBlind} from '../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  let [isValid, setIsValid] = useState('true');

  useMemo(() => {
    if (email === '' && password === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [email, password]);

  const postLogin = useCallback(async () => {
    if (isValid) {
      axiosLogin(email, password);
      const getTokenStorage = await AsyncStorage.getItem('Token');
      console.log('token login' + getTokenStorage);
      //TODO à refacto
      axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
        getTokenStorage,
      )}`;
      const userIsBlind = await axios
        .get(`http://localhost:8080/api/v1/users/email/${email}`)
        .then(async function (response) {
          if (await response.data) {
            return JSON.parse(await response.data.blind);
          }
          null;
        });
      console.log('is blind ? ' + userIsBlind);
      userIsBlind
        ? navigation.navigate('FormRouteBlind')
        : navigation.navigate('FormRouteV');
    } else {
      alert(
        'Veuillez remplir les informations nécessaires à votre connection.',
      );
    }
  }, [isValid, email, password, navigation]);

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

        <TouchableOpacity style={styles.button} onPress={() => postLogin()}>
          <Text style={styles.buttonText}>ME CONNECTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
