import {StyleSheet} from 'react-native';
import {colors_theme} from '../config/colors_theme';

const flatListStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'yellow',
    padding: 20,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: 'yellow',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default flatListStyles;
