import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, ROUTES } from '../constants';

const AuthForm = ({ navigate, belongsTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {}, []);

  const login = ()=>{
    navigate(ROUTES.HOME)
  }

  const signin = ()=>{
    navigate(ROUTES.HOME)
  }

  return (
    <View>
      <View>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/logo-dark.png')}
        />
      </View>

      {/* Input area */}
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.inputStyle}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={true}
      />

      {belongsTo === ROUTES.LOGIN ? (
        <View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={login}
          >
            <Text style={styles.btnText}>Log in</Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigate(ROUTES.SIGNUP)}
            style={styles.linkStyle}
          >
            Steal don't have an account? Go to sign up
          </Text>
          <Text
            onPress={() =>
              navigate(ROUTES.FORGOT_PASSWORD, { userId: 'X0001' })
            }
            style={styles.linkStyle}
          >
            Forgot password?
          </Text>
        </View>
      ) : (
        <View>
          <TextInput
            value={password}
            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            style={styles.inputStyle}
            placeholder="Confirm password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={signin}
          >
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>

          <Text onPress={() => navigate(ROUTES.LOGIN)} style={styles.linkStyle}>
            Already have an account? Go to login
          </Text>
        </View>
      )}
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width: 300,
    margin: 12,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.brown,
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
  },
  imageStyle: {
    width: 300,
    height: 120,
    marginBottom: 20,
  },
  loginBtn: {
    width: 300,
    alignSelf: 'center',
    elevation: 0,
    backgroundColor: COLORS.brown,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 35,
    marginBottom: 25,
  },
  linkStyle: {
    fontSize: 15,
    color: COLORS.dark,
    marginTop: 15,
    marginBottom: 25,
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
