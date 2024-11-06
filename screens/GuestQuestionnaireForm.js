import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GuestFormScreen = () => {
  const [answers, setAnswers] = useState({});
  const navigation = useNavigation();

  const questions = [
    'Little interest or pleasure in doing things?',
    'Feeling down, depressed, or hopeless?',
    'Trouble falling or staying asleep, or sleeping too much?',
    'Feeling tired or having little energy?',
    'Poor appetite or overeating?',
    'Feeling bad about yourself—or that you are a failure or have let yourself or your family down?',
    'Trouble concentrating on things, such as reading the newspaper or watching television?',
    'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless?',
    'Thoughts that you would be better off dead or of hurting yourself in some way?',
    'Feeling nervous, anxious, or on edge?'
  ];

  const handleAnswer = (questionIndex, score) => {
    setAnswers({ ...answers, [questionIndex]: score });
  };

  const handleSubmit = () => {
    console.log('Answers submitted:', answers);
    Alert.alert('Form Submitted', 'Thank you for completing the questionnaire.');
    navigation.navigate('GuestDashboardScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        Over the last 2 weeks, how often have you been bothered by any of the following problems?
      </Text>
      
      <Text style={styles.subHeader}>
        Answer each question by clicking the appropriate answer.
      </Text>

      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question}</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity 
              style={[
                styles.optionButton,
                answers[index] === 0 && styles.selectedOption
              ]}
              onPress={() => handleAnswer(index, 0)}
            >
              <Text style={styles.optionText}>Not at all (0)</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[
                styles.optionButton,
                answers[index] === 1 && styles.selectedOption
              ]}
              onPress={() => handleAnswer(index, 1)}
            >
              <Text style={styles.optionText}>Several days (1)</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[
                styles.optionButton,
                answers[index] === 2 && styles.selectedOption
              ]}
              onPress={() => handleAnswer(index, 2)}
            >
              <Text style={styles.optionText}>More than half the days (2)</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[
                styles.optionButton,
                answers[index] === 3 && styles.selectedOption
              ]}
              onPress={() => handleAnswer(index, 3)}
            >
              <Text style={styles.optionText}>Nearly every day (3)</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
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
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  questionContainer: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 }, // Adds shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#007bff',
  },
  optionText: {
    color: '#333',
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GuestFormScreen;
