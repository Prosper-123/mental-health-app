import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Ensure firebaseConfig is correctly set up
import { useNavigation } from '@react-navigation/native';

const GuestFormScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Authentication successful
        Alert.alert('Login Success', 'You will be redirected.');
        navigation.navigate('GuestQuestionnaireForm');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Login Failed', errorMessage);
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Guest Login</Text>
      {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default GuestFormScreen;
