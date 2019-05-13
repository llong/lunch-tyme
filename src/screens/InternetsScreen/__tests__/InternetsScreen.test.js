import React from 'react';
import { shallow } from 'enzyme';
import InternetsScreen from '../InternetsScreen';

const setParamsMock = jest.fn();

const props = {
  navigation: {
    setParams: setParamsMock,
  },
};

describe('InternetsScreen', () => {
  const wrapper = shallow(<InternetsScreen {...props} />, { disableLifecycleMethods: true });
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set navigation btn params when mounted', () => {
    const instance = wrapper.instance();
    instance.webview = { current: { goBack: jest.fn() } };
    instance.componentDidMount();
    expect(setParamsMock).toHaveBeenCalledTimes(1);
  });
});
