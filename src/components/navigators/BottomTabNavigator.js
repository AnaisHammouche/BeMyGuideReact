import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DisplayAllMyRoutesBlind from '../../views/blind/DisplayAllMyRoutesBlind';
import FormRouteBlind from '../../views/blind/formRouteBlind.js';
import Rewards from '../../views/sighted/Rewards';
import { View, Image, Text } from 'react-native';
import ProfileScreen from '../../views/profile';
import { styles } from '../../styles/register_style';
import Match from '../../views/sighted/Match';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = ({ navigation, route }) => {
const isBlind = JSON.parse(route.params.userIsBlind);

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
      }}
    >
      {!isBlind ? (
        <>
          <Tab.Screen
            name="Route"
            component={FormRouteBlind}
            initialParams={{ isBlindUser: isBlind }}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/nav.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#27AE60' : '#748c94',
                    }}
                    accessibilityLabel="Recherche"
                  />
                  <Text style={styles.text}>Recherche</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Trajets"
            component={DisplayAllMyRoutesBlind}
            initialParams={{token: routeParamsToken}}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/close_eye.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#27AE60' : '#748c94',
                    }}
                    accessibilityLabel="Trajets"
                  />
                  <Text>Trajets</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Match"
            component={Match}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}>
                  <Image
                    source={require('../../assets/eye.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#27AE60' : '#748c94',
                    }}
                    accessibilityLabel="Match"
                  />
                  <Text style={styles.text}>Match</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Rewards"
            component={Rewards}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/reward.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#27AE60' : '#748c94',
                    }}
                    accessibilityLabel="Récompenses"
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
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/profil.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#27AE60' : '#748c94',
                    }}
                    accessibilityLabel="Profil"
                  />
                  <Text>Profil</Text>
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
            initialParams={{ isBlindUser: isBlind }}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/nav.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#27AE60' : '#748c94',
                    }}
                    accessibilityLabel="Recherche"
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
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/close_eye.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#27AE60' : '#748c94',
                    }}
                    accessibilityLabel="Trajets"
                  />
                  <Text>Trajets</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/profil.png')}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#27AE60' : '#748c94',
                    }}
                    accessibilityLabel="Profil"
                  />
                  <Text>Profil</Text>
                </View>
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
