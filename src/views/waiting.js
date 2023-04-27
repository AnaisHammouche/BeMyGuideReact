import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from '../styles/waiting_style';

// //import Component from 'react-native-paper/lib/typescript/src/components/Typography/Text';
// import ButtonDefault from '../components/button';

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

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from 'react-native-navigation';

const Waiting = route => {
  const navigation = useNavigation();
  const [isHide, setIsHide] = useState(true);

  setTimeout(() => setIsHide(false), 1000);

  //  const routeParamsToken = route.params.token;

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

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
      <Image
            source={require('../assets/close_eye.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>
            Votre demande a bien été prise en compte. Vous recevrez une
            notification dès que nous aurons trouvé le match idéal !
          </Text>
        </View>
        <ImageBackground
        style={styles.image}
        source={require('../assets/mapstations.png')}>
        
      </ImageBackground>

      {/* {!isHide ? navigation.navigate('Match') : null} */}
    </SafeAreaView>
  );

  // return(
  // navigation.navigate('Match'))
};

export default Waiting;
