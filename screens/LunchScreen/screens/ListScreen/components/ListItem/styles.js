import { StyleSheet, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: 180,
    paddingHorizontal: 12,
    paddingBottom: 6,
    justifyContent: 'flex-end',
    position: 'relative'
  },
  restaurantName: {
    fontFamily: 'Avenir Next Demi Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  restaurantCategory: {
    color: '#FFFFFF',
    fontSize: 12
  },
  backgroundOverlay: {
    zIndex: 2,
    width: deviceWidth,
    position: 'absolute',
    bottom: 0,
  }
});
