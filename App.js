import React from 'react';
import { createAppContainer } from 'react-navigation';
import TabNavigator from './screens';
import { Provider } from 'react-redux';
import store from './state/store';

let Navigation = createAppContainer(TabNavigator);

// Render the app container component with the provider around it
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}