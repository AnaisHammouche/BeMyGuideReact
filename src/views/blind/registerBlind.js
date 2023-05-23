import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, Text, View, Image, TextInput} from 'react-native';
import {styles} from '../../styles/register_style';
import ButtonDefault from '../../components/button';

import postRegister, {axiosRegister} from '../../api/userApi';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

// Importation des dépendances nécessaires

const RegisterBlind = ({route}) => {
  const navigation = useNavigation();

  // Récupération de la valeur "isBlind" depuis les paramètres de la route
  const isBlind = JSON.parse(route.params.userIsBlind);

  // Déclaration des états utilisés dans le formulaire d'inscription
  const [gender, setGender] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState('true');

  // Création de l'objet "user" contenant les informations de l'utilisateur
  const user = {
    gender: gender,
    lastName: lastName,
    firstName: firstName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
    isBlind: isBlind,
  };

  // Utilisation du hook useMemo pour vérifier si les champs du formulaire sont valides
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

  // Fonction de validation du formulaire
  const validator = useCallback(() => {
    if (isValid) {
      // Appel de la fonction axiosRegister pour effectuer l'inscription
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
      console.log("user.isBlind" + user.isBlind)

    } else {
      alert(
        'Veuillez remplir les informations nécessaires à votre inscription.',
      );
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
          source={require('../../assets/close_eye.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.separator}>
        <Text style={styles.inputText}>GENRE</Text>
        <View style={styles.input}>
          <TextInput />
          <RNPickerSelect
            placeholder={{label: 'GENRE', value: null}}
            autoCapitalize="none"
            onValueChange={gender => setGender(gender)}
            items={[
              {label: 'Femme', value: 'FEMALE'},
              {label: 'Homme', value: 'MALE'},
              {label: 'Non genré', value: 'NON_BINARY'},
            ]}
          />
        </View>
        <Text style={styles.inputText} keyboardType="default">
          NOM
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="NOM"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={styles.inputText} keyboardType="default">
          PRÉNOM
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="PRÉNOM"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.inputText} keyboardType="default">
          E-MAIL
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="VOTRE ADRESSE MAIL"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.inputText} keyboardType="default">
          NUMÉRO DE TÉLÉPHONE
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="VOTRE NUMÉRO DE TÉLÉPHONE"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Text style={styles.inputText} keyboardType="default">
          MOT DE PASSE
        </Text>
        <TextInput
          style={styles.input}
          placeholder="VOTRE MOT DE PASSE"
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.inputText} keyboardType="default">
          CONFIRMATION DE MOT DE PASSE
        </Text>
        <TextInput
          style={styles.input}
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

export default RegisterBlind;
