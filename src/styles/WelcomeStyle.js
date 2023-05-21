import {StyleSheet} from 'react-native';
import {colorsTheme} from '../config/colorsTheme.js';

export const WelcomeStyle = StyleSheet.create({
  screen: {
    flex: 1,
    //   justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    // resizeMode: 'cover',
    //  justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 25,
    textAlign: 'center',
    // alignContent: 'space-between',
    color: colorsTheme.txt_white,
  },
  titleContainer: {
    paddingTop: 120,
    marginVertical: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    //  paddingTop: 120,
    marginVertical: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    // marginHorizontal: 170,
    alignItems: 'center',
    tintColor: 'white',
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'RobotoMono-Medium',
    color: colorsTheme.txt_white,
    textAlign: 'center',
    fontSize: 16,
  },
  textConnect: {
    color: colorsTheme.txt_white,
    fontFamily: 'RobotoMono-Medium',
    fontSize: 16,
    marginTop: 80,
  },
  connect: {
    textAlign: 'center',
    color: colorsTheme.txt_white,
    fontSize: 16,
    fontFamily: 'RobotoMono-Bold',
  },
  /* button1: {
    backgroundColor: colorsTheme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: 260,
    // marginTop: 30,
    justifyContent: 'center',
    borderRadius: 10,
  }, */
  /* button2: {
    backgroundColor: colorsTheme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: 260,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
  }, */
});
