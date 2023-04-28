import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, Text, View, Image, TextInput} from 'react-native';
import {styles} from '../../styles/registerBlindStyle';
import ButtonDefault from '../../components/button';
import {axiosRegister} from '../../api/userApi';

// registration page initiation
const RegisterBlind = () => {
  const navigation = useNavigation();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //const [gender, setGender] = useState('');
  const [isValid, setIsValid] = useState('true');
  const user = {
    lastName: lastName,
    firstName: firstName,
    email: email,
    password: password,
    isBlind: true,
    //gender: gender,
  };

  // initialization of conditions for registration
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

  //  Validation of registration, call of the axios function, with an alert for registration
  const validator = useCallback(() => {
    if (isValid) {
      axiosRegister(
        //user.gender,
        user.lastName,
        user.firstName,
        user.email,
        user.password,
        user.isBlind,
        navigation,
      );
      alert(
        'Bienvenue, ' + user.firstName + ' ravie de vous comptez parmis nous',
      );
      navigation.navigate('Login');
    } else {
      alert(
        'Veuillez remplir les informations nécessaires à votre inscription.',
      );
    }
  }, [
    isValid,
    navigation,
    user.firstName,
    //user.gender,
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
        {/* <View>
          <TouchableOpacity
            value="Femme"
            status={gender === 'Femme' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Femme')}
          />
          <Text>Femme</Text>
        </View> */}
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
          PRENOM
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="PRENOM"
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
