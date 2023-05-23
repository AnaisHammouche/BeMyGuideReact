import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/welcome_style';
import ProgressCircle from 'react-native-progress-circle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {axiosNumberOfRoutesDone} from '../../api/userApi';

const Rewards = () => {
  const [rewardsRouteNumbers, setRewardsRouteNumbers] = useState(0);

  useEffect(() => {
    getRewardsRouteNumbers();
  }, []);

  const getRewardsRouteNumbers = async () => {
    const token = await AsyncStorage.getItem('Token');
    console.log('dans la var token' + token);
    try {
      const data = await axiosNumberOfRoutesDone(token);
      console.log(data);
      let dataNumber = Number(data);
      console.log('claire : ' + dataNumber * 25);

      setRewardsRouteNumbers(dataNumber * 25);
    //   if (dataNumber >=4) {
    //             console.log('4')
           
    //             return ( <View><Text>New view</Text></View>);
    //           } else {
    //             console.log('< 4')
    //           }
      
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  getRewardsRouteNumbers();
 

//   function ArrayRewards() {
//     if (dataNumber >=4) {
//         console.log('4')
//         return ( <View><Text>New view</Text></View>);
//       } else {
//         console.log('< 4')
//       }
//   }

  return (
    <SafeAreaView style={styles.screen2}>
      <View style={styles.container2}>
        <Text style={styles.title2}>Mes récompenses</Text>
        <Image
          source={require('../../assets/close_eye.png')}
          style={styles.icon3}
        />
      </View>

      <View style={styles.rewardsContainer}>
        <View style={styles.reward}>
          <ProgressCircle
            percent={rewardsRouteNumbers} //variable
            maxPercent={100}
            startFromZero="true"
            radius={50}
            borderWidth={8}
            color="#22D197"
            shadowColor="#999"
            bgColor="#fff">
            <Image
              source={require('../../assets/reward.png')}
              style={styles.icon3}
            />

            <Text style={{fontSize: 18}}>{rewardsRouteNumbers}% </Text>
          </ProgressCircle>
          <Text>Récompense</Text>
          <TouchableOpacity
          onPress={console.log('REWARD UTILISE')}
          >
          <Text style={styles.buttonText}>VALIDER</Text>
        </TouchableOpacity>
        </View>
        {rewardsRouteNumbers >= 4 ? (
        <View style={styles.reward}>
        <ProgressCircle
          percent={rewardsRouteNumbers} //variable
          maxPercent={100}
          startFromZero="true"
          radius={50}
          borderWidth={8}
          color="#22D197"
          shadowColor="#999"
          bgColor="#fff">
          <Image
            source={require('../../assets/reward.png')}
            style={styles.icon3}
          />

          <Text style={{fontSize: 18}}>{rewardsRouteNumbers}% </Text>
        </ProgressCircle>
        <Text>Récompense</Text>
        
      </View>
        ) : (
          <View>
            <Text>Less than 4</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Rewards;
