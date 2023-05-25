import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {axiosAuthUser} from '../api/userApi';
import {axiosDeleteUser} from '../api/userApi';
import {ProfileStyles} from '../styles/profileStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonDefault from '../components/button';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/formRoute_style';
export default function ProfileScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState();

  useEffect(() => {
    userProfile();
  }, []);

  const userProfile = async () => {
    const token = await AsyncStorage.getItem('Token');
    console.log(' token ' + token);
    try {
      const response = await axiosAuthUser(token);
      setData(response);
      console.log('setData ' + response);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  console.log('voir data ' + JSON.stringify(data));

  if (!data) {
    return (
      <View style={ProfileStyles.container}>
        <Text>Chargement...</Text>
      </View>
    );
  }

  const deconnexionButton = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage vide');
      console.log('AsyncStorage : ' + JSON.stringify(AsyncStorage));
      navigation.navigate('Welcome');
    } catch (error) {
      console.log('Error lors du clear de l AsyncStorage: ', error);
    }
  };

  const deleteProfileButton = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      console.log('Token: ', token);
      await axiosDeleteUser(token);
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared');
      navigation.navigate('Welcome');
    } catch (error) {
      console.log('Error deleting profile: ', error);
    }
  };

  return (
    <SafeAreaView style={ProfileStyles.screen}>
      <View style={ProfileStyles.header}>
        <Image
          source={require('../assets/close_eye.png')}
          style={ProfileStyles.icon}
          accessible={true}
          accessibilityLabel="Logo"
        />
        <Text style={ProfileStyles.title}>Mon profil</Text>
      </View>
      <View style={ProfileStyles.containerAvatar}>
        <Image
          style={ProfileStyles.avatar}
          source={require('../../src/assets/unknownUser.png')}
          accessible={true}
          accessibilityLabel="Avatar"
        />
      </View>
      <View style={ProfileStyles.separator}>
        <Text
          style={ProfileStyles.inputText}
          accessible={true}
          accessibilityLabel="Mon nom">
          MON NOM
        </Text>
        <TextInput
          style={ProfileStyles.input}
          editable={false}
          placeholder={data.firstName + ' ' + data.lastName}
          placeholderTextColor={'black'}
          accessible={true}
          accessibilityLabel="Mon nom"
        />
        <Text
          style={ProfileStyles.inputText}
          accessible={true}
          accessibilityLabel="Mon adresse e-mail">
          MON ADRESSE EMAIL
        </Text>
        <TextInput
          style={ProfileStyles.input}
          editable={false}
          placeholder={data.email}
          placeholderTextColor={'black'}
          accessible={true}
          accessibilityLabel="Mon adresse e-mail"
        />
        <Text
          style={ProfileStyles.inputText}
          accessible={true}
          accessibilityLabel="Mon numéro de téléphone">
          MON NUMÉRO DE TÉLÉPHONE
        </Text>
        <TextInput
          style={ProfileStyles.input}
          editable={false}
          placeholder={data.phoneNumber}
          placeholderTextColor={'black'}
          secureTextEntry={true}
          accessible={true}
          accessibilityLabel="Mon numéro de téléphone"
        />

        <ButtonDefault
          title={'Se déconnecter'}
          onPress={deconnexionButton}
          accessibilityLabel="Déconnexion"
        />
        <TouchableOpacity
          style={styles.buttonRedProfile}
          onPress={deleteProfileButton}>
          <Text style={styles.buttonText}>Supprimer mon compte</Text>
        </TouchableOpacity>
        {/* <ButtonDefault title={'Supprimer mon compte'} onPress= {deleteProfileButton} accessibilityLabel="Supprimer"/> */}
        {/* <ButtonDefault title={'Modifier'} accessible={true} accessibilityLabel="Modifier" /> */}
      </View>
    </SafeAreaView>
  );
}
