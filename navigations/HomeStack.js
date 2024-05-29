import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bottom from '../components/page01/Bottom01';
import Page01 from '../screens/page01/Page01';
import Page02 from '../screens/page02/Page02';
import Page02FlatList from '../components/page02/Body02FlatList';
import Page03 from '../screens/page03/Page03';
import Page05 from '../screens/page05/Page05';
import Book from '../screens/page04/Book';
import BookDetail from '../screens/page04/BookDetail';
import BookForm from '../screens/page04/BookForm';
import PostForm from '../screens/page04/PostForm';
import Page06 from '../screens/page06/Page06';
import PostDetail from '../screens/page04/PostDetail';
import HomeDetail from '../screens/page04/HomeDetail';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Page06">
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
        name="Book"
        component={Book}
        options={{ title: "4", headerShown: false }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{ title: "6", headerShown: false }}
      />
      <Stack.Screen
        name="BookForm"
        component={BookForm}
        options={{ title: "7", headerShown: false }}
      />
      <Stack.Screen
        name="PostForm"
        component={PostForm}
        options={{ title: "8", headerShown: false }}
      />
      <Stack.Screen
        name="Page05"
        component={Page05}
        options={{ title: "5", headerShown: false }}
      />
      <Stack.Screen
        name="Page06"
        component={Page06}
        options={{ title: "9", headerShown: false }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{ title: "Post Detail", headerShown: false }}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{ title: "Home Detail", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
