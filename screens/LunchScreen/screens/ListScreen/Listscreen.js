import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, FlatList, View, Dimensions, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import ListItem from './components/ListItem';
import { setActiveRestaurant } from '../../../../state/actions';
import MapIcon from '../../../../assets/icons/icon_map.png';
const deviceWidth = Dimensions.get('window').width;

class ListScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Lunch Tyme',
      headerRight: (
        <Image source={ MapIcon } style={ { marginRight: 12 } } />
      )
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    const restaurants = fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
      .then(res => {
        if(res.status !== 200) {
          alert('problem fetching');
          return
        }
        res.json().then( data => this.setState({ restaurants: data.restaurants }));
      })
      .catch(err => {
        alert('there was a problem ', err);
      })
  }

  navigateToDetails = async (item) => {
    const { navigation, setActiveRestaurant: doSetActiveRestaurant } = this.props;
    await doSetActiveRestaurant(item);
    navigation.navigate('Details');
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.navigateToDetails(item)}>
        <ListItem item={ item } />
      </TouchableOpacity>
    );
  }
  
  keyExtractor = (item, index) => item.name;

  renderRestaurants = () => {
    const { restaurants } = this.state;
    return (
      <FlatList
        contentContainerStyle={{ width: deviceWidth, backgroundColor: '#000000'}}
        data={ restaurants }
        renderItem={ this.renderItem }
        keyExtractor={ this.keyExtractor }
        bounces={ false }
      />
    )
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
    setActiveRestaurant
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ListScreen);
