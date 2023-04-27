import {StyleSheet} from 'react-native';
import {colorsTheme} from '../config/colorsTheme.js';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    color: colorsTheme.txt_white,
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
    color: colorsTheme.txt_white,
    textAlign: 'center',
    fontSize: 16,
  },
  textConnect: {
    color: colorsTheme.txt_white,
    fontFamily: 'RobotoMono-Medium',
    fontSize: 12,
    marginTop: 18,
  },
  connect: {
    textAlign: 'center',
    color: colorsTheme.txt_white,
    fontSize: 12,
    fontFamily: 'RobotoMono-Bold',
  },
  button1: {
    backgroundColor: colorsTheme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: 250,
    justifyContent: 'center',
    borderRadius: 10,
  },
  button2: {
    backgroundColor: colorsTheme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: 250,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
