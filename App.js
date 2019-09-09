'use strict';

import React from 'react';
import Home from './App/Components/Home/Home.js';
import LoadingScreen from './App/Components/LoadingScreen/LoadingScreen.js';
import RNFS from "react-native-fs";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading : true,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidMount();
  }

  render() {
    if (this.state.loading) {
      return (
        <LoadingScreen />
      );
    } else {
      return (
        <Home />
      );
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Europa-Bold': require('./assets/Fonts/Europa-Bold.otf'),
      'Europa-Light': require('./assets/Fonts/Europa-Light.otf'),
      'Europa-Regular': require('./assets/Fonts/Europa-Regular.otf'),
      'crush5':require('./assets/Fonts/crush5.ttf'),
    });
    var dictionary = await RNFS.readFile('./assets/BartDictionary.txt', "utf8");
    this.setState({ dictionary : dictionary});
    this.setState({ loading: false });
  }
}
