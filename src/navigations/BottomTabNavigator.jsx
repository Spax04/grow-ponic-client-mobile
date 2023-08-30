import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { ROUTES } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, StatisticScreen, SystemScreen } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import CustomTabBarButton from '../components/CustomTabBarButton';
import { COLORS } from '../constants';
import CustomTabBar from '../components/CustomTabBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName={ROUTES.HOME_TAB}
      screenOptions={({ route }) => ({

        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.white,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.HOME_TAB) {
            icon = focused ? 'md-home' : 'md-home-outline';
          } else if (route.name === ROUTES.SYSTEM_TAB) {
            icon = focused ? 'rose' : 'rose-outline';
          } else if (route.name === ROUTES.STATISTIC_TAB) {
            icon = focused ? 'stats-chart' : 'stats-chart-outline';
          }

          return <Ionicons name={icon} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.SYSTEM_TAB}
        component={SystemScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton route={ROUTES.SYSTEM_TAB} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={HomeScreen}
        options={{
          cardStyle: {
            backgroundColor: 'black',
         },
          tabBarLabel: 'Home',
          headerShown: true,
          headerTintColor:COLORS.white,
          headerStyle:{backgroundColor:COLORS.mainColor},
          title: 'Home',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          headerRight: () => {
            return (
              <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                  size={30}
                  color={COLORS.white}
                  style={{marginRight:10}}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.STATISTIC_TAB}
        component={StatisticScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton route={ROUTES.STATISTIC_TAB} {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderWidth: 0,
    bottom: 20,
    right:10,
    left:10,
    height: 62,
    elevation: 0, // Removies shadow on Android
  },
  tabBarItemStyle: {
    borderLeftWidth: 2,

    borderColor: 'black',
  },
});
