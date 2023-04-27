/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';

function FormRouteV() {
  return (
    <SafeAreaView>
      <View>
        <Text>DÉPART</Text>
        <TextInput placeholder="Station de départ" />

        <Text>ARRIVÉE</Text>
        <TextInput placeholder="Station d'arrivée" />
        <Text>JOURS DE DÉPART</Text>
        <TextInput placeholder="Date" />
        <Text>HORAIRE DE DÉPART</Text>
        <TextInput placeholder="Horaire de départ" />
      </View>
      <Button title="VALIDER" />
    </SafeAreaView>
  );
}

export default FormRouteV;
