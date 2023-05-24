import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/LoginBindStyle';
import displayStyles from '../../styles/displayAllMyRoutesBlindStyle';
import flatListStyles from '../../styles/flatListStyle';
import {AxiosMatchAuthUser, AxiosValidateMatchRoutes} from '../../api/routeApi';

const Match = () => {
  let [data, setData] = useState([]);
  //const [refreshKey, setRefreshKey] = useState(0);
  // const [test, setTest] = useState([]);

  useEffect(() => {
    const getMatch = async () => {
      const routeParamsToken = await AsyncStorage.getItem('Token');
      //const value = route.params.idRoute;
      //console.log('idRoute ' + value.idRoute);
      console.log('route token ' + routeParamsToken);
      try {
        const response = await AxiosMatchAuthUser(routeParamsToken);
        setData(response);
        //const data = response.data[0];
        console.log('axiosRouteMatch ' + response);
      } catch (error) {
        console.log('Error: ', error);
      }
      //setRefreshKey(oldKey => oldKey + 1);
    };
    getMatch();
  }, [setData]);

  console.log('voir Match ' + JSON.stringify(data));
  console.log('data match avant validated' + data);

  const validatedMatch = async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    const put = await AxiosValidateMatchRoutes(routeParamsToken);
    setData(put);
    console.log('data match après validated' + data);
    //return validated;
  };

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>C'est un match !</Text>
        <Image></Image>
        <Text>Vos demandes de trajet</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          refreshing={true}
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
                  <Text style={displayStyles.text}>
                    À : {item.startingTime}
                  </Text>
                </View>
                <View style={displayStyles.buttonContainer}>
                  <TouchableOpacity
                    style={displayStyles.button}
                    onPress={() => {
                      validatedMatch();
                    }}>
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
        {/*  <View>
          <Text>Votre demande de trajet</Text>
          <Text>De : </Text>
          <Text>{data[0].fromStation}</Text>
          <Text>À : </Text>
          <Text>{data[0].toStation}</Text>
          <Text>Le : </Text>
          <Text>{data[0].dateRoute}</Text>
          <Text>À : </Text>
          <Text>{data[0].startingTime}</Text>
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
          {/* <Text >à été confirmée par {firstName}.</Text> */}
        {/* <Text >N'oubliez pas de le contacter afin de convenir d'un lieu de rendez-vous plus précis tel que le numéro d'entée de la station. </Text>
         */}
        {/* <View>
            <Image></Image>
            <Text>{firstName} {lastName}</Text>
            <Text>Accompagnateur</Text>
        <TouchableOpacity
        onPress={() => getMatch(fromStation,toStation)}>
          <Text >
            CHAT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => Alert.alert(JSON.stringify('num : ' + num ))}>
          <Text >
            TEL
          </Text>
        </TouchableOpacity>
        </View>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Match;
