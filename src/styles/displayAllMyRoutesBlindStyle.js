import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

const displayStyles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  // },

  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 30,
    textAlign: 'center',
    //marginLeft: 20,
    marginBottom: 36,
  },

  icon: {
    // display: inline block react native
    marginTop: 40,
    marginLeft: 180,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'RobotoMono-Bold',
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 10,
    marginLeft: 10,
  },
  text2: {
    fontFamily: 'RobotoMono-Bold',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 10,
    marginLeft: 10,
    color: 'grey',
  },
  textExplication: {
    fontFamily: 'RobotoMono-Bold',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 10,
    marginHorizontal: 20,
    color: 'green',
    textAlign: 'justify',
    marginTop: 10,
  },
  redText: {
    fontFamily: 'RobotoMono-Bold',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
    //marginLeft: 10,
    color: 'orange',
    textAlign: 'justify',
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
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  textTime: {
    fontFamily: 'RobotoMono-Bold',
    marginLeft: 30,
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonContainer2: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  button: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    // padding: 4,
    height: 40,
    width: '50%',
    marginTop: 10,
    justifyContent: 'center',
    //  alignItems: 'space-between',
    borderRadius: 10,
  },

  buttonRed: {
    backgroundColor: 'red',
    alignItems: 'center',
    // padding: 4,
    height: 40,
    width: '45%',
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },

  connect: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 40,
    // marginVertical: 10,
    height: 40,
    //  margin: 6,
    padding: 10,
    borderRadius: 5,
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

export default displayStyles;
