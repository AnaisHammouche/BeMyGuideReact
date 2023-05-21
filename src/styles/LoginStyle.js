import {StyleSheet} from 'react-native';
import {colorsTheme} from '../config/colorsTheme.js';

export const LoginStyle = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 40,
    //justifyContent: 'space-evenly',
    marginTop: 50,
    //padding: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },

  icon: {
    width: 30,
    height: 30,
    // marginLeft: 30,
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 30,
    textAlign: 'justify',
  },

  smallContainer: {
    flex: 1,
    //  justifyContent: 'flex-start',
    marginTop: 60,
    width: '100%',
  },

  text: {
    width: '100%',
    fontWeight: 700,
    marginTop: 35,
    // textAlign: 'center',
  },

  input: {
    marginTop: 10,
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    padding: 10,
    borderRadius: 2,
    fontFamily: 'RobotoMono-Medium',
  },

  separator: {
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* button: {
    backgroundColor: colorsTheme.button_green,
    alignItems: 'center',
    height: 60,
    width: '100%',
    marginTop: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'RobotoMono-Medium',
    textAlign: 'center',
  }, */
});
