

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ToastAndroid} from 'react-native';



export default class App extends Component {
  componentDidMount(){
    ToastAndroid.show('Mounted', ToastAndroid.LONG)
  }

  render() {
    return (
      <Text>Fungbe App</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
