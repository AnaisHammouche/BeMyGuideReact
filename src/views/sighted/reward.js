import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const RewardScreen = () => {
  const [rewards, setRewards] = useState([]);

  /* useEffect(() => {
    axios
      .get('https://myapi.com/rewards')
      .then(response => {
        setRewards(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); */

  const renderReward = ({item}) => (
    <View style={styles.rewardContainer}>
      <Text style={styles.rewardTitle}>{item.title}</Text>
      <Text style={styles.rewardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={rewards}
        renderItem={renderReward}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.rewardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default RewardScreen;
