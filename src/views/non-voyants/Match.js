import React, {Component, useCallback, useContext, useEffect, useState} from 'react';
import styles from '../../styles/LoginBindStyle';
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

  const Match = ({ route, navigation }) => {
    const routeParamsFromStation = JSON.parse(route.params.fromStation);
    console.log('ROUTPARAMFROMSTATION : ' + routeParamsFromStation);
    const routeParamsToStation = JSON.parse(route.params.toStation);
    console.log('ROUTPARAMTOSTATION : ' + routeParamsToStation);
 // const navigation = useNavigation();
  const [fromStation, setFromStation] = useState([]);
  const [toStation, setToStation] = useState([]);
  const [date, setDate] = useState();
  const [hours, setHours] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  
  const getMatch =  () => {



    // const config = {
    //   headers: {
    //     'Accept-Encoding': 'gzip, deflate, br'
    //   }};


  axios
    .get('http://localhost:8080/api/v1/routes/test', {

    })
    .then(function (response) {
        
        Alert.alert(' get response : ' + response.status);
    
    })
    .catch(function(error) {
      Alert.alert('Accept-Encoding status:'+ error);
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
          <Text >{routeParamsFromStation}</Text>
          <Text >À : </Text>
          <Text >{routeParamsToStation}</Text>
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
