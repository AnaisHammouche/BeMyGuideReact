import React, { useCallback, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AxiosRoute, AxiosRouteGet } from '../../api/routeApi';
import  formRoutesStyles  from '../../styles/formRoute_style';
import BottomTabNavigator from '../../components/navigators/BottomTabNavigator';

const currentDate = new Date();
function addOneYear(date) {
date.setFullYear(date.getFullYear() + 1);
return date;
}
const maxDate = addOneYear(currentDate);

const FormRouteBlind = ({ navigation, route }) => {
const isBlind = JSON.parse(route.params.userIsBlind);
console.log('claire isBlind : ' + isBlind);
console.log('check type : ' + typeof isBlind);
const [fromStation, setFromStation] = useState();
const [toStation, setToStation] = useState();
const [dateRoute, setDate] = useState();
const [startingTime, setTime] = useState();
const [routeMateGender, setRouteMateGender] = useState();

const postRoute = useCallback(async () => {
const routeParamsToken = await AsyncStorage.getItem('Token');
console.log('route token' + routeParamsToken);
AxiosRoute(
fromStation,
toStation,
routeMateGender,
dateRoute,
startingTime,
routeParamsToken,
navigation,
);
}, [fromStation, toStation, routeMateGender, dateRoute, startingTime, navigation]);

// Affiche les options de genre pour l'accompagnant si l'utilisateur est aveugle
const RenderItem = () => {
if (isBlind) {
return (
<View style={formRoutesStyles.containerOfGender}>
<Text style={formRoutesStyles.text} className="item">
GENRE SOUHAITÉ DE L'ACCOMPAGNANT :
</Text>
<RNPickerSelect
placeholder={{
label: "Genre souhaité de l'accompagnant",
value: null,
}}
onValueChange={(routeMateGender) => setRouteMateGender(routeMateGender)}
items={[
{ label: 'Femme', value: 'FEMALE' },
{ label: 'Homme', value: 'MALE' },
{ label: 'Pas de préférence', value: '' },
]}
/>
</View>
);
} else {
return null;
}
};

return (
<SafeAreaView style={formRoutesStyles.safeArea}>
<View style={formRoutesStyles.container}>
<Text style={formRoutesStyles.title}>OÙ ALLEZ-VOUS ?</Text>
<Text style={formRoutesStyles.text}>STATION DE DÉPART</Text>
<TextInput
       style={formRoutesStyles.input}
       placeholder="Station de départ"
       keyboardType="default"
       value={fromStation}
       onChangeText={setFromStation}
       required
     />
         <Text style={formRoutesStyles.text}>STATION D'ARRIVÉE</Text>
    <TextInput
      style={formRoutesStyles.input}
      placeholder="Station d'arrivée"
      keyboardType="default"
      value={toStation}
      onChangeText={setToStation}
      required
    />
    <Text style={formRoutesStyles.text}>JOUR DE DÉPART</Text>
    <TextInput
      style={formRoutesStyles.input}
      placeholder="Date"
      keyboardType="default"
      value={dateRoute}
      onChangeText={setDate}
    />

    <Text style={formRoutesStyles.text}>HORAIRE DE DÉPART</Text>
    <TextInput
      style={formRoutesStyles.input}
      placeholder="Horaire de départ"
      keyboardType="default"
      value={startingTime}
      onChangeText={setTime}
    />

    <RenderItem />

    <TouchableOpacity
      style={formRoutesStyles.button}
      onPress={postRoute}
      onLongPress={() => console.log('pas de match désolé')}
    >
      <Text style={formRoutesStyles.buttonText}>VALIDER</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};

export default FormRouteBlind;