import { createStackNavigator } from 'react-navigation';
import InternetsScreen from './InternetsScreen';

const InternetStack = createStackNavigator(
  {
      internet: InternetsScreen,
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

export default InternetStack;
