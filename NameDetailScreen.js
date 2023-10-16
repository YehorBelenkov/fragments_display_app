import React from 'react';
import { View, Text } from 'react-native';

const NameDetailScreen = ({ route }) => {
    const { name, dob, meaning } = route.params;
  
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Date of Birth: {dob}</Text>
        <Text>Meaning: {meaning}</Text>
      </View>
    );
  };

export default NameDetailScreen;