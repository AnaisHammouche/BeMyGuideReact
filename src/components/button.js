import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/button.js';

const ButtonDefault = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonDefault;
