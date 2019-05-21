import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: 180,
    paddingHorizontal: 12,
    paddingBottom: 6,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  restaurantName: {
    fontFamily: 'Avenir Next Demi Bold',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  restaurantCategory: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  backgroundOverlay: {
    flex: 1,
    zIndex: 2,
    resizeMode: 'cover',
    bottom: 0,
    position: 'absolute',
    width: deviceWidth,
  },
});
