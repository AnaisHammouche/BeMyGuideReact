import {StyleSheet} from 'react-native';

export const WaitingStyles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    opacity: 0.33,
  },
  container: {
    padding: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    position: 'absolute',
    top: 300,
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'justify',
    fontFamily: 'RobotoMono-Medium',
    fontSize: 16,
  },

  icon: {
    alignItems: 'center',
    tintColor: 'green',
    justifyContent: 'center',
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
