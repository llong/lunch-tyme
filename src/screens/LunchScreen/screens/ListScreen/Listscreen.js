// @flow

import React from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  FlatList,
  View,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import { bindActionCreators } from 'redux';
import ListItem from './components/ListItem';
import { setActiveRestaurant, fetchRestaurants } from '../../../../state/actions';
import MapIcon from '../../../../assets/icons/icon_map.png';
import styles from './styles';

const deviceWidth = Dimensions.get('window').width;

type Props = {
  navigation: {
    navigate: (string) => mixed
  },
  setActiveRestaurant: (Object) => Object,
  fetchRestaurants: () => Array,
  restaurants: Array<Object>
}

export class ListScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Lunch Tyme',
    headerRight: (
      <Image source={MapIcon} style={styles.headerIcon} />
    ),
  }

  componentDidMount() {
    const { fetchRestaurants: doFetchRestaurants } = this.props;
    doFetchRestaurants();
  }

  navigateToDetails = async (item) => {
    const { navigation, setActiveRestaurant: doSetActiveRestaurant } = this.props;
    await doSetActiveRestaurant(item);
    navigation.navigate('Details');
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.navigateToDetails(item)}>
      <ListItem item={item} />
    </TouchableOpacity>
  );

  keyExtractor = item => item.name;

  renderRestaurants = () => {
    const { restaurants } = this.props;
    if (restaurants.length >= 1) {
      return (
        <FlatList
          contentContainerStyle={{ width: deviceWidth, backgroundColor: '#000000' }}
          data={restaurants}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          bounces={false}
        />
      );
    }
    return (
      <ActivityIndicator size="large" style={styles.spinner} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.renderRestaurants() }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setActiveRestaurant,
    fetchRestaurants,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
