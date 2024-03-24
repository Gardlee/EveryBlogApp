import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page01 from './screens/page01/Page01';
import Page02 from './screens/page02/Page02';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';


export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
