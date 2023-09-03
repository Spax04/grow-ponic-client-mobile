import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import globalStyles from '../../styles/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import { MaterialIcons } from '@expo/vector-icons';
import Plant from '../../components/Plant';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DropdownComponent from '../../components/DropdownComponent';
import SystemData from '../../components/SystemScreenComponents/SystemData';

// ### Mock data section ###
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

const systemData = [
  { id: 1, name: 'pH', data: 15 },
  { id: 2, name: 'EC', data: 12 },
  { id: 3, name: 'ppm', data: 17 },
  { id: 4, name: 'sunlight', data: 4 },
  { id: 5, name: 'Wather temp', data: 22 },
  { id: 6, name: 'Holes in use', data: '3/12' },
];

const manipulOptions = [
  { label: 'Epidemic', value: 1 },
  { label: 'Harvesting', value: 2 },
  { label: 'End Cycle', value: 3 },
];

// ### End mock data ###

const SystemScreen = () => {
  const [isManipulSelected, setIsManipulSelected] = useState(false);
  const [plantArr, setPlantArr] = useState([]);
  const [manipulOption,setManipulOption] = useState(0);

  const addPlantToArr = (value) => {
    console.log('Added to plant array');

    setPlantArr([...plantArr, value]);

    console.log(plantArr);
  };

  const removePlantFromArr = (value) => {
    console.log('Removed from plant array');

    let tempArr = [...plantArr];

    tempArr = tempArr.filter((i) => i != value);
    setPlantArr([...tempArr]);

    console.log(plantArr);
  };

  const onDropdownFocuseChanged = (isFocused,value) => {
    setIsManipulSelected(isFocused);
    setManipulOption(value);
  };

  const onGroupManipul = () => {
    switch(manipulOption){
      case 1:
        //
        break;

      case 2:
        //
        break;

      case 3:
        //
        break;

      default:
        break;
    }
  };

  const addNewPlant = ()=>{

  }

  return (
    <View style={[globalStyles.container, { justifyContent: 'center' }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={[globalStyles.tabScrollView, { width: 360 }]}>
        {/* System data */}
        <Text style={styles.title}>My Hydroponic System</Text>

        <FlatList
          columnWrapperStyle={{ flexWrap: 'wrap', justifyContent: 'center' }}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          data={systemData}
          renderItem={({ item }) => {
            return <SystemData name={item.name} data={item.data} />;
          }}
        />

        {/* Plants data */}
        <View style={styles.dataDiv}>
          <View>
            <View style={{ borderBottomWidth: 2, borderColor: 'black' }}>
              <Text style={styles.title}>Plants</Text>
            </View>
            <TouchableOpacity
              style={{ alignItems: 'center', marginBottom: 10 }}
              onPress={addNewPlant}
            >
              <MaterialIcons name="add-circle" size={55} color="green" />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ width: 200 }}>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>
                  Group Manipulations
                </Text>
                <DropdownComponent
                  onDropdownFocuseChanged={onDropdownFocuseChanged}
                  manipulOptions={manipulOptions}
                />
              </View>
              {isManipulSelected ? (
                <TouchableOpacity
                  style={{
                    alignSelf: 'center',
                    padding: 10,
                    borderRadius: 25,
                    margin: 20,
                    backgroundColor: 'green',
                  }}
                  onPress={onGroupManipul}
                >
                  <Text
                    style={{ color: 'white', textAlign: 'auto', fontSize: 22 }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
          </View>

          <FlatList
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={plantDataMock}
            renderItem={({ item }) => {
              return (
                <Plant
                  item={item}
                  isManipulSelected={isManipulSelected}
                  addPlantToArr={addPlantToArr}
                  removePlantFromArr={removePlantFromArr}
                />
              );
            }}
          />
        </View>

        {/* System maintains */}
        <View style={styles.dataDiv}>
          <View style={{ borderBottomWidth: 2, borderColor: 'black' }}>
            <Text style={styles.title}>System maintains</Text>
          </View>

          <View style={styles.checkBoxDiv}>
            <BouncyCheckbox
              size={35}
              fillColor={COLORS.darkColor}
              unfillColor="#FFFFFF"
              innerIconStyle={{ borderWidth: 2 }}
              text="Root maintains"
              textStyle={{
                textDecorationLine: 'none',
                fontSize: 28,
                color: COLORS.darkColor,
              }}
            />
          </View>

          <View style={styles.checkBoxDiv}>
            <BouncyCheckbox
              size={35}
              fillColor={COLORS.darkColor}
              unfillColor="#FFFFFF"
              innerIconStyle={{ borderWidth: 2 }}
              text="Water Temp"
              textStyle={{
                textDecorationLine: 'none',
                fontSize: 28,
                color: COLORS.darkColor,
              }}
            />
          </View>

          <View style={styles.checkBoxDiv}>
            <BouncyCheckbox
              size={35}
              fillColor={COLORS.darkColor}
              unfillColor="#FFFFFF"
              innerIconStyle={{ borderWidth: 2 }}
              text="Changing water"
              textStyle={{
                textDecorationLine: 'none',
                fontSize: 28,
                color: COLORS.darkColor,
              }}
            />
          </View>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Submit Maintains</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SystemScreen;

const styles = StyleSheet.create({
  title: { fontSize: 30, textAlign: 'center', marginBottom: 15 },
  systemDiv: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  dataDiv: {
    marginTop: 25,
  },
  checkBoxDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
  },
  submitBtn: {
    backgroundColor: COLORS.darkColor,
    padding: 15,
    borderRadius: 25,
  },
  submitBtnText: { color: 'white', textAlign: 'center', fontSize: 22 },
});
