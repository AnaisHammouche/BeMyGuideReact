import React, {useEffect, useState} from 'react';
import displayStyles from '../../styles/displayAllMyRoutesBlindStyle';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import {AxiosListRoutes} from '../../api/routeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import flatListStyles from '../../styles/flatListStyle';

const DisplayAllMyRoutesRoutesBlind = () => {
  // const navigation = useNavigation();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    getMatch();
  }, []);

  const getMatch = async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    console.log('routeToken ' + routeParamsToken);
    try {
      const response = await AxiosListRoutes(routeParamsToken);
      setData(response);
      console.log('setData ' + response);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  console.log('voir ' + JSON.stringify(data[0]));

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({item}) => {
          return (
            <View style={flatListStyles.container}>
              <View style={flatListStyles.container}>
                <Text>Date de création : {item.createdAt}</Text>
                <Text>Station de départ : {item.fromStation}</Text>
                <Text>Station d'arrivée : {item.toStation}</Text>
                <Text>Date : {item.dateRoute}</Text>
                <Text>Heure : {item.startingTime}</Text>
              </View>
              <TouchableOpacity
                style={displayStyles.button}
                onPress={() => console.log('Bouton validé cliqué')}>
                <Text style={displayStyles.connect}>VALIDER</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={displayStyles.buttonRed}
                onPress={() => console.log('bouton annulé cliqué')}>
                <Text style={displayStyles.connect}>ANNULER</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default DisplayAllMyRoutesRoutesBlind;
