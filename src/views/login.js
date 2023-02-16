import React, {useCallback, useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {SafeAreaView, View, Text, Image, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../styles/login_style';
import ButtonDefault from '../components/button';
import {RadioButton} from 'react-native-paper';

const Login = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState('true');
  const [value, setValue] = useState('value');
  const [checked, setChecked] = React.useState('first');

  const getUser = async () => {
    try {
      const data = await AsyncStorage.getItem(mail);
      //console.log(pseudo + " " + data);
      console.log(value);
      if (data !== null || data !== '') {
        setValue(data);
      } else {
        return console.log('Pas de données!!!');
      }
    } catch (error) {
      console.log('erreur : ' + error);
    }
  };

  useEffect(() => {
    getUser();
  });

  const validator = useCallback(() => {
    if (password !== value) {
      setIsValid('false');
      alert('Votre mail ou mot de passe est incorrect');
    } else {
      setIsValid('true');
      alert('Vous êtes connecté !');
      navigation.navigate('Profil');
    }
  }, [password, value, navigation]);

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
        <View>
          <RadioButton
            value="Mr"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>
        <View style={styles.separator}>
          <TextInput
            style={isValid ? styles.form : styles.formRed}
            autoCapitalize="none"
            placeholder="VOTRE ADRESSE MAIL"
            keyboardType="email-address"
            value={mail}
            onChangeText={setMail}
          />
          <TextInput
            style={isValid ? styles.form : styles.formRed}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="VOTRE MOT DE PASSE"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <ButtonDefault title="ME CONNECTER" onPress={validator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
