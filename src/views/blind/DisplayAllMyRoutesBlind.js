import React, {useEffect, useState} from 'react';
import displayStyles from '../../styles/displayAllMyRoutesBlindStyle';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import {AxiosListRoutes} from '../../api/routeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DisplayAllMyRoutesBlind = () => {
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
    const response = await AxiosListRoutes(routeParamsToken);
    setData(response.data);
    console.log('setData ' + setData(response.data));
  };

  console.log('data : ' + data);
  const renderListItem = ({item}) => {
    <View>
      <Text>{item.createdAt}</Text>
      <Text>{item.fromStation}</Text>
      <Text>{item.toStation}</Text>
      <Text>{item.dateRoute}</Text>
      <Text>{item.startingTime}</Text>
    </View>;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        extraData={data}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
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

export default DisplayAllMyRoutesBlind;
