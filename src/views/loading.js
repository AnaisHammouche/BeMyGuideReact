import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {LoadingStyle} from '../styles/LoadingStyle';

const LoadingScreen = () => {
  return (
    <View style={LoadingStyle.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={LoadingStyle.text}>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
