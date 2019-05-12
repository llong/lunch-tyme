// @flow

import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

type Props = {
  icon: String
}

class HeaderIcon extends React.PureComponent<Props> {
  render() {
    const { icon, ...rest } = this.props;
    return (
      <TouchableOpacity {...rest}>
        <Image source={icon} style={{ marginRight: 16 }} />
      </TouchableOpacity>
    );
  }
}

export default HeaderIcon;
