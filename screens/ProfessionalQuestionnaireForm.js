import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

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

  const handleSubmit = () => {
    // Handle submission logic if needed later, currently not saving to Firestore
    console.log('Form submitted:', {
      name, age, education, experience, specialization, phone, email, licenseNumber, yearsCertified, currentInstitution
    });
    alert('Form submitted!');
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Professional KYC Form</Text>
      
      <Text>Name:</Text>
      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>Age:</Text>
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>Education:</Text>
      <TextInput
        placeholder="Educational Background"
        value={education}
        onChangeText={setEducation}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>Years of Experience:</Text>
      <TextInput
        placeholder="Years of Experience"
        value={experience}
        onChangeText={setExperience}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>Specialization:</Text>
      <TextInput
        placeholder="Specialization"
        value={specialization}
        onChangeText={setSpecialization}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>Phone Number:</Text>
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>Email Address:</Text>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>License Number:</Text>
      <TextInput
        placeholder="License Number"
        value={licenseNumber}
        onChangeText={setLicenseNumber}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>Years Certified:</Text>
      <TextInput
        placeholder="Years Certified"
        value={yearsCertified}
        onChangeText={setYearsCertified}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Text>Current Institution:</Text>
      <TextInput
        placeholder="Current Institution"
        value={currentInstitution}
        onChangeText={setCurrentInstitution}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default ProfessionalFormScreen;
