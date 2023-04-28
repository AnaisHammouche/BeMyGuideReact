import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';


export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    marginTop: 50,
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
    marginBottom: 50,
  },
  separator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  input: {
    marginTop: 20,
    marginBottom: 30,
    height: 40,
    width: '85%',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    fontFamily: 'RobotoMono-Medium',
  },
  formRed: {
    marginTop: 30,
    backgroundColor: 'blanchedalmond',
    borderColor: 'red',
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

});
