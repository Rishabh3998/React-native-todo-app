import { Button, StatusBar, Text, TextInput, View } from 'react-native';
import { styles } from './styles/styles';
import GoalList from './components/GoalList';
import { useEffect, useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  const handleChange = (enteredText) => {
    setName(enteredText);
  };

  const handlePress = () => {
    setName('');
    setGoals((prev) => [...prev, name]);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar />
      <View>
        <Text style={styles.appHeading}>TODO APP</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter goal"
          style={styles.textInput}
          onChangeText={handleChange}
          value={name}
        />
        <Button title="Add goal" onPress={handlePress} />
      </View>
      <View style={styles.goalList}>
        <GoalList list={goals} />
      </View>
    </View>
  );
}
