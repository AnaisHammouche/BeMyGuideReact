import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, TextInput, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../styles/login_style';
import ButtonDefault from '../components/button';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

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
        <Image
          source={require('../assets/close_eye.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>
          Ca fait longtemps qu'on ne vous avait pas vu
        </Text>
        <View style={styles.separator}>
          <Text>VOTRE ADRESSE MAIL</Text>
          <TextInput
            autoCapitalize="none"
            placeholder="bonjour@bemyguide.fr"
            keyboardType="email-address"
            value={email}
            onChangeText={setMail}
          />
          <Text keyboardType="default">VOTRE MOT DE PASSE</Text>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="VOTRE MOT DE PASSE"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <ButtonDefault
            title="ME CONNECTER"
            onPress={() => postLogin(email, password)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
