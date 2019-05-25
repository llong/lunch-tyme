// @flow

import React from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import styles from './styles';
import MapIcon from '../../../../assets/icons/icon_map.png';

type Props = {
  activeRestaurant: {
    name: String,
    category: String,
    location: Object,
  }
}

Mapbox.setAccessToken('pk.eyJ1IjoiaXp0ZWwiLCJhIjoiY2p2Z2ozZ3FzMDdsNDRhcDc2YWw4ZG96aCJ9.6VHDT7SBmiGl5O6-feEeeg');

export class DetailsView extends React.Component<Props> {
  static navigationOptions = {
    title: 'Lunch Tyme',
    headerRight: (
      <Image source={MapIcon} style={styles.headerIcon} />
    ),
  }

  render() {
    const {
      activeRestaurant: {
        name,
        category,
        location,
        contact,
      },
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.mapContainer}>
          <Mapbox.MapView
            style={{ flex: 1, alignSelf: 'stretch' }}
            centerCoordinate={[location.lng, location.lat]}
            zoomLevel={12}
          >
            <Mapbox.PointAnnotation
              id={name}
              coordinate={[location.lng, location.lat]}
              title={name}
              snippet={category}
              selected
            >
              <Mapbox.Callout title={name} />
            </Mapbox.PointAnnotation>
          </Mapbox.MapView>
        </View>
        <View style={styles.detailsHeader}>
          <Text style={styles.restaurantName}>{ name }</Text>
          <Text style={styles.restaurantCategory}>{ category }</Text>
        </View>
        <View style={styles.detailsContainer}>
          { location && location.formattedAddress && (
            <Text style={styles.detailsText}>
              {`${location.formattedAddress[0]}\n${location.formattedAddress[1]}`}
            </Text>
          )}
          { contact && contact.formattedPhone && (
            <Text style={styles.detailsText}>{contact.formattedPhone }</Text>
          )}
          { contact && contact.twitter && (
            <Text style={styles.detailsText}>{`@${contact.twitter}`}</Text>
          )}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeRestaurant: state.activeRestaurant,
  };
}

export default connect(mapStateToProps)(DetailsView);
