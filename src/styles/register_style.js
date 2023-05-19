import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //padding: 40,
  },
  container: {
    // justifyContent: 'space-between',
    marginTop: 50,
    // flexDirection: 'column',
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
    // alignItems: 'space-around',
  },
  separator: {
    // marginVertical: 50,
    // padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    marginTop: 30,
    //marginLeft: 10,
    // height: 40,
    width: '85%',
    paddingLeft: 10,
    fontFamily: 'RobotoMono-Medium',
  },
  input: {
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
  button: {
    backgroundColor: 'green',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    height: 50,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    fontFamily: 'RobotoMono-Medium',
  },

  radioButtons: {
    color: 'green',
    flexDirection: 'row',    
  },
});
