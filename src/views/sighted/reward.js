import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {RewardStyle} from '../../styles/RewardStyle';

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
    <View style={RewardStyle.rewardContainer}>
      <Text style={RewardStyle.rewardTitle}>{item.title}</Text>
      <Text style={RewardStyle.rewardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={RewardStyle.container}>
      <FlatList
        data={rewards}
        renderItem={renderReward}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={RewardStyle.rewardList}
      />
    </View>
  );
};

export default RewardScreen;
