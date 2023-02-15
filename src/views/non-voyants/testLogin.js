import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const TestLogin = ({navigation, route}) => {
    return (
        <SafeAreaView>
        <Text> {route.params.name}
        </Text></SafeAreaView>
    );
};

export default TestLogin;