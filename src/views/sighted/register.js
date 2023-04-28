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
import postRegister, {axiosRegiter} from '../../api/userApi';

const Register = () => {
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
    isBlind: false,
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
      axiosRegiter(
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
        'Veuillez remplir les informations nécessaires à votre inscriptions.',
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
        {/* <TouchableOpacity onPress={() => setGender(!gender)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 4,
                borderWidth: 2,
                borderColor: gender ? '#007AFF' : '#C7C7CC',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {gender && (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 2,
                    backgroundColor: '#007AFF',
                  }}
                />
              )}
            </View>
            <Text style={{marginLeft: 8}}>Femme</Text>
          </View>
        </TouchableOpacity> */}
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
