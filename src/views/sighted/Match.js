import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/LoginBindStyle';
import displayStyles from '../../styles/displayAllMyRoutesBlindStyle';
import flatListStyles from '../../styles/flatListStyle';
import {
  AxiosMatchAuthUser,
  AxiosRouteGetById,
  AxiosValidateMatchRoutes,
} from '../../api/routeApi';

const Match = () => {
  const [data, setData] = useState('');
  //const [idSeeker, setIdSeeker] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getMatch();
  }, []);

  const getMatch = async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    console.log('route token ' + routeParamsToken);
    try {
      const response = await AxiosMatchAuthUser(routeParamsToken);
      const mapId = response.map(item => {
        console.log(item.idRouteSeeker);
        return item.idRouteSeeker;
      });
      const resId = await AxiosRouteGetById(routeParamsToken, mapId);
      setData(resId);
      //setIdSeeker(resId);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  console.log('voir Match ' + JSON.stringify(data));
  console.log('data match avant validated', data);

  const validatedMatch = async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    const put = await AxiosValidateMatchRoutes(routeParamsToken);
    setData(put);
    console.log('data match après validated', put);
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getMatch();
    }, 1000);
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Match(s) trouvé(s) !</Text>
      <Image />
      {/* <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={validatedMatch} />
        }>
        <Text style={styles.title}>Match(s) trouvé(s) !</Text>
        <Image />
        <View style={flatListStyles.container}>
          <View style={flatListStyles.container}>
            <Text style={displayStyles.text}>Départ : {data.fromStation}</Text>
            <Text style={displayStyles.text}>Arrivée : {data.toStation}</Text>
            <Text style={displayStyles.text}>Le : {data.dateRoute}</Text>
            <Text style={displayStyles.text}>À : {data.startingTime}</Text>
            <Text style={displayStyles.text}>
              Avec : {data.firstname} {data.lastname}
            </Text>
            <Text style={displayStyles.text}>
              Téléphone : {data.phoneNumber}
            </Text>
          </View>
          <View style={displayStyles.buttonContainer}>
            <TouchableOpacity
              style={displayStyles.button}
              onPress={validatedMatch}>
              <Text style={displayStyles.connect}>VALIDER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={displayStyles.buttonRed}
              onPress={() => console.log('bouton annulé cliqué')}>
              <Text style={displayStyles.connect}>ANNULER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={getMatch}
        overScrollMode="always"
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({item}) => {
          return (
            <View style={flatListStyles.container}>
              <View style={flatListStyles.container}>
                <Text style={displayStyles.text}>
                  Départ : {item.fromStation}
                </Text>
                <Text style={displayStyles.text}>
                  Arrivée : {item.toStation}
                </Text>
                <Text style={displayStyles.text}>Le : {item.dateRoute}</Text>
                <Text style={displayStyles.text}>À : {item.startingTime}</Text>
                <Text style={displayStyles.text}>
                  Avec : {item.firstname} {item.lastname}
                </Text>
                <Text style={displayStyles.text}>
                  Avec : {item.phoneNumber}
                </Text>
              </View>
              <View style={displayStyles.buttonContainer}>
                <TouchableOpacity
                  style={displayStyles.button}
                  onPress={validatedMatch}>
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

export default Match;
