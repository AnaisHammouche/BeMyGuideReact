import PushNotification from 'react-native-push-notification';
import { useEffect } from 'react';

useEffect(() => {
    // Configuration de la bibliothèque de notifications push
    PushNotification.configure({
      // Configuration spécifique à iOS
  ios: {
    // Demande d'autorisation pour afficher des alertes, des badges et des sons
    requestPermissions: true,
  },

      // Gestion des notifications reçues en arrière-plan ou lorsqu'on est dans l'application
      onNotification: function (notification) {
        console.log('Notification reçue:', notification);
      },
  
      // Gestion des permissions de notification
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
  
      // Gestion de l'enregistrement du token de périphérique
      onRegister: function (token) {
        console.log('Token enregistré:', token);
      },
  
      // Gestion des erreurs de la bibliothèque de notifications
      onError: function (error) {
        console.error('Erreur de notification:', error);
      },
    });
  }, []);
  
  // Fonction pour envoyer une notification push
  const sendNotification = () => {
    PushNotification.localNotification({
      title: 'Titre de la notification',
      message: 'Contenu de la notification',
    });
  };
  
  // Exemple d'utilisation de la fonction sendNotification()
  sendNotification();
  