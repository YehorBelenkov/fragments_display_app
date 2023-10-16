import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NameListScreen from './NameListScreen';
import NameDetailScreen from './NameDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NameList">
        <Stack.Screen name="NameList" component={NameListScreen} />
        <Stack.Screen name="NameDetail" component={NameDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;