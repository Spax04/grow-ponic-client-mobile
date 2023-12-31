import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ForgotPasswordScreen, LoginScreen, SignupScreen } from '../screens';
import { ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator(); // { Navigator, Screen, Group }

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerTintColor:'white',headerBackTitleVisible:false, headerStyle: { backgroundColor: 'blue' } }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={({route})=>({
          title:route.params.userId
        })}
      />
      <Stack.Screen name={ROUTES.SIGNUP} component={SignupScreen} />
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
