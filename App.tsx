import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/components/navigators/AppNavigator';



// const App = (props: { navigation: any; }) => {  
//   const navigation = props.navigation;
//   return (

//     <NavigationContainer>
//      <AppNavigator/>
//     </NavigationContainer>

//   );
// };

const App = () => {  

  return (

    <NavigationContainer>
     <AppNavigator/>
    </NavigationContainer>

  );
};

export default App;
