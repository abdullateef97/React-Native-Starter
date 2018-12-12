

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import  {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './src/store/Stores'
import Index from './src'


export default class App extends Component {
  
  render() {
    const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
       <Index/>
      </Provider>
      
    );
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
