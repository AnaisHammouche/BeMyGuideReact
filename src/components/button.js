import React from 'react';
import { View, TouchableOpacity, Text, AccessibilityInfo } from 'react-native';
import { styles } from '../styles/button_style.js';

const ButtonDefault = ({ title, onPress }) => {
const handleButtonPress = () => {
if (onPress) {
onPress();
}
};

return (
<View>
<TouchableOpacity
     style={styles.button}
     onPress={handleButtonPress}
     accessibilityRole="button"
     accessibilityLabel={title}
   >
<Text style={styles.buttonText}>{title}</Text>
</TouchableOpacity>
</View>
);
};

export default ButtonDefault;