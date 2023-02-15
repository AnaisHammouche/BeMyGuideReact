import React, {Component, useCallback, useContext, useEffect, useState} from 'react';
import styles from '../../style/LoginBindStyle';
import {useNavigation} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';

  const LogInBlind = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  const postLogin = useCallback(async(email, password) => {

    axios
    .post("http://localhost:8080/api/v1/auth/authenticate", {
      email: email,
      password: password
    })
    .then(function (response) {
      if (response.status = "200") {
        //Alert.alert("reponse : " + JSON.stringify(response.data.token));
        //Alert.alert('coucou');
      navigation.navigate('FormRouteBlind');
      }
      
    })
    .catch(function(error) {
      Alert.alert('erreur : ' + JSON.stringify(error));
    });
    
  }, []);



  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>Ça faisait longtemps qu'on ne vous avait pas vu</Text>
        <View >
          <Text >VOTRE ADRESSE MAIL</Text>
          <TextInput
          placeholder='bonjour@bemyguide.fr'
            keyboardType="default"
           value={email}
           onChangeText={setEmail}
          />
          <Text keyboardType="default">
            VOTRE MOT DE PASSE
          </Text>
          <TextInput
          placeholder='**********'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity
        onPress={() => Alert.alert(JSON.stringify('email : ' + email + ' mdp : ' + password))}>
          <Text >
            ME CONNECTER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => postLogin(email, password) }>
          <Text >
            ME CONNECTER Ray
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



export default LogInBlind;
