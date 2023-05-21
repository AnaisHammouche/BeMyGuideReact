import {StyleSheet} from 'react-native';

export const RewardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  rewardContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rewardDescription: {
    fontSize: 16,
    color: '#555',
  },
});
