import React from 'react';
import { Image, View } from 'react-native';

const IconBottomBar = ({ image, focused }) => {
return (
<View>
<Image
source={image}
resizeMode="contain"
style={{
width: 25,
height: 25,
tintColor: focused ? '#27AE60' : '#748c94',
}}
accessible={true}
accessibilityLabel={focused ? 'Selected' : 'Not Selected'}
/>
</View>
);
};

export default IconBottomBar;