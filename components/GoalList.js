import { FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/styles';

// ScrollView is not good for this situation because scroll view renders all the child items present
// inside it which will hampers the performance of the app. If we scroll then the items we see were already
// rendered behind the scenes which is not good in the situation where we have thousands of items.
// ScrollView is great only for limited amount of content. A better alternative is FlatList

export default function GoalList({ list }) {
  return (
    <View style={styles.scrollView}>
      <Text style={styles.goalHeading}>List of goals</Text>
      <FlatList
        indicatorStyle="white"
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {list.map((goal, index) => (
          <View key={index} style={styles.goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </FlatList>
    </View>
  );
}
