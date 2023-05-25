import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme.js';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //   justifyContent: 'space-between',
  },
  image: {
    flex: 1,
   // resizeMode: 'cover',
  //  justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 25,
    textAlign: 'center',
    // alignContent: 'space-between',
    color: colors_theme.txt_white,
  },
  title2: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 25,
    textAlign: 'center',
    // alignContent: 'space-between',
    color: colors_theme.txt_black,
  },
  titleContainer: {
   paddingTop: 120,
    marginVertical: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
  //  paddingTop: 120,
     marginVertical: 80,
     alignItems: 'center',
     justifyContent: 'center',
   },
  icon: {
   // marginHorizontal: 170,
    alignItems: 'center',
    tintColor: 'white',
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  icon2: {
    // marginHorizontal: 170,
     alignItems: 'center',
     tintColor: 'green',
     justifyContent: 'center',
     width: 50,
     height: 50,
     resizeMode: 'contain',
   },
  text: {
    fontFamily: 'RobotoMono-Medium',
    color: colors_theme.txt_white,
    textAlign: 'center',
    fontSize: 16,
  },
  BlackText: {
    marginTop: 10,
    fontFamily: 'RobotoMono-Medium',
    // color: colors_theme.txt_white,
    textAlign: 'center',
    fontSize: 16,
  },
  textConnect: {
    color: colors_theme.txt_white,
    fontFamily: 'RobotoMono-Medium',
    fontSize: 16,
    marginTop: 80,
  },
  connect: {
    textAlign: 'center',
    color: colors_theme.txt_white,
    fontSize: 16,
    fontFamily: 'RobotoMono-Bold',
  },
  button1: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: 260,
    // marginTop: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  button2: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: 260,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  button3: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 40,
    width: 130,
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  screen2: {
    flex: 1,
    //padding: 40,
  },
  container2: {
   // justifyContent: 'space-between',
    marginTop: 50,
    //flexDirection: 'column',
    alignItems: 'center',
  },
  icon3: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title2: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 30,
    marginBottom: 50,
    // alignItems: 'space-around',
  },
  rewardsContainer: {
    justifyContent: 'space-evenly',
     marginTop: 50,
     flexDirection: 'row',
     alignItems: 'center',
  },
  reward: {
    justifyContent: 'space-between',
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  disabledReward: {
    opacity: 0.5, // Réduit l'opacité pour griser l'élément
  },

  disabledButton: {
    backgroundColor: '#ccc', // Couleur de fond grise pour le bouton
    opacity: 0.5, // Réduit l'opacité pour griser le bouton
    // Ajoutez d'autres styles de désactivation du bouton si nécessaire
  },


});