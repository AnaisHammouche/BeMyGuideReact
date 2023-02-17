import React, { Component, useCallback, useContext, useEffect, useState } from 'react';
import {styles} from '../../styles/login_style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image
} from 'react-native';

const LogInBlind = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const postLogin = useCallback(async (email, password) => {

    axios
       .post("http://localhost:8080/api/v1/auth/authenticate", {
     // .post("http://192.168.1.20:8080/api/v1/auth/authenticate", {

        email: email,
        password: password
      })
      .then(async function (response) {
        const tokenData = JSON.stringify(response.data.token);
        console.warn('warn response : ' + tokenData)
        await AsyncStorage.setItem('Token', tokenData);
        console.warn('warn1' + JSON.stringify(AsyncStorage));
        if (response.status = "200") {
          const getTokenData = await AsyncStorage.getItem('Token');
          console.warn('warn 200' + JSON.stringify(getTokenData));
          //console.warn(JSON.stringify(AsyncStorage));
         // return getTokenData != null ? JSON.parse(getTokenData) && navigation.navigate('FormRouteBlind', { token: tokenData }) : null;
          return getTokenData != null ? JSON.parse(getTokenData) && navigation.navigate('FormRouteBlind', { token: getTokenData }) : null;
           //Alert.alert("reponse : " + JSON.stringify(response.data.token));
          //Alert.alert('coucou');
          // await AsyncStorage.getItem('Token');

        }

      })
      .catch(function (error) {
        Alert.alert('erreur : ' + JSON.stringify(error));
      });

  }, []);



  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Ça faisait longtemps qu'on ne vous avait pas vu.  <Image source={require('../../assets/close_eye.png')} style={styles.icon}/></Text>
        <View >
          <Text >VOTRE ADRESSE MAIL</Text>
          <TextInput
            //style={isValid ? styles.form : styles.formRed}
            placeholder='bonjour@bemyguide.fr'
            keyboardType="default"
            value={email}
            onChangeText={setEmail}
          />
          <Text keyboardType="default">
            VOTRE MOT DE PASSE
          </Text>
          <TextInput
            placeholder='**********'
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
          onPress={() => postLogin(email, password)}>
          <Text >
            ME CONNECTER
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



export default LogInBlind;
