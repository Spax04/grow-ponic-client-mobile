import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigations/AuthNavigator';
import Toast from 'react-native-toast-message';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {

  let [fontLoaded] = useFonts({
    "Merriweather":require('./assets/fonts/MerriweatherSans-Regular.ttf'),
    'Quicksand-Regular':require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-SemiBold':require('./assets/fonts/Quicksand-SemiBold.ttf'),
  })

  if(!fontLoaded){
    return <AppLoading/>
  }
  return (
    <NavigationContainer >
      <AuthNavigator />
      <Toast/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
