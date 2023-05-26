import React, {useEffect, useState} from 'react';
import displayStyles from '../../styles/displayAllMyRoutesBlindStyle';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {AxiosDoneRoutes, AxiosListRoutes} from '../../api/routeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import flatListStyles from '../../styles/flatListStyle';

const DisplayAllMyRoutesRoutesBlind = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getMatch();
  }, []);

  // Retrieve user's route
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

  // update route as DONE so that helper gets reward.
  const doneRoutes = async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    const done = await AxiosDoneRoutes(routeParamsToken);
    setData(done);
    setRefreshing(true);
    // Rafraîchir la liste en appelant à nouveau getMatch après un certain délai
    setTimeout(() => {
      setRefreshing(false);
      getMatch();
    }, 1000);
  };

  console.log('voir ' + JSON.stringify(data));

  // Component to display separation line
  const ItemSeparatorView = () => {
    return (
      // Item Separator
      <View style={{height: 2, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require('../../assets/close_eye.png')}
          style={displayStyles.icon}
        />
        <Text style={displayStyles.title}>Vos trajets</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={getMatch}
        overScrollMode="always"
        ItemSeparatorComponent={ItemSeparatorView}
        data={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => {
          if (item.routeStatus === 'PENDING') {
            return (
              <View style={flatListStyles.container}>
                <View style={flatListStyles.container}>
                  <Text style={displayStyles.text}>
                    Départ : {item.fromStation}
                  </Text>
                  <Text style={displayStyles.text}>
                    Arrivée : {item.toStation}
                  </Text>
                  <View style={displayStyles.dateContainer}>
                    <Text style={displayStyles.text}>
                      Le : {item.dateRoute}
                    </Text>
                    <Text style={displayStyles.textTime}>
                      À : {item.startingTime}
                    </Text>
                  </View>
                  <Text style={displayStyles.text}>
                    Statut : EN ATTENTE {/* {item.routeStatus} */}
                  </Text>
                </View>
                <View style={displayStyles.buttonContainer}>
                  <TouchableOpacity
                    style={displayStyles.button}
                    onPress={() => {
                      console.log('Bouton validé cliqué');
                    }}>
                    <Text style={displayStyles.connect}>VALIDER</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                      style={displayStyles.buttonRed}
                      onPress={() => console.log('bouton annulé cliqué')}>
                      <Text style={displayStyles.connect}>ANNULER</Text>
                    </TouchableOpacity> */}
                </View>
              </View>
            );
          } else if (item.routeStatus === 'ACCEPTED') {
            return (
              <View style={flatListStyles.container}>
                <View style={flatListStyles.container}>
                  <Text style={displayStyles.text}>
                    Départ : {item.fromStation}
                  </Text>
                  <Text style={displayStyles.text}>
                    Arrivée : {item.toStation}
                  </Text>
                  <View style={displayStyles.dateContainer}>
                    <Text style={displayStyles.text}>
                      Le : {item.dateRoute}
                    </Text>
                    <Text style={displayStyles.textTime}>
                      À : {item.startingTime}
                    </Text>
                  </View>
                  <Text style={displayStyles.text}>
                    Statut : CONFIRMÉ {/* {item.routeStatus} */}
                  </Text>
                  <Text style={displayStyles.text}>
                    Avec : {item.idRouteSeeker.firstname} {item.lastname}
                  </Text>
                  <Text style={displayStyles.text2}>
                    Fonctionnalité à venir
                  </Text>
                  <Text style={displayStyles.text}>
                    Numéro de téléphone : {item.phoneNumber}
                  </Text>
                  <Text style={displayStyles.text2}>
                    Fonctionnalité à venir
                  </Text>
                </View>
                <View style={displayStyles.buttonContainer}>
                  <TouchableOpacity
                    style={displayStyles.button}
                    onPress={() => {
                      doneRoutes();
                    }}>
                    <Text style={displayStyles.connect}>CONFIRMER</Text>
                  </TouchableOpacity>
                  <Text style={displayStyles.textExplication}>
                    Veuillez nous confirmer que le trajet a bien eu lieu avec
                    votre compagnon de voyage, afin que nous lui attribuions une
                    récompense.
                  </Text>
                  {/* <TouchableOpacity
                      style={displayStyles.buttonRed}
                      onPress={() => console.log('bouton annulé cliqué')}>
                      <Text style={displayStyles.connect}>ANNULER</Text>
                    </TouchableOpacity> */}
                </View>
              </View>
            );
          } else {
            return (
              <View style={flatListStyles.container}>
                <Text style={displayStyles.text}>
                  Vous n'avez pas encore effectué de demande de trajet
                </Text>
              </View>
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

export default DisplayAllMyRoutesRoutesBlind;
