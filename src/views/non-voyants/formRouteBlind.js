import React from 'react';
import RNPickerSelect from "react-native-picker-select";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';




const FormRouteBlind = ({route, navigation}) => {
  const tokenForm = route.params;
 // console.warn('warn formroute' + JSON.stringify(getTokenData));
  return (
    <SafeAreaView>
    <View >
    <Text>Token actuel : {JSON.stringify(tokenForm)}</Text>
    <Text>DÉPART</Text>
    <TextInput
          placeholder="Station de départ"
        />

    <Text>ARRIVÉE</Text>
    <TextInput
          placeholder="Station d'arrivée"
        />
    <Text>JOURS DE DÉPART</Text>
    <TextInput
          placeholder="Date"
        />
    <Text>HORAIRE DE DÉPART</Text>
    <TextInput
          placeholder="Horaire de départ"
        />
    <Text>GENRE</Text>
    <RNPickerSelect
    placeholder={{ label: "Séléctionnez votre genre", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Femme", value: "Femme" },
                     { label: "Homme", value: "Homme" },
                     { label: "Non genré", value: "Non genré" },
                 ]}
             />
   
    </View>
    <Button
        title="VALIDER"
      />
    </SafeAreaView>
  );
};

  

export default FormRouteBlind;
