import {StyleSheet} from 'react-native';

export const DisplayStyle = StyleSheet.create({
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
  },

  input: {
    height: 40,
    width: '100%',
    marginTop: 10,
    marginBottom: 26,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 50,
    flex: 1,
    padding: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dateIcon: {
    position: 'absolute',
    right: -5,
    top: 4,
    marginLeft: 0,
  },
  dateInput: {
    borderColor: 'gray',
    alignItems: 'flex-start',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  placeholderText: {
    fontSize: 17,
    color: 'gray',
  },
  dateText: {
    fontSize: 17,
  },
});
