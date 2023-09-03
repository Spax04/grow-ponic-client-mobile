import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS, ROUTES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Plant = ({
  item,
  isManipulSelected,
  addPlantToArr,
  removePlantFromArr,
  
}) => {
  const navigation = useNavigation();
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [isChacked, setIsChacked] = useState(false);

  useEffect(() => {
    setShowCheckBox(isManipulSelected);
    console.log(isChacked);
  }, [isManipulSelected, isChacked]);

  const onChecked = () => {
    if (isChacked) {
      setIsChacked(false);
      removePlantFromArr(item.id);
    } else {
      setIsChacked(true);
      addPlantToArr(item.id);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(ROUTES.PLANT_DETAILS, { plantId: item.id });
      }}
    >
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
      {showCheckBox ? (
        <BouncyCheckbox
          size={35}
          fillColor={COLORS.darkColor}
          unfillColor="#FFFFFF"
          innerIconStyle={{ borderWidth: 2 }}
          isChecked={isChacked}
          onPress={onChecked}
          textStyle={{
            textDecorationLine: 'none',
            fontSize: 28,
            color: COLORS.darkColor,
          }}
        />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default Plant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGreen,
    marginBottom: 10,
    borderRadius: 50,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: 'black',
  },

  textStyle: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
});
