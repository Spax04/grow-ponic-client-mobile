import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS, ROUTES } from '../constants';
import { HomeScreen, SystemScreen } from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import UserSettingsScreen from '../screens/Hamburger/UserSettingsScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GeneralSettingsScreen from '../screens/Hamburger/GeneralSettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  //const navigation = useNavigation()
  //useEffect(()=>{navigation},[])
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: COLORS.mainColor },
        headerTintColor: COLORS.white,
        drawerActiveBackgroundColor: COLORS.darkColor,
        drawerInactiveBackgroundColor: COLORS.lightGreen,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.white,
        drawerStyle: { backgroundColor: COLORS.bgColor },

        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.HOME_TAB)}
            >
              <Ionicons
                name="arrow-back"
                size={30}
                color={COLORS.white}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          );
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name={ROUTES.USER_SETTINGS}
        component={UserSettingsScreen}
        options={{
          title: 'User Settings',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={ROUTES.GENERAL_SETTINGS}
        component={GeneralSettingsScreen}
        options={{ title: 'General Settings',headerShown:true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
