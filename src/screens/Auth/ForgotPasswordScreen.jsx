import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import globalStyles from '../../styles/globalStyles';

const ForgotPasswordScreen = () => {
  const {
    params: { userId },
  } = useRoute();

  return (
    <View style={globalStyles.container}>
      <Text>ForgotPasswordScreen</Text>
      <Text>{userId}</Text>

    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
