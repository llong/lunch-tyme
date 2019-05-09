import { createStackNavigator } from 'react-navigation';
import ListScreen from './screens/ListScreen';
import MapScreen from './screens/MapScreen';
import DetailsScreen from './screens/DetailsScreen';

const LunchStack = createStackNavigator(
  {
      List: ListScreen,
      Map: MapScreen,
      Details: DetailsScreen
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#43E895',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Avenir Next Demi Bold',
            fontSize: 17
          },
      },
  }
);

export default LunchStack
