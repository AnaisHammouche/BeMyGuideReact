import React, {useCallback, useState} from 'react';
import {styles} from '../../styles/login_style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
} from 'react-native';

// initiation of the login page
const LogInBlind = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //  Call of the axios function
  const postLogin = useCallback(async (email, password) => {
    axios
      .post('http://localhost:8080/api/v1/auth/authenticate', {
        email: email,
        password: password,
      })
      .then(async function (response) {
        const tokenData = JSON.stringify(response.data.token);
        await AsyncStorage.setItem('Token', tokenData);
        if ((response.status = '200')) {
          const getTokenData = await AsyncStorage.getItem('Token');
          return getTokenData != null
            ? JSON.parse(getTokenData) &&
                navigation.navigate('FormRouteBlind', {token: getTokenData})
            : null;
        }
      })
      .catch(function (error) {
        Alert.alert('erreur : ' + JSON.stringify(error));
      });
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Cela faisait longtemps qu'on ne vous avait pas vu.{' '}
        </Text>
        <Image
          source={require('../../assets/close_eye.png')}
          style={styles.icon}
        />

        <View style={styles.smallContainer}>
          <Text style={styles.text}>VOTRE ADRESSE MAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="bonjour@bemyguide.fr"
            keyboardType="default"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.text} keyboardType="default">
            VOTRE MOT DE PASSE
          </Text>
          <TextInput
            style={styles.input}
            placeholder="**********"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => postLogin(email, password)}>
          <Text style={styles.buttonText}>ME CONNECTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogInBlind;
