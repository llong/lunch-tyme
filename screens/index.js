import React from 'react';
import { Image } from 'react-native';
import LunchStack from './LunchScreen';
import InternetsScreen from './LunchScreen';
import { createBottomTabNavigator } from 'react-navigation';
import LunchIcon from '../assets/icons/tab_lunch.png';
import InternetsIcon from '../assets/icons/tab_internets.png';

const TabNavigator = createBottomTabNavigator(
  {
    Lunch: {
      screen: LunchStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={ LunchIcon } style={ { tintColor } } />
        )
      }
    },
    Internets: {
      screen: InternetsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={ InternetsIcon } style={ { tintColor } } />
        )
      }
    }
  },
  {
      tabBarOptions: {
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#979797',
          style: {
              backgroundColor: '#2A2A2A'
          }
      }
  }
);

export default TabNavigator;
