import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React from 'react';
import globalStyles from '../../styles/globalStyles';

const StatisticScreen = () => {
  return (
    <View style={[globalStyles.container, { justifyContent: 'center' }]}>
      <ScrollView style={[globalStyles.tabScrollView, { width: 360 }]}>
        <Text>StatisticScreen</Text>
      </ScrollView>
    </View>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({});
