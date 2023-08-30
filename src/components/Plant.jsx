import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const Plant = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={{
          height: 74,
          width: 74,
         
        }}
      />
      <View>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Text style={styles.textStyle}>Growing time: {item.growingTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Plant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGreen,
    marginBottom:10,
    borderRadius:50,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    borderWidth:1,borderColor:'black'
  },

  textStyle: {
    color: 'white',
    fontSize:20,
    padding:5
  },

});
