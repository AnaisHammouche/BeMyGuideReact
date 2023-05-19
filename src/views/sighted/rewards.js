import React, {useCallback, useState} from 'react';
import { Image, SafeAreaView, View, Text } from 'react-native';

const Rewards = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title2}>Mes récompenses</Text>
        <Image
          style={styles.icon}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default Rewards;
