import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/welcome_style';
import ProgressCircle from 'react-native-progress-circle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {axiosNumberOfRoutesDone} from '../../api/userApi';

const Rewards = () => {
  const [rewardsRouteNumbersPercent, setRewardsRouteNumbersPercent] =
    useState(0);
  const [dataNumber, setDataNumber] = useState(0);
  const [rewardClaimed, setRewardClaimed] = useState(false);


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
      setDataNumber(dataNumber);
      console.log('dataNumber : ' + dataNumber);
      console.log('DataNumber*25 : ' + dataNumber * 25);
      setRewardsRouteNumbersPercent(dataNumber * 25);
      console.log('dataNumber : ' + dataNumber);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const handleRewardClaim = () => {
    if (rewardsRouteNumbersPercent >= 100) {
      setRewardsRouteNumbersPercent(0);
    }
    setRewardClaimed(true);
    Alert.alert(
      "FONCEZ RÉCUPÉRER VOS -5% DE RÉDUCTION SUR VOTRE PASS NAVIGO À UN STAND RATP EN PRÉSENTANT VOTRE APPLICATION SUR L'ONGLET REWARDS !!!",
    );
  };

  const isButtonDisabled = dataNumber < 4 || rewardsRouteNumbersPercent < 100 || rewardClaimed;


  return (
    <SafeAreaView style={styles.screen2}>
      <View style={styles.container2}>
        <Image
          source={require('../../assets/close_eye.png')}
          style={styles.icon3}
        />
        <Text style={styles.title2}>Mes récompenses</Text>
      </View>

      <View style={styles.rewardsContainer}>
        {dataNumber > 4 &&
        rewardsRouteNumbersPercent >= 100 &&
        !rewardClaimed ? (
          <View style={styles.reward}>
            <ProgressCircle
              percent={rewardsRouteNumbersPercent}
              startFromZero={true}
              radius={50}
              borderWidth={8}
              color="#22D197"
              shadowColor="#999"
              bgColor="#fff">
              <Image
                source={require('../../assets/reward.png')}
                style={styles.icon3}
              />
              <Text style={{fontSize: 18}}>0%</Text>
            </ProgressCircle>
            <Text>Récompense</Text>
            <TouchableOpacity
              onPress={handleRewardClaim}
              disabled={isButtonDisabled}
              style={[styles.button3, rewardClaimed && styles.disabledButton]}>
              <Text style={styles.buttonText}>OBTENIR</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={[styles.reward, rewardClaimed && styles.disabledReward]}>
          <ProgressCircle
            percent={rewardsRouteNumbersPercent}
            startFromZero={true}
            radius={50}
            borderWidth={8}
            color="#22D197"
            shadowColor="#999"
            bgColor="#fff">
            <Image
              source={require('../../assets/reward.png')}
              style={styles.icon3}
            />
            <Text style={{fontSize: 18}}>{rewardsRouteNumbersPercent}%</Text>
          </ProgressCircle>
          <Text style={styles.BlackText}>Récompense</Text>
          <TouchableOpacity
            onPress={handleRewardClaim}
            disabled={isButtonDisabled}
            style={[styles.button3, rewardClaimed && styles.disabledButton]}>
            <Text style={styles.text}>OBTENIR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rewards;
