/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import ReactNative from 'react-native';
import * as firebase from 'firebase';
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const styles = require('../styles.js');
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  AlertIOS
} from 'react-native';

import NewEventScene from './NewEventScene';

var cred = {
apiKey: 'AIzaSyBlUjywuD6JziUFZY7nRJ6aS-MdGEw1JY0',
authDomain: 'eventnow-cc4c3.firebaseapp.com',
databaseURL: 'https://eventnow-cc4c3.firebaseio.com/',
storageBucket: 'gs://eventnow-cc4c3.appspot.com'
};

var FireBase = require('firebase');
const firebaseapp = FireBase.initializeApp(cred)


export default class EventsListScene extends Component {
//  static propTypes = {
//      title: PropTypes.string.isRequired,
//      navigator: PropTypes.object.isRequired,
//  }
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
    this._onForward = this._onForward.bind(this);
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
          tags: child.val().tags,
          _key: child.key
        });
      });

      console.log(items);
      console.log("hello");

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
      <View style={styles.container1}>
      <ActionButton title="Search" />
      <StatusBar title="" />
        
      <ActionButton onPress={this._onForward} title="Add" />
      </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

        

      </View>
    )
  }

//Example of deleting something from database
  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Mark Event as Complete?',
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

  _onForward() {
      this.props.navigator.push({
          component: NewEventScene,
          title: 'New Event',
          passProps: {firebaseapp: firebaseapp}
      });
  }
  
}