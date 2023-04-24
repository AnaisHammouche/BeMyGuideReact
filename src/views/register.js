import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, Text, View, Image, TextInput} from 'react-native';
import {styles} from '../styles/register_style';
import ButtonDefault from '../components/button';
import {RadioButton} from 'react-native-paper';

const Register = () => {
  const navigation = useNavigation();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState('true');
  const user = {
    lastName: lastName,
    firstName: firstName,
    mail: mail,
    password: password,
  };

  const newUser = async () => {
    try {
      await AsyncStorage.setItem(
        user.lastName,
        user.firstName,
        user.mail,
        user.password,
      );
      console.log('registered');
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  useMemo(() => {
    if (
      lastName === '' ||
      firstName === '' ||
      password !== confirmPassword ||
      mail === '' ||
      password === '' ||
      password.length < 5
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [lastName, firstName, mail, password, confirmPassword]);

  const validator = useCallback(() => {
    if (isValid) {
      newUser();
      alert(
        'Bienvenue, ' + user.firstName + ' ravie de vous comptez parmis nous',
      );
      navigation.navigate('Login');
    } else {
      alert('Veuillez remplir les informations nécessaires à votre inscriptions.');
    }
  }, [isValid, user.firstName]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image
          source={require('../assets/close_eye.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>Nous rejoindre</Text>
      </View>
      <View style={styles.separator}>
        {/*  <View>
          <RadioButton
            value="Mr"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View> */}
        <TextInput
          style={styles.form}
          autoCapitalize="none"
          placeholder="NOM"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.form}
          autoCapitalize="none"
          placeholder="PRENOM"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.form}
          autoCapitalize="none"
          placeholder="VOTRE ADRESSE MAIL"
          keyboardType="email-address"
          value={mail}
          onChangeText={setMail}
        />
        <TextInput
          style={styles.form}
          placeholder="VOTRE MOT DE PASSE"
          autoCapitalize="none"
          secureTextEntry={true}
          value={user.password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.form}
          autoCapitalize="none"
          placeholder="CONFIRMATION MOT DE PASSE"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <ButtonDefault title={"Je m'inscris"} onPress={validator} />
        {/* <View style={{flexDirection: 'row'}}>
          <SocialIcon type="google" />
          <SocialIcon type="facebook" />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Register;
