import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  photo: {
    marginTop: 30,
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  form: {
    marginTop: 30,
    backgroundColor: 'blanchedalmond',
    borderColor: 'black',
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    height: 50,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
  },
});
