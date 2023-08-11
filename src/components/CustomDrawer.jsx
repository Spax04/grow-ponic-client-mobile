import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { COLORS } from '../constants';

const { width } = Dimensions.get('screen');

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={require('../../assets/bg.jpeg')}
        style={{ width: 100, height: 140, flex: 1, width: '100%' }}
      >
        <Image
          source={require('../../assets/user.jpeg')}
          style={styles.userImg}
        />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 100 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 5,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 110 / 2 + 10,
  },
});
