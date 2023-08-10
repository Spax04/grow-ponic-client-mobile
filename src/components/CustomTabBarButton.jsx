import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS, ROUTES } from '../constants';

const CustomeTabBarButton = (props) => {
  const { children, accessibilityState, onPress, route } = props;

  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={[
              styles.svgGapFiller,
              { borderTopLeftRadius: route === ROUTES.SYSTEM_TAB ? 10 : 0 },
            ]}
          />
          <Svg width={71} height={58} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill="white"
            />
          </Svg>
          <View
            style={[
              styles.svgGapFiller,
              { borderTopRightRadius: route === ROUTES.STATISTIC_TAB ? 10 : 0 },
            ]}
          />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={styles.activeBtn}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          styles.inactiveBtn,
          {
            borderTopLeftRadius: route === ROUTES.SYSTEM_TAB ? 10 : 0,
            borderTopRightRadius: route === ROUTES.STATISTIC_TAB ? 10 : 0,
          },
        ]}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

export default CustomeTabBarButton;

const styles = StyleSheet.create({
  activeBtn: {
    position: 'absolute',
    top: -22,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveBtn: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapper: { flex: 1, alignItems: 'center' },
  svgGapFiller: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
