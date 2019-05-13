// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import TabNavigator from './screens';
import store from './state/store';

const Navigation = createAppContainer(TabNavigator);

type Props = {}

export default class App extends React.PureComponent<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
