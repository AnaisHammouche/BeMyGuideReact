import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogInBlind from '../../views/non-voyants/LoginBlind';
import FormRouteBlind from '../../views/non-voyants/formRouteBlind';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Bienvenue">
        <Stack.Screen name="LogInBlind" component={LogInBlind} />
        <Stack.Screen name="FormRouteBlind" component={FormRouteBlind} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
