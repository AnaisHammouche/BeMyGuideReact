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

const DisplayAllMyRoutesV = () => {
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

  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.fromStation}</Text>
              <Text>{item.toStation}</Text>
            </View>
          );
        }}
      />
      <View style={displayStyles.buttonContainer}>
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
    </SafeAreaView>
  );
};

export default DisplayAllMyRoutesV;
