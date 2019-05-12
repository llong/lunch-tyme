import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import BackgroundOverlay from '../../../../../../assets/images/cellGradientBackground.png';

type Props = {
  item: {
    name: String,
    category: String,
    backgroundImageURL: String
  }
}

class ListItem extends React.PureComponent<Props> {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ zIndex: 3 }}>
          <Text style={styles.restaurantName}>{ item.name }</Text>
          <Text style={styles.restaurantCategory}>{ item.category }</Text>
        </View>
        <Image source={BackgroundOverlay} style={styles.backgroundOverlay} />
        <Image
          source={{ uri: item.backgroundImageURL }}
          style={{
            left: 0, right: 0, top: 0, bottom: 0, resizeMode: 'cover', position: 'absolute',
          }}
        />
      </View>
    );
  }
}

export default ListItem;
