import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, View, Text, Image, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LoginStyle} from '../styles/LoginStyle';
import {axiosLogin, axiosUserIsBlind} from '../api/UserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonDefault} from '../components/Buttons';

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
      await AsyncStorage.clear();
      await axiosLogin(email, password);
      const getTokenStorage = await AsyncStorage.getItem('Token');
      console.log('token login :' + getTokenStorage);
      if (getTokenStorage != null) {
        const userIsBlind = await axiosUserIsBlind(email, getTokenStorage);
        console.log('is blind ? ' + userIsBlind);
        userIsBlind
          ? navigation.navigate('FormRouteBlind')
          : navigation.navigate('FormRouteV');
      }
    } else {
      alert(
        'Veuillez remplir les informations nécessaires à votre connection.',
      );
    }
  }, [isValid, email, password, navigation]);

  return (
    <SafeAreaView style={LoginStyle.screen}>
      <View style={LoginStyle.container}>
        <Text style={LoginStyle.title}>
          Cela faisait longtemps qu'on ne vous avait pas vu.
        </Text>
        <Image
          source={require('../assets/close_eye.png')}
          style={LoginStyle.icon}
        />
        <View style={LoginStyle.smallContainer}>
          <Text style={LoginStyle.text}>VOTRE ADRESSE MAIL</Text>
          <TextInput
            style={LoginStyle.input}
            autoCapitalize="none"
            placeholder="bonjour@bemyguide.fr"
            keyboardType="email-address"
            value={email}
            onChangeText={setMail}
          />
          <Text style={LoginStyle.text} keyboardType="default">
            VOTRE MOT DE PASSE
          </Text>
          <TextInput
            style={LoginStyle.input}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="VOTRE MOT DE PASSE"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <ButtonDefault title={'ME CONNECTER'} onPress={() => postLogin()} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
