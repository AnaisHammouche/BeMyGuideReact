
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// //import Component from 'react-native-paper/lib/typescript/src/components/Typography/Text';
// import ButtonDefault from '../components/button';
// import {styles} from '../styles/welcome_style';

// class Waiting extends Component {
  
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: 'Votre demande a bien été prise en compte. Vous recevrez une notification dès que nous aurons trouvé le match idéal !'
//         }
//         }
//         componentWillMount(){
//             console.log('First this called');
//           }
        
//           getData(){
//             setTimeout(() => {
//               console.log('Our data is fetched');
//               this.setState({
//                 data: 'Hello WallStreet'
//               })
//             }, 1000)
//           }
        
//           componentDidMount(){
//             this.getData();
//           }

//   return (
//     <SafeAreaView style={styles.screen}>
//       <ImageBackground source={require('../assets/main_aidant.png')}>
//         <View>
//             {this.state.date}
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   )
// }


import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from 'react-native-navigation';

const Waiting = (route) => {

    const navigation = useNavigation();
    const [isHide, setIsHide] = useState(true);

    setTimeout(() => setIsHide(false), 1000);

    const routeParamsToken = route.params.token;

    
    
    // super(props);
    // this.state = {
    //   data: 'Votre demande a bien été prise en compte. Vous recevrez une notification dès que nous aurons trouvé le match idéal !'
    // };
  
// const waiting2 = useCallback => {


// //   getData(){
// //     setTimeout(() => {
        
// //         navigation.navigate('Match')
// //     }, 1000)
// //   }

// //   componentDidMount(){
// //     // setTimeout(() => {this.navigationForm()}, 1000)
// //     this.getData();
// //   }

// // //   navigationForm() {
    
// // //     navigation.navigate('Match')
// // //   }

// }

    
    return(
        <SafeAreaView >
      <View>
      <Text>
      Votre demande a bien été prise en compte. Vous recevrez une notification dès que nous aurons trouvé le match idéal !
      </Text>
      {!isHide ? navigation.navigate('Match') : null}
    </View>
    </SafeAreaView>
    )

    return(
    navigation.navigate('Match'))
    };


export default Waiting;
