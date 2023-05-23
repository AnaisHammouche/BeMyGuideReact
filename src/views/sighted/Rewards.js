import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {styles} from '../../styles/welcome_style';
import ProgressCircle from 'react-native-progress-circle';

const Rewards = () => {
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
            percent={15}
            radius={50}
            borderWidth={8}
            color="#22D197"
            shadowColor="#999"
            bgColor="#fff">
            <Image
              source={require('../../assets/reward.png')}
              style={styles.icon3}
            />

            <Text style={{fontSize: 18}}>{'15%'}</Text>
          </ProgressCircle>
          <Text>Récompense 1</Text>
        </View>
        <View style={styles.reward}>
          <ProgressCircle
            percent={100}
            radius={50}
            borderWidth={8}
            color="#22D197"
            shadowColor="#999"
            bgColor="#fff">
            <Image
              source={require('../../assets/reward.png')}
              style={styles.icon3}
            />
            <Text style={{fontSize: 18}}>{'100%'}</Text>
          </ProgressCircle>
          <Text>Récompense 2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rewards;
