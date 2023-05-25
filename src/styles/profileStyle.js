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
    padding: 5,
  },
  avatar: {
    width: 130,
    height: 130,
    tintColor: 'gray'
  },
  separator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    marginTop: 30,
    width: '85%',
    paddingLeft: 10,
    fontFamily: 'RobotoMono-Medium',
    color: 'grey',
  },
  input: {
    height: 30,
    width: '85%',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 10,
    fontFamily: 'RobotoMono-Medium',
    fontWeight: 'bold',
  },
});
