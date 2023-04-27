import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {styles} from '../../styles/login_style';
// import {styles} from '../../styles/button_style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
} from 'react-native';

const DisplayAllMyRoutesBlind = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Vos trajets</Text>
        <Image
          source={require('../../assets/close_eye.png')}
          style={styles.icon}
        />

        <View style={styles.smallContainer}>
          <Text style={styles.text}>VOTRE ADRESSE MAIL</Text>
          <TextInput
            style={styles.input}
            //style={isValid ? styles.form : styles.formRed}
            placeholder="bonjour@bemyguide.fr"
            keyboardType="default"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.text} keyboardType="default">
            VOTRE MOT DE PASSE
          </Text>
          <TextInput
            style={styles.input}
            placeholder="**********"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/*   <TouchableOpacity
            onPress={() => Alert.alert(JSON.stringify('email : ' + email + ' mdp : ' + password))}>
            <Text >
              ME CONNECTER
            </Text>
          </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => postLogin(email, password)}>
          <Text style={styles.buttonText}>ME CONNECTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogInBlind;
