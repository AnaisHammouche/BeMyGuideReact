import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    width: '90%',
    padding: 40,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '30%',
  },
  containerTitle: {
    flex: 1,
    marginTop: 40,
  //  justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginTop: '30%',
    marginBottom: 20,
  },
  titleMatch: {
    fontFamily: 'RobotoMono-Bold',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  icon4: {
    width: 40,
    height: 40,
    marginVertical: 10,
  },
});

export default styles;
