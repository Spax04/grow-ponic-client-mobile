import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../constants';
import globalStyles from '../../styles/globalStyles';

const SignupScreen = () => {

    const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text>SignupScreen</Text>
      <Button title='Go to Signin screen' onPress={()=>navigation.navigate(ROUTES.LOGIN)}/>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})