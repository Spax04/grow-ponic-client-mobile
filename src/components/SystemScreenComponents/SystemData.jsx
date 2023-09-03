import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

const SystemData = ({name,data}) => {
  return (
    <View style={styles.systemData}>
      <Text style={styles.textStyle}>{name}:{data}</Text>
    </View>
  );
};

export default SystemData;

const styles = StyleSheet.create({
  systemData: {
   width:140,
    height: 80,
    backgroundColor: COLORS.lightBrown,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    borderColor: COLORS.brown,
    borderWidth: 2,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});
