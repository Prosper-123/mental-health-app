// screens/HomeScreen.js
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose Your Role</Text>
      <Button
        title="Login as Guest"
        onPress={() => navigation.navigate('GuestForm')}
      />
      <Button
        title="Login as Professional"
        onPress={() => navigation.navigate('ProfessionalForm')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
