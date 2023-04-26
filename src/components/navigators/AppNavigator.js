import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FormRouteBlind from '../../views/non-voyants/formRouteBlind';
import Welcome from '../../views/welcome';
import Register from '../../views/voyants/register';
import Login from '../../views/login';
import Match from '../../views/non-voyants/Match';
import RegisterBlind from '../../views/non-voyants/registerBlind';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Bienvenue"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="FormRouteBlind" component={FormRouteBlind} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterBlind" component={RegisterBlind} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Match" component={Match} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
