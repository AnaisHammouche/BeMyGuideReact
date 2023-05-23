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
  const [data, setData] = useState([]);

  useEffect(() => {
    getMatch();
  }, []);

  // Récupère les trajets de l'utilisateur
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

  // Composant pour afficher une ligne de séparation entre les éléments de la liste
  const ItemSeparatorView = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };

  return (
    <SafeAreaView>
      <Text style={displayStyles.title}>VOS TRAJETS</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({item}) => {
          return (
            <View style={flatListStyles.container}>
              <View style={flatListStyles.container}>
                <Text style={displayStyles.text}>Départ : {item.fromStation}</Text>
                <Text style={displayStyles.text}>Arrivée : {item.toStation}</Text>
                <Text style={displayStyles.text}>Le : {item.dateRoute}</Text>
                <Text style={displayStyles.text}>À : {item.startingTime}</Text>
              </View>
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
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default DisplayAllMyRoutesRoutesBlind;
