import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {AxiosListRoutes} from '../../api/RouteApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlatListStyle from '../../styles/FlatListStyle';
import {ButtonDisplay, ButtonDisplayRed} from '../../components/Buttons';

const DisplayAllMyRoutesV = () => {
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
            <View style={FlatListStyle.container}>
              <View style={FlatListStyle.container}>
                <Text>Date de création : {item.createdAt}</Text>
                <Text>Station de départ : {item.fromStation}</Text>
                <Text>Station d'arrivée : {item.toStation}</Text>
                <Text>Date : {item.dateRoute}</Text>
                <Text>Heure : {item.startingTime}</Text>
              </View>
              <ButtonDisplay
                title={'VALIDER'}
                onPress={() => console.log('Bouton validé cliqué')}
              />
              <ButtonDisplayRed
                title={'ANNULER'}
                onPress={() => console.log('bouton annulé cliqué')}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default DisplayAllMyRoutesV;
