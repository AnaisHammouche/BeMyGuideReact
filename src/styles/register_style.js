import {StyleSheet} from 'react-native';


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
  },
  separator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    marginTop: 50,
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
});
