import React, {useCallback} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles/welcome_style';
import Rewards from './sighted/rewards';
import ProgressCircle from 'react-native-progress-circle'

const Welcome = props => {
  const {navigation} = props;

  const goToRegisterBlind = useCallback(() => {
    navigation.navigate('RegisterBlind');
  }, [navigation]);

  const goToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen2}>
    <View style={styles.container2}>
      <Text style={styles.title2}>Mes récompenses</Text>
      <Image
            source={require('../assets/close_eye.png')}
            style={styles.icon3}
          />
          
      
    </View>
    <View style= {styles.rewardsContainer}>
    <View style= {styles.reward}><ProgressCircle
            percent={15}
            radius={50}
            borderWidth={8}
            color='#22D197'
            shadowColor="#999"
            bgColor="#fff"
        >
          <Image
            source={require('../assets/coupe-vide.png')}
            style={styles.icon3}
          />
          
            <Text style={{ fontSize: 18 }}>{'15%'}</Text>
        </ProgressCircle>
        <Text>
            Récompense 1
          </Text></View>
          <View style= {styles.reward}>
            <ProgressCircle
            percent={100}
            radius={50}
            borderWidth={8}
            color='#22D197'
            shadowColor="#999"
            bgColor="#fff"
            
        >
    <Image
            source={require('../assets/coupe-pleine.png')}
            style={styles.icon3}
          />
          <Text style={{ fontSize: 18 }}>{'100%'}</Text>
          </ProgressCircle>
          <Text>
            Récompense 2
          </Text></View>
          </View>
  </SafeAreaView>
  )

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={require('../assets/main_aidant.png')}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Où tu iras, </Text>
          <Text style={styles.title}>nous irons aussi.</Text>
          <Image
            source={require('../assets/close_eye.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.buttonContainer}>

          <TouchableOpacity onPress={goToRegisterBlind} style={styles.button1}>
            <Text style={styles.connect}>
              {' '}
              ME FAIRE ACCOMPAGNER
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToRegister} style={styles.button2}>
            <Text style={styles.connect}>
              {' '}
              ACCOMPAGNER QUELQU'UN
            </Text>
          </TouchableOpacity>

          <Text style={styles.textConnect}>Vous avez déjà un compte ?</Text>
          <TouchableOpacity onPress={goToLogin} style={styles.button}>
            <Text style={styles.connect}> Connectez-vous</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
