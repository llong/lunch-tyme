// @flow

import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

type Props = {
  icon: any
}

class HeaderIcon extends React.PureComponent<Props> {
  render() {
    const { icon, ...rest } = this.props;
    return (
      <TouchableOpacity {...rest}>
        <Image source={icon} style={{ marginRight: 16, height: 24, width: 24, resizeMode: 'contain' }} />
      </TouchableOpacity>
    );
  }
}

export default HeaderIcon;
