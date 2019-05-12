// @flow

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import LunchStack from './LunchScreen';
import InternetsScreen from './InternetsScreen';
import LunchIcon from '../assets/icons/tab_lunch.png';
import InternetsIcon from '../assets/icons/tab_internets.png';

const styles = StyleSheet.create({
  tabIcon: {
    height: 24,
    resizeMode: 'contain',
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Lunch: {
      screen: LunchStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: String) => (
          <Image source={LunchIcon} style={[styles.tabIcon, { tintColor }]} />
        ),
      },
    },
    Internets: {
      screen: InternetsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: String) => (
          <Image source={InternetsIcon} style={[styles.tabIcon, { tintColor }]} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#979797',
      style: {
        backgroundColor: '#2A2A2A',
      },
    },
  },
);

export default TabNavigator;
