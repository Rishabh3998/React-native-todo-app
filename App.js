import { Button, StatusBar, Text, TextInput, View, Modal, Image } from 'react-native';
import { styles } from './styles/styles';
import GoalList from './components/GoalList';
import { useEffect, useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  const handleChange = (enteredText) => {
    setName(enteredText);
  };

  const handlePress = () => {
    setName('');
    if (name.trim() !== '') {
      setGoals((prev) => [...prev, { text: name, id: Math.random().toString() }]);
      setShowModal((prev) => !prev);
    }
  };

  const handlePressItem = (index) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== index);
    });
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar />
      <View>
        <Text style={styles.appHeading}>TODO LIST</Text>
      </View>
      <View>
        <View>
          <Text style={styles.appHeadingIntro}>Hey Rishabh!!</Text>
        </View>
        <View style={styles.modalOpenStyle}>
          <Button title="Add goal" onPress={() => setShowModal((prev) => !prev)} color="#fff" />
        </View>
      </View>
      <Modal visible={showModal} style={styles.modalStyle} animationType="slide">
        <View style={styles.modalContainer}>
          <View>
            <Image
              source={require('./assets/TodoImgNoBg.png')}
              style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
              }}
            />
          </View>
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter goal"
                style={styles.textInput}
                onChangeText={handleChange}
                value={name}
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.modalButtons}>
              <Button title="Add" onPress={handlePress} />
              <Button
                title="Cancel"
                onPress={() => {
                  setShowModal((prev) => !prev);
                  setName('');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.goalList}>
        <GoalList list={goals} handlePress={handlePressItem} />
      </View>
    </View>
  );
}
