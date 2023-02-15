import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../styles/register_style';

const Register = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState('true');
  const user = {mail: mail, password: password};

  const newUser = async () => {
    try {
      await AsyncStorage.setItem(user.mail, user.password);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  useMemo(() => {
    if (
      password !== confirmPassword ||
      mail === '' ||
      password === '' ||
      password.length < 5
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [mail, password, confirmPassword]);

  const validator = useCallback(() => {
    if (isValid) {
      newUser();
      alert('Bienvenue, ravie de vous comptez parmis nous');
      navigation.navigate('Login');
    } else {
      alert('ils nous manquent des informations');
    }
  }, [isValid, user.mail]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text>
          
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
