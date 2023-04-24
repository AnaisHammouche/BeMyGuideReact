import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 0.6,
    justifyContent: 'space-between',
    marginTop: 50,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 30,
    textAlign: 'justify',
    
    //alignItems: 'space-around',
  },
  text: {
    marginTop: 35,
    textAlign: 'center',
  },
  input: {
    marginTop: 25,
    height: 40,
    margin: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  separator: {
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 30,
    height: 40,
    width: 350,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    height: 40,
    width: 200,
    marginTop: 60,
    justifyContent: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'RobotoMono-Medium',
    textAlign: 'center',
  }
});
