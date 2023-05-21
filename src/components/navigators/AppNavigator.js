import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FormRouteBlind from '../../views/blind/FormRouteBlind';
import Welcome from '../../views/Welcome';
import Register from '../../views/sighted/Register';
import Login from '../../views/Login';
import Match from '../../views/blind/Match';
import RegisterBlind from '../../views/blind/RegisterBlind';
import Waiting from '../../views/Waiting';
import DisplayAllMyRoutesBlind from '../../views/blind/DisplayAllMyRoutesBlind';
import FormRouteV from '../../views/sighted/FormRouteV';
import DisplayAllMyRoutesV from '../../views/sighted/DisplayAllMyRoutesV';
import ProfileScreen from '../../views/Profile';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FormRouteBlind" component={FormRouteBlind} />
        <Stack.Screen name="FormRouteV" component={FormRouteV} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterBlind" component={RegisterBlind} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Waiting" component={Waiting} />
        <Stack.Screen
          name="DisplayAllMyRoutesBlind"
          component={DisplayAllMyRoutesBlind}
        />
        <Stack.Screen
          name="DisplayAllMyRoutesV"
          component={DisplayAllMyRoutesV}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
