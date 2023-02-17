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
    //alignItems: 'space-around',
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
});
