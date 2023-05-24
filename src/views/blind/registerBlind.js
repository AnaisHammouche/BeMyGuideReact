import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput } from 'react-native';
import { styles } from '../../styles/register_style';
import ButtonDefault from '../../components/button';

import postRegister, { axiosRegister } from '../../api/userApi';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

const RegisterBlind = ({ route }) => {
  const navigation = useNavigation();

  const isBlind = JSON.parse(route.params.userIsBlind);

  const [gender, setGender] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const user = {
    gender: gender,
    lastName: lastName,
    firstName: firstName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
    isBlind: isBlind,
  };

  useMemo(() => {
    if (
      gender === '' ||
      lastName === '' ||
      firstName === '' ||
      password !== confirmPassword ||
      email === '' ||
      phoneNumber.length < 10 ||
      password === '' ||
      password.length < 5
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [
    gender,
    lastName,
    firstName,
    email,
    phoneNumber,
    password,
    confirmPassword,
  ]);

  const validator = useCallback(() => {
    if (isValid) {
      axiosRegister(
        user.gender,
        user.lastName,
        user.firstName,
        user.email,
        user.password,
        user.isBlind,
        user.phoneNumber,
        navigation,
      );
      console.log("user.isBlind" + user.isBlind);
    } else {
      alert('Veuillez remplir les informations nécessaires à votre inscription.');
    }
  }, [
    isValid,
    navigation,
    user.gender,
    user.firstName,
    user.isBlind,
    user.lastName,
    user.phoneNumber,
    user.email,
    user.password,
  ]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Nous rejoindre</Text>
        <Image
          accessible={true}
          accessibilityLabel="Logo"
          source={require('../../assets/close_eye.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.separator}>
        <Text style={styles.inputText}>GENRE</Text>
        <View style={styles.input}>
          <TextInput />
          <RNPickerSelect
            placeholder={{ label: 'GENRE', value: null }}
            autoCapitalize="none"
            onValueChange={gender => setGender(gender)}
            items={[
              { label: 'Femme', value: 'FEMALE' },
              { label: 'Homme', value: 'MALE' },
              { label: 'Non genré', value: 'NON_BINARY' },
            ]}
          />
        </View>
        <Text style={styles.inputText}>NOM</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="NOM"
          value={lastName}
          onChangeText={setLastName}
          accessible={true}
          accessibilityLabel="Nom"
        />
        <Text style={styles.inputText}>PRÉNOM</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="PRÉNOM"
          value={firstName}
          onChangeText={setFirstName}
          accessible={true}
          accessibilityLabel="Prénom"
        />
        <Text style={styles.inputText}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="VOTRE ADRESSE MAIL"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          accessible={true}
          accessibilityLabel="Adresse e-mail"
        />
        <Text style={styles.inputText}>NUMÉRO DE TÉLÉPHONE</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="VOTRE NUMÉRO DE TÉLÉPHONE"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          accessible={true}
          accessibilityLabel="Numéro de téléphone"
        />
        <Text style={styles.inputText}>MOT DE PASSE</Text>
        <TextInput
          style={styles.input}
          placeholder="VOTRE MOT DE PASSE"
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          accessible={true}
          accessibilityLabel="Mot de passe"
        />
        <Text style={styles.inputText}>CONFIRMATION DE MOT DE PASSE</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="CONFIRMATION MOT DE PASSE"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          accessible={true}
          accessibilityLabel="Confirmation du mot de passe"
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <ButtonDefault
          title={"Je m'inscris"}
          onPress={validator}
          accessible={true}
          accessibilityLabel="S'inscrire"
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterBlind;
