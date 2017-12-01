import React from 'react';
import {Text, View} from 'react-native';
import SwapiFacade from '../SwapiFacade';

export default class RandomPerson extends React.Component {
    static navigationOptions = {title: "Random Person"}
    constructor() {
      SwapiFacade.init();
      super();
    }
    
    render() {
      return (
        <View style={{margin: 10}}>
          <SwapiFacade/>
        </View>
      );
    }
  }