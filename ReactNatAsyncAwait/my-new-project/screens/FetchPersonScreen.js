import React from 'react';
import {Text, View} from 'react-native';

export default class FetchPerson extends React.Component {
    static navigationOptions = { title: "Get Person by id" }
    constructor() {
      super();
    }
    componentDidMount() { }
    render() {
      return (
        <View style={{margin: 10}}>
          <Text >Add code to let users provide and ID, and use fetch to fetch the person (character)</Text>
        </View>
      )
    }
}