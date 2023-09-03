import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlantScreen = ({route,navigation}) => {
    const {plantId} = route.params
  return (
    <View>
      <Text> Plant ID: {plantId}</Text>
    </View>
  )
}

export default PlantScreen

const styles = StyleSheet.create({})