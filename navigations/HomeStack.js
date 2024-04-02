import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bottom from '../components/page01/Bottom01';
import Page01 from '../screens/page01/Page01';
import Page02 from '../screens/page02/Page02';
import Page02FlatList from '../components/page02/Body02FlatList';
import Page03 from '../screens/page03/Page03';
import Page04 from '../screens/page04/Page04';


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Page01">
      <Stack.Screen
        name="Page01"
        component={Page01}
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="Page02"
        component={Page02}
        options={{ title: "2", headerShown: false }}
      />
      <Stack.Screen
        name="Page03"
        component={Page03}
        options={{ title: "3", headerShown: false }}
      />
      <Stack.Screen
        name="Page04"
        component={Page04}
        options={{ title: "4", headerShown: false }}
      />
    </Stack.Navigator>
  );
}