import React from 'react';
import { shallow } from 'enzyme';
import { ListScreen } from '../Listscreen';

const navigateMock = jest.fn();

const props = {
  navigation: {
    navigate: navigateMock,
  },
  restaurants: [
    {
      name: 'McDonalds',
      category: 'fast food',
    },
  ],
};

describe('ListScreen', () => {
  const wrapper = shallow(<ListScreen {...props} />, { disableLifecycleMethods: true });
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
