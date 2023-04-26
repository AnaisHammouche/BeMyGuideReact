import {StyleSheet} from 'react-native';

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
