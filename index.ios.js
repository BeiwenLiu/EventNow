/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import ReactNative from 'react-native';
import * as firebase from 'firebase';
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js');
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  AlertIOS
} from 'react-native';


var cred = {
apiKey: 'AIzaSyBlUjywuD6JziUFZY7nRJ6aS-MdGEw1JY0',
authDomain: 'eventnow-cc4c3.firebaseapp.com',
databaseURL: 'https://eventnow-cc4c3.firebaseio.com/',
storageBucket: 'gs://eventnow-cc4c3.appspot.com'
};

var FireBase = require('firebase');
const firebaseapp = FireBase.initializeApp(cred)


export default class EventNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  //This is an instance of a database. Use this to push / delete
  getRef() {
    return firebaseapp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

        <ActionButton onPress={this._addItem.bind(this)} title="Add" />

      </View>
    )
  }


//Example of adding something to database
  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text }) //text is the user input.
          }
        },
      ],
      'plain-text'
    );
  }


//Example of deleting something from database
  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }
}



AppRegistry.registerComponent('EventNow', () => EventNow);
