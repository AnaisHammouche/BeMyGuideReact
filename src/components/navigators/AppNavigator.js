import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FormRouteBlind from '../../views/blind/formRouteBlind';
import Welcome from '../../views/welcome';
import Login from '../../views/login';
import Match from '../../views/blind/Match';
import RegisterBlind from '../../views/blind/registerBlind';
import Waiting from '../../views/waiting';
import DisplayAllMyRoutesBlind from '../../views/blind/DisplayAllMyRoutesBlind';
import ProfileScreen from '../../views/profile';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// Création d'un navigateur d'applications
const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        <Stack.Screen name="FormRouteBlind" component={FormRouteBlind} />
        <Stack.Screen name="RegisterBlind" component={RegisterBlind} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Waiting" component={Waiting} />
        <Stack.Screen
          name="DisplayAllMyRoutesBlind"
          component={DisplayAllMyRoutesBlind}
        />

        <Stack.Screen name="Tab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
