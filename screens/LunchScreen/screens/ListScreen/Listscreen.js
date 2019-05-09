import React from 'react';
import { Text, View, Image } from 'react-native';

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Lunch Tyme',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List!</Text>
      </View>
    );
  }
}

export default ListScreen;
