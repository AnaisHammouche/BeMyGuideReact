import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    height: 70,
    width: 300,
    margin: 24,
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'RobotoMono-Medium',
  },
});
