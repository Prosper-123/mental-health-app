import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const GuestFormScreen = () => {
  const [answers, setAnswers] = useState({});

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

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, 'alignItems': 'center' }}>
        Over the last 2 weeks, how often have you been bothered by any of the following problems?
      </Text>
      
      <Text style={{ fontSize: 16, marginBottom: 20, 'alignItems': 'center' }}>
        Answer each question by clicking the appropriate answer.
      </Text>

      {questions.map((question, index) => (
        <View key={index} style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>{question}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity 
              style={{ padding: 10, backgroundColor: answers[index] === 0 ? '#ddd' : '#f0f0f0' }}
              onPress={() => handleAnswer(index, 0)}
            >
              <Text>Not at all (0)</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{ padding: 10, backgroundColor: answers[index] === 1 ? '#ddd' : '#f0f0f0' }}
              onPress={() => handleAnswer(index, 1)}
            >
              <Text>Several days (1)</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{ padding: 10, backgroundColor: answers[index] === 2 ? '#ddd' : '#f0f0f0' }}
              onPress={() => handleAnswer(index, 2)}
            >
              <Text>More than half the days (2)</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{ padding: 10, backgroundColor: answers[index] === 3 ? '#ddd' : '#f0f0f0' }}
              onPress={() => handleAnswer(index, 3)}
            >
              <Text>Nearly every day (3)</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default GuestFormScreen;
