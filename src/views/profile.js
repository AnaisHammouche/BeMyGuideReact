import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {axiosAuthUser, axiosProfile} from '../api/userApi';
import ProfileStyles from '../styles/profile_style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    userProfile();
  }, []);

  const userProfile = async () => {
    const token = await AsyncStorage.getItem('Token');
    const idUser = await AsyncStorage.getItem('Id');
    console.log('user ' + idUser + ' token ' + token);
    try {
      const response = await axiosProfile(idUser);
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

  return (
    <View style={ProfileStyles.container}>
      <View style={ProfileStyles.header}>
        <Image
          style={ProfileStyles.avatar}
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        />
        <Text style={ProfileStyles.name}>{data.name}</Text>
        <Text style={ProfileStyles.email}>{data.email}</Text>
      </View>
      <FlatList
        style={ProfileStyles.list}
        data={data}
        renderItem={({item}) => (
          <View style={ProfileStyles.item}>
            <Text style={ProfileStyles.title}>{item.firstname}</Text>
            <Text style={ProfileStyles.value}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
