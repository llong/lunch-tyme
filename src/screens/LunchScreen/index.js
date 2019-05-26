import { createStackNavigator } from 'react-navigation';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';
import MapScreen from './screens/MapScreen';

const LunchStack = createStackNavigator(
  {
    List: {
      screen: ListScreen,
      navigationOptions: {
        headerBackTitle: null,
      },
    },
    Details: DetailsScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#43E895',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Avenir Next Demi Bold',
        fontSize: 17,
      },
    },
  },
);

export default LunchStack;
