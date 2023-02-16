import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 35,
    marginTop: 90,
    textAlign: 'center',
    alignContent: 'space-between',
    color: colors_theme.txt_white,
  },
  separator: {
    marginVertical: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 170,
    alignItems: 'center',
    tintColor: 'white',
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'RobotoMono-Medium',
    color: colors_theme.txt_white,
    textAlign: 'center',
    fontSize: 16,
  },
  textConnect: {
    color: colors_theme.txt_white,
    fontFamily: 'RobotoMono-Medium',
    fontSize: 12,
  },
  connect: {
    color: colors_theme.txt_white,
    fontSize: 12,
    fontFamily: 'RobotoMono-Bold',
  },
});
