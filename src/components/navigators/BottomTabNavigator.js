import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DisplayAllMyRoutesBlind from '../../views/blind/DisplayAllMyRoutesBlind';
import FormRouteBlind from '../../views/blind/formRouteBlind.js';
import Rewards from '../../views/sighted/Rewards';
import {View, Image, Text} from 'react-native';
import ProfileScreen from '../../views/profile';
import {styles} from '../../styles/register_style';

const Tab = createBottomTabNavigator();
// const isBlind = JSON.parse(route.params.userIsBlind);
// console.log('isBlindTAB : ' + isBlind)

const BottomTabNavigator = ({navigation, route}) => {
  const isBlind = JSON.parse(route.params.userIsBlind);

 /*  function Item(userIsBlind) {
    userIsBlind = isBlind;
    if (!userIsBlind) {
      console.log('inside function' + userIsBlind);
      return (
        
        <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/reward.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#27AE60' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      )
    } else {
      return null;
    }
  } */

  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 25,
          elevation: 0,
          height: 90,
        },
        headerShown: false,
      }}>
        {!isBlind ? (
          <>
      <Tab.Screen
        name="Route"
        component={FormRouteBlind}
        initialParams={{isBlindUser: isBlind}}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/nav.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#27AE60' : '#748c94',
                }}
              />
               <Text style={styles.text}>Recherche</Text>
       
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trajets"
        component={DisplayAllMyRoutesBlind}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/close_eye.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#27AE60' : '#748c94',
                }}
              />
               <Text style={styles.text}>Trajets</Text>
       
            </View>
          ),
        }}
      />
      {/* <Item userIsBlind={true} /> */}

      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/reward.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#27AE60' : '#748c94',
                }}
              />
               <Text style={styles.text}>Rewards</Text>
       
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // tabBarLabel: ({focused}) => (   <Text  style={{
          //   width: 25,
          //   height: 25,
          //   tintColor: focused ? '#27AE60' : '#748c94',
          // }} >Profil</Text>
          // ),
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/profil.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#27AE60' : '#748c94',
                }}
              />
               <Text >Profil</Text>
       
            </View>
          ),
        }}
      />
</>
        ) : (
          <>
          <Tab.Screen
        name="Route"
        component={FormRouteBlind}
        initialParams={{isBlindUser: isBlind}}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/nav.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#27AE60' : '#748c94',
                }}
              />
               <Text style={styles.text}>Recherche</Text>
       
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trajets"
        component={DisplayAllMyRoutesBlind}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/close_eye.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#27AE60' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      {/* <Item userIsBlind={true} /> */}

     
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/profil.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#27AE60' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
          
          </>)}
      {/* <Tab.Screen name="FormRouteBlind" component={FormRouteBlind} initialParams={{isBlindUser: isBlind}}/>
     <Tab.Screen name="Routes" component={DisplayAllMyRoutesBlind} /> */}
    </Tab.Navigator>
       
  );
}

export default BottomTabNavigator;
