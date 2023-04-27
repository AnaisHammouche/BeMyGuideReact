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
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginTop: '30%',
    marginBottom: 20,
  },
});

export default styles;
