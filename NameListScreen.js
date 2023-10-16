import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const NameListScreen = ({ navigation }) => {
    const names = [
        { id: 1, name: 'Name 1', dob: 'January 1, 1990', meaning: 'Meaning 1' },
        { id: 2, name: 'Name 2', dob: 'February 2, 1991', meaning: 'Meaning 2' },
      ];

  return (
    <View>
      <FlatList
        data={names}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() =>
            navigation.navigate('NameDetail', {
              name: item.name,
              dob: item.dob,
              meaning: item.meaning,
            })
          }
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NameListScreen;