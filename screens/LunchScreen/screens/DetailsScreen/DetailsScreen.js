import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import MapView , { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import MapIcon from '../../../../assets/icons/icon_map.png';

class DetailsView extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Lunch Tyme',
      headerRight: (
        <Image source={ MapIcon } style={ { marginRight: 12 } } />
      )
    };
  }
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
          >
             <Marker
              coordinate={ {latitude: location.lat, longitude: location.lng } }
              title={ name }
              description={ category }
            />
          </MapView>
        </View>
        <View style={ styles.detailsHeader }>
          <Text style={ styles.restaurantName } >{ name }</Text>
          <Text style={ styles.restaurantCategory } >{ category }</Text>
        </View>
        <View style={ styles.detailsContainer }>
          { location && location.formattedAddress && (
            <Text style={ styles.detailsText }>
              {`${location.formattedAddress[0]}\n${location.formattedAddress[1]}`}
              </Text>
            )
          }
          { contact && contact.formattedPhone && <Text style={ styles.detailsText }>{contact.formattedPhone }</Text> }
          { contact && contact.twitter && <Text style={ styles.detailsText }>{`@${ contact.twitter }`}</Text> }
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
