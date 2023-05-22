import {StyleSheet} from 'react-native';

export const ProfileStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 30,
    textAlign: 'justify',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50,
    marginTop: 40,
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    padding: 30,
  },
  containerAvatar: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
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
    color: 'grey',
  },
  input: {
    height: 40,
    width: '85%',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 10,
    fontFamily: 'RobotoMono-Medium',
    fontWeight: 'bold',
  },
});
