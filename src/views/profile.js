import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, SafeAreaView, TextInput} from 'react-native';
import {axiosAuthUser} from '../api/userApi';
import {ProfileStyles} from '../styles/profileStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonDefault from '../components/button';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

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
      
      // Ajoutez ici la logique pour supprimer l'utilisateur en base de données
      // Utilisez le token pour identifier l'utilisateur et effectuer la suppression
      
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
        />
        <Text style={ProfileStyles.title}>Mon profil</Text>
      </View>
      <View style={ProfileStyles.containerAvatar}>
        <Image
          style={ProfileStyles.avatar}
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        />
      </View>
      <View style={ProfileStyles.separator}>
        <Text style={ProfileStyles.inputText}>MON NOM</Text>
        <TextInput
          style={ProfileStyles.input}
          editable={false}
          placeholder={data.firstName + ' ' + data.lastName}
          placeholderTextColor={'black'}
        />
        <Text style={ProfileStyles.inputText}>MON ADRESSE EMAIL</Text>
        <TextInput
          style={ProfileStyles.input}
          editable={false}
          placeholder={data.email}
          placeholderTextColor={'black'}
        />
        <Text style={ProfileStyles.inputText}>MON MOT DE PASSE</Text>
        <TextInput
          style={ProfileStyles.input}
          editable={false}
          placeholder={data.password}
          placeholderTextColor={'black'}
          secureTextEntry={true}
        />
        {/* <ButtonDefault title={'Modifier'} /> */}
        <ButtonDefault title={'Se déconnecter'} onPress= {deconnexionButton}/>
        <ButtonDefault title={'Supprimer mon compte'} onPress= {deleteProfileButton}/>
      </View>
    </SafeAreaView>
  );
}