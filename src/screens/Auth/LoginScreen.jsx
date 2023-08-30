import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, ROUTES } from '../../constants';
import globalStyles from '../../styles/globalStyles';
import AuthForm from '../../components/AuthForm';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={[globalStyles.container,{justifyContent:'center'}]}>
     <AuthForm navigate={navigation.navigate} belongsTo={ROUTES.LOGIN}/>
      
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width:300,
    margin:12,
    backgroundColor:COLORS.white
  },
});
