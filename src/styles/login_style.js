import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
  container: {
    flex: 1,
    padding: 40,
    marginTop: 50,
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
  },
  
  smallContainer: {
    flex: 1,
    marginTop: 60,
    width: '100%',
  },

  text: {
    width: '100%',
    fontWeight: 700,
    marginTop: 35,
    fontFamily: 'RobotoMono-Medium',
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
 
  button: {
    backgroundColor: colors_theme.button_green,
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
  }
});
