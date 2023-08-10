import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import globalStyles from '../../styles/globalStyles'
import { BackHandler } from 'react-native'

const HomeScreen = () => {


  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Perform your custom action here
      // Return `true` to indicate that you've handled the back press and prevent default behavior
      // Return `false` to allow the default back behavior
      return true;
    });

    return () => backHandler.remove();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})