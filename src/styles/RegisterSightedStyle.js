import {StyleSheet} from 'react-native';

export const RegisterSightedStyle = StyleSheet.create({
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
    marginBottom: 50,
    // alignItems: 'space-around',
  },
  separator: {
    // marginVertical: 50,
    // padding: 20,
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
