import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS, ROUTES } from '../constants';
import { HomeScreen, SystemScreen } from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props}/>}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'green',
        drawerActiveTintColor: COLORS.white,
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{ title: 'Home' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
