import React from 'react';
import {
  Text, View, Platform, TouchableOpacity, StyleSheet,
  Button, TextInput, ActivityIndicator
} from 'react-native';
import { Constants} from "expo";
import { StackNavigator } from 'react-navigation';
import RandomPersonScreen from './screens/RandomPersonScreen';
import FetchPersonScreen from './screens/FetchPersonScreen';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>);


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Using async/await in Apps' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{margin:10}}>
        <Text>Using the swapi.co API, fetch and async/await</Text>
        <Touchable onPress={() => navigate('randomperson')} title="Random Person" />
        <Touchable onPress={() => navigate('fetchperson')} title="Get person by id" />
      </View>
    )
  }
}

export default App = () => (
  <View style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,flex:1 }}>
    <RouteStack  />
  </View>
)

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  randomperson: { screen: RandomPersonScreen },
  fetchperson: { screen: FetchPersonScreen },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})