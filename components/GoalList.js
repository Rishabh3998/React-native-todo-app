import { FlatList, Text, View, Pressable } from 'react-native';
import { styles } from '../styles/styles';

// ScrollView is not good for this situation because scroll view renders all the child items present
// inside it which will hampers the performance of the app. If we scroll then the items we see were already
// rendered behind the scenes which is not good in the situation where we have thousands of items.
// ScrollView is great only for limited amount of content. A better alternative is FlatList.

// In FlatList we don't need to write any logic to render the items using map we can just pass the data prop
// with data in FlatList and the component will take care of the rest. we can also pass renderItem prop which
// will define the way of rendering the UI in the FlatList component.

// To set key in FlatList for every item we have to make such kind of data which is resembles to a primitive
// data-type like strings. Objects are preferred here.

// Approach 1: In this one we try to make our data like mentioned in the below example.

// Example:
// data = [
//   {
//     name: 'item 1',
//     key: 1,
//   },
//   {
//     name: 'item 2',
//     key: 2,
//   },
// ];

// Approach 2: Suppose some data is coming from an API in which we are not getting any key there we have to
// change our approach here to send key in FlatList. FlatList always look for a key property. What if we are
// receiving an id property in the API response. Then either we can transform the data we are sending in List
// or we can use keyExtractor prop in FlatList.

// To make any item pressable we can use react-native new component Pressable which will tell react if the
// current item is pressed or not.

// To apply ripple effect for ios we have to use style on Pressable component
// style can take function as well and that will only execute when the item will be pressed.

export default function GoalList({ list, handlePress }) {
  const handlePressItem = (index) => {
    handlePress(index);
  };
  return (
    <View style={styles.scrollView}>
      <Text style={styles.goalHeading}>List of goals</Text>
      <FlatList
        data={list}
        renderItem={(itemData) => {
          return (
            <View style={styles.goal}>
              <Pressable
                android_ripple={{ color: 'white' }}
                onPress={() => handlePressItem(itemData.item.id)}
                style={(pressedData) => {
                  return pressedData.pressed && styles.pressedStyle;
                }}
              >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </Pressable>
            </View>
          );
        }}
        indicatorStyle="white"
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => {
          // this one is just invoked to get out the key from every item
          return item.id;
        }}
      ></FlatList>
    </View>
  );
}
