import { Text, View } from 'react-native';

export default function GoalList({ list }) {
  return (
    <View>
      {list.map((goal, index) => (
        <Text key={index}>{goal}</Text>
      ))}
    </View>
  );
}
