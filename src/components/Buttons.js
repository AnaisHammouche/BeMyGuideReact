import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ButtonStyle} from '../styles/ButtonStyle';

export const ButtonDefault = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={ButtonStyle.ButtonDefault} onPress={onPress}>
        <Text style={ButtonStyle.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const ButtonWelcome = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={ButtonStyle.buttonWelcome} onPress={onPress}>
        <Text style={ButtonStyle.connectWelcome}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const ButtonWelcome2 = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={ButtonStyle.buttonWelcome2} onPress={onPress}>
        <Text style={ButtonStyle.connectWelcome}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const ButtonDisplay = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={ButtonStyle.buttonDisplay} onPress={onPress}>
        <Text style={ButtonStyle.connect}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const ButtonDisplayRed = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={ButtonStyle.buttonDisplayRed} onPress={onPress}>
        <Text style={ButtonStyle.connect}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
