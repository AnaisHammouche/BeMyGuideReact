import React, {Component, useCallback, useContext, useEffect, useState} from 'react';
import styles from '../../style/LoginBindStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import axios from 'axios';

  const Match = () => {
  const navigation = useNavigation();
  const [fromStation, setFromStation] = useState();
  const [toStation, setToStation] = useState();
  const [date, setDate] = useState();
  const [hours, setHours] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  
  const getMatch = () => {

   axios
    .get("http://localhost:8080/api/v1/routes/test", {
       params: { fromStation: fromStation,
        toStation: toStation
    }
    })
    .then(function (response) {
        setFromStation();
        setToStation();
        Alert.alert(' get response : ' + JSON.stringify(response.data));
    
    })
    .catch(function(error) {
      Alert.alert('get error : ' + JSON.stringify(error));
    })
    .then(function (){

    });
};



  return (
    <SafeAreaView style={styles.screen}>
      <View >
        <Text style={styles.title}>C'est un match !</Text><Image></Image>
        <View>
          <Text >Votre demande de trajet</Text>
          <Text >De : </Text>
          <Text >{fromStation}</Text>
          <Text >À : </Text>
          <Text >{toStation}</Text>
          <Text >Le : </Text>
          <Text >{date}</Text>
          <Text >À : </Text>
          <Text >{hours}</Text>
          <Text >à été confirmée par {firstName}.</Text>
          <Text >N'oubliez pas de le contacter afin de convenir d'un lieu de rendez-vous plus précis tel que le numéro d'entée de la station. </Text>
          
        <View>
            <Image></Image>
            <Text>{firstName} {lastName}</Text>
            <Text>Accompagnateur</Text>
        <TouchableOpacity
        onPress={() => getMatch(fromStation,toStation)}>
          <Text >
            CHAT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => Alert.alert(JSON.stringify('num : ' + num ))}>
          <Text >
            TEL
          </Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
    </SafeAreaView>
  )
};



export default Match;
