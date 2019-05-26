// @flow

import React from 'react';
import { View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';

Mapbox.setAccessToken('pk.eyJ1IjoiaXp0ZWwiLCJhIjoiY2p2Z2ozZ3FzMDdsNDRhcDc2YWw4ZG96aCJ9.6VHDT7SBmiGl5O6-feEeeg');

type Props = {
  restaurants: Array,
  activeRestaurant: Object,
}

class MapScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Map View',
  });

  renderAnnotations = () => {
    const { activeRestaurant, restaurants } = this.props;
    if (activeRestaurant) {
      return (
        <Mapbox.PointAnnotation
          key={activeRestaurant.name}
          id={activeRestaurant.name}
          coordinate={[activeRestaurant.location.lng, activeRestaurant.location.lat]}
          title={activeRestaurant.name}
          snippet={activeRestaurant.category}
          selected
        >
          <Mapbox.Callout title={activeRestaurant.name} />
        </Mapbox.PointAnnotation>
      );
    }

    const annotations = restaurants.map(restaurant => (
      <Mapbox.PointAnnotation
        key={restaurant.name}
        id={restaurant.name}
        coordinate={[restaurant.location.lng, restaurant.location.lat]}
        title={restaurant.name}
        snippet={restaurant.category}
      >
        <Mapbox.Callout title={restaurant.name} />
      </Mapbox.PointAnnotation>
    ));
    return annotations;
  }

  setCenterPoint = () => {
    const { activeRestaurant, restaurants } = this.props;
    const firstRestaurantCenterpoint = [restaurants[0].location.lng, restaurants[0].location.lat];
    if (activeRestaurant) {
      const activeRestaurantCenterpoint = [
        activeRestaurant.location.lng,
        activeRestaurant.location.lat,
      ];
      return activeRestaurantCenterpoint;
    }
    return firstRestaurantCenterpoint;
  }

  render() {
    const { activeRestaurant } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Mapbox.MapView
          style={{ flex: 1, alignSelf: 'stretch' }}
          centerCoordinate={this.setCenterPoint()}
          zoomLevel={14}
        >
          { this.renderAnnotations() }
        </Mapbox.MapView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeRestaurant: state.activeRestaurant,
    restaurants: state.restaurants,
  };
}

export default connect(mapStateToProps)(MapScreen);
