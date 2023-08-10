import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import globalStyles from '../../styles/globalStyles';

const LoginScreen = ({navigation}) => {

  return (
    <View style={globalStyles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="Go to Signup screen"
        onPress={() => navigation.navigate(ROUTES.SIGNUP)}
      />
      <Button title="Forgot password?" onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD,{userId:'X0001'})} />
      <Button title="Log In" onPress={() => navigation.navigate(ROUTES.HOME)} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
