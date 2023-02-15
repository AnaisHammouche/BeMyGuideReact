import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import TestLogin from '../../views/non-voyants/testLogin';
import LogInBind from '../../views/non-voyants/LoginBind';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Bienvenue">
        <Stack.Screen name="LogInBind" component={LogInBind}/>
        <Stack.Screen name="TestLogin" component={TestLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
