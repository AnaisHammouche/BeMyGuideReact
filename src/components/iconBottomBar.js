import {Image, View} from 'react-native';

const iconBottomBar = ({image, focused}) => {
  return (
    <Image
      source={image}
      resizeMode="contain"
      style={{
        width: 25,
        height: 25,
        tintColor: {focused} ? '#27AE60' : '#748c94',
      }}
    />
  );
};

export default iconBottomBar;