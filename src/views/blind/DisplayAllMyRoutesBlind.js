import React from 'react';
import styles from '../../styles/displayAllMyRoutesBlindStyle';


import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
} from 'react-native';

const DisplayAllMyRoutesBlind = () => {
  // const navigation = useNavigation();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button}
            onPress={() => console.log('Bouton validé cliqué')}>
            <Text style={styles.connect} >
              VALIDER
            </Text>
          </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRed}
          onPress={() => console.log('bouton annulé cliqué')}>
          <Text  style={styles.connect} >ANNULER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DisplayAllMyRoutesBlind;
