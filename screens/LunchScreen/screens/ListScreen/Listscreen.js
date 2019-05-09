import React from 'react';
import { TouchableOpacity, FlatList, View, Dimensions } from 'react-native';
import ListItem from './components/ListItem';

const deviceWidth = Dimensions.get('window').width;

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Lunch Tyme',
  };

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

  renderItem = ({item}) => {
    return (
      <TouchableOpacity>
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
        { restaurants.length > 1 && this.renderRestaurants() }
      </View>
    );
  }
}

export default ListScreen;
