import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../../constants';
import { FontAwesome5 } from '@expo/vector-icons';
const News = ({ item }) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.contentInner}>
      <FontAwesome5 name="external-link-alt" size={20} color="white" />
        <Text style={{ fontSize: 20, color: COLORS.bgColor ,paddingLeft:15}}>
        {item.title}
        </Text>
      </View>
      <Text style={styles.textStyle}>{item.discription}</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  contentInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-around',
    backgroundColor: COLORS.darkColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  
  },container: {
    width: 300,
    backgroundColor: COLORS.lightBrown,
    borderRadius: 25,
    marginBottom:15
  },
  textStyle: {
    textAlign: 'center',

    padding: 25,
    fontSize: 15,
    color:'black'
  },
});
