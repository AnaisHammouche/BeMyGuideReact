import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AccessibilityInfo } from 'react-native';
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

// Création d'un navigateur d'applications
const AppNavigator = () => {
const [screenReaderEnabled, setScreenReaderEnabled] = React.useState(false);

// Ajout de la fonction pour vérifier si le lecteur d'écran est activé en utilisant `AccessibilityInfo` et stocké l'état dans `screenReaderEnabled`.
// Cela peut être utilisé pour adapter davantage l'accessibilité de l'application en fonction de l'état du lecteur d'écran.
React.useEffect(() => {
const checkScreenReader = async () => {
const isEnabled = await AccessibilityInfo.isScreenReaderEnabled();
setScreenReaderEnabled(isEnabled);
};checkScreenReader();
}, []);

return (
<NavigationContainer independent={true}>
<Stack.Navigator
initialRouteName="Welcome"
screenOptions={{ headerShown: false }}
>
<Stack.Screen
name="Welcome"
component={Welcome}
options={{
accessibilityLabel: 'Welcome Screen',
}}
/>
<Stack.Screen
name="Profile"
component={ProfileScreen}
options={{
accessibilityLabel: 'Profile Screen',
}}
/>
<Stack.Screen
name="FormRouteBlind"
component={FormRouteBlind}
options={{
accessibilityLabel: 'Form for Blind Route',
}}
/>
<Stack.Screen
name="RegisterBlind"
component={RegisterBlind}
options={{
accessibilityLabel: 'Register Blind User',
}}
/>
<Stack.Screen
name="Login"
component={Login}
options={{
accessibilityLabel: 'Login Screen',
}}
/>
<Stack.Screen
name="Match"
component={Match}
options={{
accessibilityLabel: 'Match Screen',
}}
/>
<Stack.Screen
name="Waiting"
component={Waiting}
options={{
accessibilityLabel: 'Waiting Screen',
}}
/>
<Stack.Screen
name="DisplayAllMyRoutesBlind"
component={DisplayAllMyRoutesBlind}
options={{
accessibilityLabel: 'Display All My Routes for Blind',
}}
/>
<Stack.Screen
name="Tab"
component={BottomTabNavigator}
options={{
accessibilityLabel: 'Tab Navigator',
}}
/>
</Stack.Navigator>
</NavigationContainer>
);
};

export default AppNavigator;