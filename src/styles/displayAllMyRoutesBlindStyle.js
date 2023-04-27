import React from 'react';

import {StyleSheet} from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';
import {colors_theme} from '../config/colors_theme.js';


const styles = StyleSheet.create({
  
  safeArea:{
    flex: 1,
  },

  container:{
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
    marginTop :10,
    marginBottom: 26,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
    button: {
    backgroundColor: colors_theme.button_green,
    alignItems: 'center',
    padding: 4,
    height: 50,
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  
  connect: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 40,
    marginVertical: 10,
    height: 40,
    margin: 6,
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
    borderColor : "gray",
    alignItems: "flex-start",
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  placeholderText: {
    fontSize: 17,
    color: "gray"
  },
  dateText: {
    fontSize: 17,
  }
})

export default styles;