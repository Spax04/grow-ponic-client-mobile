import { StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';

const Weather = ({item}) => {
  return (
    <View style={styles.weekTempElement}>
      <Text style={styles.weekTempStyle}>{item.day.avgtemp_c} °C</Text>
      <Text style={styles.weekTempStyle}>{item.date}</Text>
      {item.daily_will_it_rain > 0 ? (
        <Text style={styles.weekTempStyle}>Rainy</Text>
      ) : (
        <></>
      )}
      <Text style={styles.weekTempStyle}>{item.day.condition.text}</Text>

      <Image
        source={{
          uri: `https:${item.day.condition.icon}`,
        }}
        style={{
          height: 64,
          width: 64,
        }}
      />
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  weekTempElement: {
    padding: 10,
  },
  weekTempStyle: { fontSize: 20 },
});
