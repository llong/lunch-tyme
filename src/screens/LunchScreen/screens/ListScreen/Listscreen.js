// @flow

import React from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  FlatList,
  View,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import { bindActionCreators } from 'redux';
import ListItem from './components/ListItem';
import { setActiveRestaurant } from '../../../../state/actions';
import MapIcon from '../../../../assets/icons/icon_map.png';
import styles from './styles';

const deviceWidth = Dimensions.get('window').width;

type Props = {
  navigation: {
    navigate: (string) => mixed
  },
  setActiveRestaurant: (Object) => Object
}
type State = {
  restaurants: Array<Object>
}

class ListScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Lunch Tyme',
    headerRight: (
      <Image source={MapIcon} style={styles.headerIcon} />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
      .then((res) => {
        if (res.status !== 200) {
          Alert('problem fetching');
          return;
        }
        res.json().then(data => this.setState({ restaurants: data.restaurants }));
      })
      .catch((err) => {
        Alert('there was a problem ', err);
      });
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
    const { restaurants } = this.state;
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

  render() {
    const { restaurants } = this.state;
    return (
      <View style={{ flex: 1 }}>
        { restaurants.length >= 1 && this.renderRestaurants() }
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setActiveRestaurant,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ListScreen);
