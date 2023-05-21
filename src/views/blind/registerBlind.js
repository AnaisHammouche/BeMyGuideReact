import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, Text, View, Image, TextInput} from 'react-native';
import {RegisterStyle} from '../../styles/RegisterStyle';
import ButtonDefault from '../../components/Buttons';
import {axiosRegister} from '../../api/UserApi';

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
        //user.gender,
        user.lastName,
        user.firstName,
        user.email,
        user.password,
        user.isBlind,
        navigation,
      );
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
    <SafeAreaView style={RegisterStyle.screen}>
      <View style={RegisterStyle.container}>
        <Image
          source={require('../../assets/close_eye.png')}
          style={RegisterStyle.icon}
        />
        <Text style={RegisterStyle.title}>Nous rejoindre</Text>
      </View>
      <View style={RegisterStyle.separator}>
        {/* <View>
          <TouchableOpacity
            value="Femme"
            status={gender === 'Femme' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Femme')}
          />
          <Text>Femme</Text>
        </View> */}
        <Text style={RegisterStyle.inputText} keyboardType="default">
          NOM
        </Text>
        <TextInput
          style={RegisterStyle.input}
          autoCapitalize="none"
          placeholder="NOM"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={RegisterStyle.inputText} keyboardType="default">
          PRENOM
        </Text>
        <TextInput
          style={RegisterStyle.input}
          autoCapitalize="none"
          placeholder="PRENOM"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={RegisterStyle.inputText} keyboardType="default">
          E-MAIL
        </Text>
        <TextInput
          style={RegisterStyle.input}
          autoCapitalize="none"
          placeholder="VOTRE ADRESSE MAIL"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={RegisterStyle.inputText} keyboardType="default">
          MOT DE PASSE
        </Text>
        <TextInput
          style={RegisterStyle.input}
          placeholder="VOTRE MOT DE PASSE"
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={RegisterStyle.inputText} keyboardType="default">
          CONFIRMATION DE MOT DE PASSE
        </Text>
        <TextInput
          style={RegisterStyle.input}
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
