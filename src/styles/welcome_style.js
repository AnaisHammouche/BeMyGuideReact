import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //   justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 25,
    textAlign: 'center',
    // alignContent: 'space-between',
    color: colors_theme.txt_white,
  },
  titleContainer: {
    paddingTop: 120,
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
    marginTop: 18,
  },
  connect: {
    textAlign: 'center',
    color: colors_theme.txt_white,
    fontSize: 12,
    fontFamily: 'RobotoMono-Bold',
  },
  button1: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: 250,
    // marginTop: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  button2: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: 250,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
