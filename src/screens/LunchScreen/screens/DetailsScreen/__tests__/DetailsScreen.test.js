import React from 'react';
import { shallow } from 'enzyme';
import { DetailsView } from '../DetailsScreen';

const props = {
  activeRestaurant: {
    name: 'McDonalds',
    category: 'Fast Food',
    location: {
      lat: 0.123,
      lng: 0.321,
    },
  },
};

describe('DetailsScreen', () => {
  const wrapper = shallow(<DetailsView {...props} />, { disableLifecycleMethods: true });
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
