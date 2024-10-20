// screens/GuestFormScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function GuestFormScreen() {
  const [name, setName] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = () => {
    // You can save the data here or send it to the backend
    console.log({ name, symptoms });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Symptoms:</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe your symptoms"
        value={symptoms}
        onChangeText={setSymptoms}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
