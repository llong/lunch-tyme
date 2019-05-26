// @flow

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Mapbox from '../../../../components/Mapbox';
import { setActiveRestaurant, fetchRestaurants } from '../../../../state/actions';
import styles from './styles';
import MapIcon from '../../../../assets/icons/icon_map.png';

type Props = {
  navigation: mixed,
  activeRestaurant: {
    name: String,
    category: String,
    location: Object,
  },
}

export class DetailsView extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Lunch Tyme',
    headerRight: (
      <TouchableOpacity onPress={navigation.getParam('navigateToMap')}>
        <Image source={MapIcon} style={styles.headerIcon} />
      </TouchableOpacity>
    ),
  })

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      navigateToMap: this.navigateToMap,
    });
  }

  navigateToMap = () => {
    const { navigation } = this.props;
    navigation.navigate('Map');
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setActiveRestaurant,
    fetchRestaurants,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);
