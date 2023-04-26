import React, {useCallback, useState} from 'react';
import {SafeAreaView, View, Text, Image, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles/login_style';
import ButtonDefault from '../components/button';
import {axiosLogin} from '../api/userApi';

const Login = () => {
  const navigation = useNavigation();
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = useCallback(() => {
    axiosLogin(email, password, navigation);
  }, [email, password, navigation]);

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
        <View style={styles.separator}>
          <Text>VOTRE ADRESSE MAIL</Text>
          <TextInput
            autoCapitalize="none"
            placeholder="bonjour@bemyguide.fr"
            keyboardType="email-address"
            value={email}
            onChangeText={setMail}
          />
          <Text keyboardType="default">VOTRE MOT DE PASSE</Text>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="VOTRE MOT DE PASSE"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <ButtonDefault
            title="ME CONNECTER"
            onPress={() => postLogin(email, password)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
