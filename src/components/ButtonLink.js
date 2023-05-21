import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ButtonLinkStyles} from '../styles/ButtonLinkStyle';

const ButtonLink = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={ButtonLinkStyles.button} onPress={onPress}>
        <Text style={ButtonLinkStyles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLink;
