import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfessionalDashboardScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('WelcomeScreen'); // Navigate to Welcome Screen on logout
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Professional Dashboard</Text>

      {/* New Guest Requests Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New Guest Requests</Text>
        {/* Example of request, replace with actual data */}
        <Text>Guest Name: John Doe, Score: 15</Text>
        <Button title="View Request" onPress={() => navigation.navigate('RequestDetailsScreen')} />
      </View>

      {/* Appointment Scheduler Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appointment Scheduler</Text>
        <Button title="Schedule Appointments" onPress={() => navigation.navigate('AppointmentSchedulerScreen')} />
      </View>

      {/* Guest Document Access Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Guest Document Access</Text>
        <Button title="View Documents" onPress={() => navigation.navigate('DocumentsScreen')} />
      </View>

      {/* Professional Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Profile</Text>
        <Button title="Update Profile" onPress={() => navigation.navigate('ProfessionalProfileScreen')} />
      </View>

      {/* Resources for Professionals Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resources for Professionals</Text>
        {/* List resources for professional development */}
        <Text>• Latest Research on Mental Health</Text>
        <Text>• Continuing Education Courses</Text>
      </View>

      {/* Logout Button */}
      <View style={styles.section}>
        <Button title="Logout" onPress={handleLogout} color="#FF6347" />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
});

export default ProfessionalDashboardScreen;
