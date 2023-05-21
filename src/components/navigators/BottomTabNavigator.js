import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DisplayAllMyRoutesBlind from '../../views/blind/DisplayAllMyRoutesBlind';
import FormRouteBlind from '../../views/blind/formRouteBlind';
import RewardScreen from '../../views/sighted/reward';
import ProfileScreen from '../../views/profile';
import {Image, View} from 'react-native';
import Login from '../../views/login';

const Tab = createBottomTabNavigator();

function MyTabs() {
return (
  <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
