// @flow

import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderIcon from './components/HeaderIcon';
import BackIcon from '../../assets/icons/ic_webBack.png';
import RefreshIcon from '../../assets/icons/ic_webRefresh.png';
import ForwardIcon from '../../assets/icons/ic_webForward.png';

type Props = {
  navigation: Object
}

class InternetsScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: null,
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 16 }}>
        <HeaderIcon onPress={navigation.getParam('goBack')} icon={BackIcon} />
        <HeaderIcon onPress={navigation.getParam('reload')} icon={RefreshIcon} />
        <HeaderIcon onPress={navigation.getParam('goForward')} icon={ForwardIcon} />
      </View>
    ),
  })

  constructor(props) {
    super(props);
    this.webview = React.createRef();
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      goBack: this.webview.current.goBack,
      goForward: this.webview.current.goForward,
      reload: this.webview.current.reload,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={this.webview}
          source={{ uri: 'https://www.bottlerocketstudios.com/' }}
        />
      </View>
    );
  }
}

export default InternetsScreen;
