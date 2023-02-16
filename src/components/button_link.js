import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/buttonLink_style.js';

const ButtonLink = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLink;
