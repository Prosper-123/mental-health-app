// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
        source={require('../assets/splash.png')}
        styles={styles.background}
        >
        
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to Mental Health Awaness !</Text>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      padding: 20,
      borderRadius: 10,
    },
    text: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
  });