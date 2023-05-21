import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {axiosProfile} from '../api/userApi';

export default function ProfileScreen() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBlind, setIsBlind] = useState('');
  const [id, setid] = useState('');

  const user = {
    id: id,
    lastName: lastName,
    firstName: firstName,
    email: email,
    password: password,
    isBlind: isBlind,
  };

  useEffect(() => {
    axiosProfile(id, firstName, lastName, email, password, isBlind);
  }, [email, firstName, id, isBlind, lastName, password]);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <FlatList
        style={styles.list}
        data={[
          {id: '0', title: 'identifiant', value: user.id},
          {id: '1', title: "Nom d'utilisateur", value: user.lastName},
          {id: '2', title: "Prénom d'utilisateur", value: user.firstName},
          {id: '3', title: 'Email', value: user.email},
          {id: '4', title: 'Status', value: user.isBlind},
          {
            id: '5',
            title: 'Mot de passe',
            value: user.password,
          },
        ]}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  title: {
    fontWeight: 'bold',
  },
  value: {
    marginTop: 5,
  },
});