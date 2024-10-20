import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Ensure your Firebase setup is correct
import { useNavigation } from '@react-navigation/native'; // For navigation

const ProfessionalFormScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation(); // Hook for navigation

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Authentication successful, navigate to Professional Questionnaire Screen
        navigation.navigate('ProfessionalQuestionnaireForm');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Professional Login</Text>
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

export default ProfessionalFormScreen;
