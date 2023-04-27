import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {styles} from '../../styles/login_style';
// import {styles} from '../../styles/button_style';
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

const LogInBlind = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const postLogin = useCallback(
    async (email, password) => {
      axios
        .post('http://localhost:8080/api/v1/auth/authenticate', {
          // .post("http://192.168.1.20:8080/api/v1/auth/authenticate", {

          email: email,
          password: password,
        })
        .then(async function (response) {
          const tokenData = JSON.stringify(response.data.token);
          // console.warn('warn response : ' + tokenData)
          await AsyncStorage.setItem('Token', tokenData);
          // console.warn('warn1' + JSON.stringify(AsyncStorage));
          if ((response.status = '200')) {
            const getTokenData = await AsyncStorage.getItem('Token');
            //   console.warn('warn 200' + JSON.stringify(getTokenData));
            //console.warn(JSON.stringify(AsyncStorage));
            // return getTokenData != null ? JSON.parse(getTokenData) && navigation.navigate('FormRouteBlind', { token: tokenData }) : null;
            return getTokenData != null
              ? JSON.parse(getTokenData) &&
                  navigation.navigate('FormRouteBlind', {token: getTokenData})
              : null;
            //Alert.alert("reponse : " + JSON.stringify(response.data.token));
            //Alert.alert('coucou');
            // await AsyncStorage.getItem('Token');
          }
        })
        .catch(function (error) {
          Alert.alert('erreur : ' + JSON.stringify(error));
        });
    },
    [navigation],
  );

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
            //style={isValid ? styles.form : styles.formRed}
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

        {/*   <TouchableOpacity
          onPress={() => Alert.alert(JSON.stringify('email : ' + email + ' mdp : ' + password))}>
          <Text >
            ME CONNECTER
          </Text>
        </TouchableOpacity> */}
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
