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

const styles = require('./styles.js')

var itemsRef = {
apiKey: 'AIzaSyBlUjywuD6JziUFZY7nRJ6aS-MdGEw1JY0',
authDomain: 'eventnow-cc4c3.firebaseapp.com',
databaseURL: 'https://eventnow-cc4c3.firebaseio.com/',
storageBucket: 'gs://eventnow-cc4c3.appspot.com'
};

var FireBase = require('firebase');
const firebaseapp = FireBase.initializeApp(itemsRef)


export default class EventNow extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseapp.database().ref();
  }

  render() {
    return (
      <View style={styles.container}>

        <Text> Hey </Text>

      </View>
    )
  }
}



AppRegistry.registerComponent('EventNow', () => EventNow);
