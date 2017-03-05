/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var itemsRef = {
apiKey: 'AIzaSyBlUjywuD6JziUFZY7nRJ6aS-MdGEw1JY0',
authDomain: 'eventnow-cc4c3.firebaseapp.com',
databaseURL: 'eventnow-cc4c3',
storageBucket: 'gs://eventnow-cc4c3.appspot.com'
};

var FireBase = require('firebase');
const firebaseapp = FireBase.initializeApp(itemsRef)
firebaseapp.set()

export default class EventNow extends Component {
  render() {
    return <View style={styles.container}>
    <Text>Hi</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('EventNow', () => EventNow);
