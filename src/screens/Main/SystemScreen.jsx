import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import { MaterialIcons } from '@expo/vector-icons';
import Plant from '../../components/Plant';

const plantDataMock = [
  {
    id: 1,
    name: 'Tomato',
    image:
      'https://static4.depositphotos.com/1017505/320/i/450/depositphotos_3201839-stock-photo-three-tomatoes.jpg',
    growingTime: '2 weeks',
  },
  {
    id: 2,
    name: 'Cabbage',
    image:
      'https://european-seed.com/wp-content/uploads/2022/02/GettyImages-523635727-696x696-1.jpg',
    growingTime: '1 weeks',
  },
  {
    id: 3,
    name: 'Pepper',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Red-peppers-afa27f8.jpg',
    growingTime: '3 weeks',
  },
];

const SystemScreen = () => {
  return (
    <View style={[globalStyles.container, { justifyContent: 'center' }]}>
      <ScrollView style={[globalStyles.tabScrollView, { width: 360 }]}>

          <Text style={styles.title}>My Hydroponic System</Text>

        <View style={styles.systemDiv}>
          <View style={styles.systemData}>
            <Text style={styles.textStyle}>pH:15</Text>
          </View>
          <View style={styles.systemData}>
            <Text style={styles.textStyle}>EC:12</Text>
          </View>
          <View style={styles.systemData}>
            <Text style={styles.textStyle}>ppm:17</Text>
          </View>
          <View style={styles.systemData}>
            <Text style={styles.textStyle}>sunlight:4 (hourse)</Text>
          </View>
          <View style={styles.systemData}>
            <Text style={styles.textStyle}>Wather Temp: 25 °C</Text>
          </View>
          <View style={styles.systemData}>
            <Text style={styles.textStyle}>Holes in use: 3/12</Text>
          </View>
        </View>

        <View style={styles.plantDiv}>
          <TouchableOpacity style={{ alignItems: 'center',marginBottom:10 }}>
            <MaterialIcons name="add-circle" size={55} color="green" />
          </TouchableOpacity>

          <FlatList
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={plantDataMock}
            renderItem={({ item }) => {
              return <Plant item={item} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SystemScreen;

const styles = StyleSheet.create({
  title:{fontSize:30,textAlign:"center",marginBottom:15},
  systemDiv: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  systemData: {
    flexBasis: '40%',
    height: 80,
    backgroundColor: COLORS.lightBrown,
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    borderColor: COLORS.brown,
    borderWidth: 2,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  plantDiv: {
    marginTop: 15,
  },
});
