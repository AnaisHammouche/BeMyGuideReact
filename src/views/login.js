import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles/login_style';
import ButtonDefault from '../components/button';
import {axiosLogin} from '../api/userApi';

// initiation of the login page
const Login = () => {
  const navigation = useNavigation();
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  //  Call of the axios function
  const postLogin = useCallback(() => {
    axiosLogin(email, password, navigation);
  }, [email, password, navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Cela faisait longtemps qu'on ne vous avait pas vu.
        </Text>
        <Image
          source={require('../assets/close_eye.png')}
          style={styles.icon}
        />
        <View style={styles.smallContainer}>
          <Text style={styles.text}>VOTRE ADRESSE MAIL</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="bonjour@bemyguide.fr"
            keyboardType="email-address"
            value={email}
            onChangeText={setMail}
          />
          <Text style={styles.text} keyboardType="default">
            VOTRE MOT DE PASSE
          </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="VOTRE MOT DE PASSE"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => postLogin(email, password)}>
          <Text style={styles.buttonText}>ME CONNECTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
