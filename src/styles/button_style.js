import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    height: 50,
    width: 300,
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'RobotoMono-Medium',
    textAlign: 'center',
  },
});
