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

const t = require('tcomb-form-native')
const Form = t.form.Form;

var Event = t.struct ({
    title: t.String,    //required string
    tag: t.maybe(t.String),  //optional string to make discoverable
})

var options = {};

export default class NewEventScene extends Component {
  static propTypes = {
      title: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired,
  }
    
  constructor(props) {
    super(props);
    this.itemsRef = this.getRef().child('items');
    this._onBack = this._onBack.bind(this);
  }

  //This is an instance of a database. Use this to push / delete
  getRef() {
    return this.props.firebaseapp.database().ref();
  }

  render() {
    return (
      <View style={styles.container}>
      <Form
        ref = "form"
        type = {Event}
        options={options}
      />

        <ActionButton onPress={this._addItem.bind(this)} title="Add" />

      </View>
    )
  }


//Example of adding something to database
  _addItem() {
      //this.itemsRef.push({title: text}) //text is the user input
      this._onBack();
    /**AlertIOS.prompt(
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
    );**/
  }

_onBack() {
      this.props.navigator.pop();
  }
}