import React from 'react';
import { shallow } from 'enzyme';
import HeaderIcon from '../components/HeaderIcon';


describe('HeaderIcon', () => {
  const wrapper = shallow(<HeaderIcon />);
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
