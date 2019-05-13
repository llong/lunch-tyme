import React from 'react';
import { shallow } from 'enzyme';
import HeaderIcon from './HeaderIcon';


describe('HeaderIcon', () => {
  const wrapper = shallow(<HeaderIcon />);
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
