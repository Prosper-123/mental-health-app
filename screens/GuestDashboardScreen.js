import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GuestDashboardScreen = ({ navigation }) => {
  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        // On successful logout, navigate to the Welcome Screen
        navigation.navigate('WelcomeScreen');
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
        alert("An error occurred while logging out.");
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Guest Dashboard</Text>

      {/* Screening Results Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Screening Results</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Date: 2024-10-12</Text>
          <Text style={styles.cardText}>Score: 12</Text>
        </View>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('ScreeningHistoryScreen')}
        >
          <Text style={styles.buttonText}>View Screening History</Text>
        </TouchableOpacity>
      </View>

      {/* Virtual Consultation Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Virtual Consultation</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ConsultationScreen')}
        >
          <Text style={styles.buttonText}>Schedule a Call</Text>
        </TouchableOpacity>
      </View>

      {/* Upload Documents Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Upload Documents</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UploadDocumentsScreen')}
        >
          <Text style={styles.buttonText}>Upload Hospital Documents</Text>
        </TouchableOpacity>
      </View>

      {/* Mental Health Tips Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Mental Health Tips</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>• Practice deep breathing every day.</Text>
          <Text style={styles.cardText}>• Take breaks and step away from screens.</Text>
        </View>
      </View>

      {/* Self-Care Activities Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Self-Care Activities</Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('SelfCareActivitiesScreen')}
        >
          <Text style={styles.buttonText}>Explore Self-Care Activities</Text>
        </TouchableOpacity>
      </View>

      {/* Mood Tracker Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Track Your Mood</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MoodTrackerScreen')}
        >
          <Text style={styles.buttonText}>Start Tracking</Text>
        </TouchableOpacity>
      </View>

      {/* Emergency Contacts Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Emergency Contacts</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>• National Suicide Prevention Helpline: 800-273-TALK</Text>
          <Text style={styles.cardText}>• Local Mental Health Services: 123-456-7890</Text>
        </View>
      </View>

      {/* Community Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Community Support</Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('CommunitySupportScreen')}
        >
          <Text style={styles.buttonText}>Join Support Group</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Summary Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Progress Summary</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>• Consultations completed: 3</Text>
          <Text style={styles.cardText}>• Screenings completed: 5</Text>
        </View>
      </View>

      {/* Logout Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  linkButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GuestDashboardScreen;
