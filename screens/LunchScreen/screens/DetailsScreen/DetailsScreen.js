import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

class DetailsView extends React.Component {
  render() {
    const { activeRestaurant: { name, category, location, contact } } = this.props;
    return (
      <View style={ { flex: 1 } }>
        <View style={ styles.mapContainer }>
          <MapView
            style={{flex:1, alignSelf: 'stretch'}}
            initialRegion={{
              latitude: location.lat,
              longitude: location.lng,
              latitudeDelta: 0.0522,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View style={ styles.detailsHeader }>
          <Text style={ styles.restaurantName } >{ name }</Text>
          <Text style={ styles.restaurantCategory } >{ category }</Text>
        </View>
        <View style={ styles.detailsContainer }>
          <Text style={ styles.detailsText }>{`${location.formattedAddress[0]}\n${location.formattedAddress[1]}`}</Text>
          <Text style={ styles.detailsText }>{contact.formattedPhone }</Text>
          <Text style={ styles.detailsText }>{`@${ contact.twitter }`}</Text>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeRestaurant: state.activeRestaurant
  }
}

export default connect(mapStateToProps)(DetailsView);
