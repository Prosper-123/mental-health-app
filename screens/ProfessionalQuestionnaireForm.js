import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfessionalFormScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [yearsCertified, setYearsCertified] = useState('');
  const [currentInstitution, setCurrentInstitution] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Form submitted:', {
      name, age, education, experience, specialization, phone, email, licenseNumber, yearsCertified, currentInstitution
    });
    alert('Form submitted!');
    navigation.navigate('ProfessionalDashboardScreen'); // Navigate to Professional Dashboard
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Professional KYC Form</Text>

      {/* Form Inputs */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age:</Text>
        <TextInput
          placeholder="Enter your age"
          value={age}
          onChangeText={setAge}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Educational Background:</Text>
        <TextInput
          placeholder="Enter your education level"
          value={education}
          onChangeText={setEducation}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Years of Experience:</Text>
        <TextInput
          placeholder="Enter years of experience"
          value={experience}
          onChangeText={setExperience}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Specialization:</Text>
        <TextInput
          placeholder="Enter your specialization"
          value={specialization}
          onChangeText={setSpecialization}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>License Number:</Text>
        <TextInput
          placeholder="Enter your license number"
          value={licenseNumber}
          onChangeText={setLicenseNumber}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Years Certified:</Text>
        <TextInput
          placeholder="Enter years of certification"
          value={yearsCertified}
          onChangeText={setYearsCertified}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Current Institution:</Text>
        <TextInput
          placeholder="Enter your current institution"
          value={currentInstitution}
          onChangeText={setCurrentInstitution}
          style={styles.input}
        />
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#007bff" />
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ProfessionalFormScreen;
