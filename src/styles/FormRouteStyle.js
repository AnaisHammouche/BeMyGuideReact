import {StyleSheet} from 'react-native';

export const FormRouteStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 36,
  },

  text: {
    fontWeight: '700',
    fontFamily: 'RobotoMono-Medium',
  },

  input: {
    height: 40,
    width: '100%',
    marginTop: 10,
    marginBottom: 26,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontFamily: 'RobotoMono-Medium',
  },
  inputDate: {
    height: 40,
    width: '95%',
    marginTop: 10,
    marginBottom: 26,
    borderRadius: 5,
  },
  /* button: {
    backgroundColor: colorsTheme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
    fontFamily: 'RobotoMono-Medium',
  }, */

  /* connect: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    // fontSize: 12,
    marginHorizontal: 40,
    marginVertical: 10,
    height: 40,
    margin: 6,
    padding: 10,
    borderRadius: 5,
  }, */
});
