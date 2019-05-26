import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  detailsHeader: {
    backgroundColor: '#34B379',
    height: 60,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  headerIcon: {
    height: 24,
    resizeMode: 'contain',
  },
  restaurantName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Avenir Next Demi Bold',
  },
  restaurantCategory: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  mapContainer: {
    height: 180,
    backgroundColor: '#E6E6E6',
  },
  detailsContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 26,
    lineHeight: 24,
  },
});
