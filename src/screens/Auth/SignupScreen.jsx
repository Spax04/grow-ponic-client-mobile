import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../constants';
import globalStyles from '../../styles/globalStyles';
import AuthForm from '../../components/AuthForm';

const SignupScreen = () => {

    const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
       <AuthForm navigate={navigation.navigate} belongsTo={ROUTES.SIGNUP}/>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})