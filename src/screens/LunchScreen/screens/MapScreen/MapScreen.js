// @flow

import React from 'react';
import {
  View, Text, SafeAreaView, Image,
} from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import styles from './styles';
import Mapbox from '../../../../components/Mapbox';

type Props = {
  restaurants: Array,
  activeRestaurant: Object,
}

class MapScreen extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Map View',
  });

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedRestaurant: null,
    };
  }

  renderModal = () => {
    const { showModal, selectedRestaurant } = this.state;
    if (selectedRestaurant) {
      const { backgroundImageURL, location, contact } = selectedRestaurant;
      return (
        <Modal isVisible={showModal} onBackdropPress={() => this.setState({ showModal: false })}>
          <SafeAreaView>
            <View style={styles.container}>
              <Image source={{ uri: backgroundImageURL }} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedRestaurant.name}</Text>
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
          </SafeAreaView>
        </Modal>
      );
    }
    return false;
  }

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
        onSelected={() => this.selectRestaurant(restaurant)}
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

  selectRestaurant = (restaurant) => {
    this.setState({ selectedRestaurant: restaurant, showModal: true });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Mapbox.MapView
          style={{ flex: 1, alignSelf: 'stretch' }}
          centerCoordinate={this.setCenterPoint()}
          zoomLevel={14}
        >
          { this.renderAnnotations() }
        </Mapbox.MapView>
        { this.renderModal() }
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
