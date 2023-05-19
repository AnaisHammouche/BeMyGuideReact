import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/register_sighted_style';
import ButtonDefault from '../../components/button';
import RNPickerSelect from 'react-native-picker-select';

import {axiosRegister} from '../../api/userApi';

const Register = () => {
  const navigation = useNavigation();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [isValid, setIsValid] = useState('true');
  const user = {
    gender: gender,
    lastName: lastName,
    firstName: firstName,
    email: email,
    password: password,
    isBlind: false,
  };

  /* const newUser = async () => {
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
  }; */

  useMemo(() => {
    if (
      lastName === '' ||
      firstName === '' ||
      password !== confirmPassword ||
      email === '' ||
      password === '' ||
      password.length < 5
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [lastName, firstName, email, password, confirmPassword]);

  const validator = useCallback(() => {
    if (isValid) {
      axiosRegister(
        user.gender,
        user.lastName,
        user.firstName,
        user.email,
        user.password,
        user.isBlind,
        navigation,
      );
    } else {
      alert(
        'Veuillez remplir les informations nécessaires à votre inscriptions.',
      );
    }
  }, [
    isValid,
    navigation,
    user.firstName,
    user.gender,
    user.isBlind,
    user.lastName,
    user.email,
    user.password,
  ]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/close_eye.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>Nous rejoindre</Text>
      </View>
      <View style={styles.separator}>
        <View  style={styles.input}>
        <TextInput/><RNPickerSelect
          placeholder={{label: "GENRE", value: null}}
          autoCapitalize="none"
          onValueChange={gender => setGender(gender)}
          items={[
            {label: 'Femme', value: 'FEMALE'},
            {label: 'Homme', value: 'MALE'},
            {label: 'Non genré', value: 'NON_BINARY'},
          ]}
        /></View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="NOM"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="PRENOM"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="VOTRE ADRESSE MAIL"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="VOTRE MOT DE PASSE"
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
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

export default Register;