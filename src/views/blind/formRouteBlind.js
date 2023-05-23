import React, {useCallback, useState,useEffect} from 'react';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

//import {DatePickerIOSComponent} from '@react-native-community/datetimepicker'

//import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/formRoute_style';
import {AxiosRoute, AxiosRouteGet} from '../../api/routeApi';
//import DatePicker from 'react-native-datepicker';
//import TimePicker from 'react-native-simple-time-picker';
import BottomTabNavigator from '../../components/navigators/BottomTabNavigator';
import { locale } from 'moment';

const currentDate = new Date();
function addOneYear(date) {
  date.setFullYear(date.getFullYear() + 1);
  return date;
}
const maxDate = addOneYear(currentDate);
//import styles from '../../styles/formRoute_style';
//import {AxiosRoute} from '../../api/routeApi';

const FormRouteBlind = ({navigation, route}) => {
  const isBlind = JSON.parse(route.params.isBlindUser);
  console.log('claire isBlind : ' + isBlind);
  console.log('check type : ' + typeof isBlind);
  const [fromStation, setfromStation] = useState();
  const [toStation, setToStation] = useState();
  const [dateRoute, setDate] = useState();
  const [startingTime, setTime] = useState();
  const [routeMateGender, setRouteMateGender] = useState();
  const [permissions, setPermissions] = useState({});
  console.log();

  const postRoute = useCallback(async () => {
    const routeParamsToken = await AsyncStorage.getItem('Token');
    console.log('route token' + routeParamsToken);
    AxiosRoute(
      fromStation,
      toStation,
      routeMateGender,
      dateRoute,
      startingTime,
      routeParamsToken,
      navigation,
    );
  }, [
    fromStation,
    toStation,
    routeMateGender,
    dateRoute,
    startingTime,
    navigation,
  ]);

  function Item(userIsBlind) {
    userIsBlind = isBlind;
    if (userIsBlind) {
      console.log('inside function' + userIsBlind);
      return (
        <View style={styles.containerOfGender}>
          <Text style={styles.text} className="item">
            GENRE SOUHAITÉ DE L'ACCOMPAGNANT :
          </Text>
          <RNPickerSelect
            placeholder={{
              label: "Genre souhaité de l'accompagnant",
              value: null,
            }}
            onValueChange={routeMateGender =>
              setRouteMateGender(routeMateGender)
            }
            items={[
              {label: 'Femme', value: 'FEMALE'},
              {label: 'Homme', value: 'MALE'},
              {label: 'Pas de préférence', value: ''},
            ]}
          />
        </View>
      );
    } else {
      return null;
    }
  }

// const configurePushNotifications = () => {
//   PushNotification.configure({
//     // Gestionnaire appelé lorsque la notification est reçue
//     onNotification: function(notification) {
//       console.log('Notification reçue:', notification);
//     },
//     // Gestionnaire appelé lorsque l'utilisateur appuie sur la notification
//     onAction: function(notification) {
//       console.log('Action de notification:', notification.action);
//     },
//     // Permissions requises pour afficher des notifications
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
//     // Demande d'autorisation de notifications à l'utilisateur
//     requestPermissions: true,
//   });
  
//   // Envoie une notification push
//   const sendNotification = () => {
//     PushNotification.localNotification({
//       title: 'Ma première notification push',
//       message: 'Ceci est un exemple de notification push',
//     });
//   };
// }
//   useEffect(() => {
//     configurePushNotifications();
//   }, []);

 /**
   * By calling this function, notification with category `userAction` will have action buttons
   */
 const setNotificationCategories = () => {
 console.log("dans la notif")
  PushNotificationIOS.setNotificationCategories([
    {
      id: 'userAction',
      actions: [
        {id: 'open', title: 'Open', options: {foreground: true}},
        {
          id: 'ignore',
          title: 'Desruptive',
          options: {foreground: true, destructive: true},
        },
        {
          id: 'text',
          title: 'Text Input',
          options: {foreground: true},
          textInput: {buttonTitle: 'Send'},
        },
      ],
    },
  ]);
};



useEffect(() => {
  const type = 'notification';
  PushNotificationIOS.addEventListener(type, onRemoteNotification);
  return () => {
    PushNotificationIOS.removeEventListener(type);
  };
}, []);

const onRemoteNotification = (notification) => {
  console.log('dans le remote notif')
  const isClicked = notification.getData().userInteraction === 1;

  if (isClicked) {
    // Navigate user to another screen
    console.log('dans le if cliqué')
  } else {
    // Do something else with push notification
    console.log('dans le else')
  }
  // Use the appropriate result based on what you needed to do for this notification
  const result = PushNotificationIOS.FetchResult.NoData;
  notification.finish(result);
};


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>OÙ ALLEZ-VOUS ?</Text>
        <Text style={styles.text}>STATION DE DÉPART</Text>
        <TextInput
          style={styles.input}
          placeholder="Station de départ"
          keyboardType="default"
          value={fromStation}
          onChangeText={setfromStation}
          required
        />

        <Text style={styles.text}>STATION D'ARRIVÉE</Text>
        <TextInput
          style={styles.input}
          placeholder="Station d'arrivée"
          keyboardType="default"
          value={toStation}
          onChangeText={setToStation}
          required
        />
        <Text style={styles.text}>JOUR DE DÉPART</Text>
        <TextInput
          style={styles.input}
          placeholder="Date"
          keyboardType="default"
          value={dateRoute}
          onChangeText={setDate}
        />
        {/* <Text style={styles.text}>JOUR DE DÉPART</Text> */}
        {/* <DatePicker
        style={styles.inputDate}
          date={currentDate}
          mode="date"
          placeholder="Sélectionnez un jour de départ"
          format="DD/MM/YYYY"
          minDate={currentDate}
          maxDate={maxDate}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          
          customStyles={{
          
            dateIcon: {
              right: -10,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
             // marginTop: 15,
              borderColor : "black",
            //  alignItems: "flex-start",
             // borderWidth: 0,
              width: '300%',
              //borderBottomWidth: 1,
              borderRadius: 5,
            },
            placeholderText: {
              padding: 10, 
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        /> */}

        <Text style={styles.text}>HORAIRE DE DÉPART</Text>
        <TextInput
          style={styles.input}
          placeholder="Horaire de départ"
          keyboardType="default"
          value={startingTime}
          onChangeText={setTime}
        />

        <Item userIsBlind={true} />

        {/* <Text style={styles.text}>Genre souhaité de votre accompagnant</Text> */}

        <TouchableOpacity
          style={styles.button}
          onPress={setNotificationCategories}
          // onLongPress={sendNotification}
          >
          <Text style={styles.buttonText}>VALIDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FormRouteBlind;
