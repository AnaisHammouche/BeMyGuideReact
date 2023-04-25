import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogInBlind from '../../views/blind/LoginBlind';
import FormRouteBlind from '../../views/blind/formRouteBlind';
import Welcome from '../../views/welcome';
import Register from '../../views/register';
import LoginBlind from '../../views/blind/LoginBlind';
import Match from '../../views/blind/Match';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Bienvenue" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="LogInBlind" component={LogInBlind} />
        <Stack.Screen name="FormRouteBlind" component={FormRouteBlind} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={LoginBlind} />
      <Stack.Screen name="Match" component={Match} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default AppNavigator;
