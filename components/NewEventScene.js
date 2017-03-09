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

var t = require('tcomb-form-native')
var Form = t.form.Form;

var Event = t.struct ({
    title: t.String,    //required string
    timeStart: t.Date,  //event start
    timeEnd: t.Date,    //event end
    
    tags: t.maybe(t.String),  //optional string to make discoverable
});

var options = {
    fields: {
        title: {
            label: 'Event name',
            placeholder: 'Event name',
            placeholderTextColor: '#999',
            error: 'Event must have a name',
        },
        timeStart: {
            label: 'Time Start',
        },
        timeEnd: {
            label: 'Time End',
        },
        tags: {
            label: 'Tags (optional)',
            placeholder: 'Tags',
            placeholderTextColor: '#999',
            help: 'Separate tags with spaces',
        },
    },
};

export default class NewEventScene extends Component {
//  static propTypes = {
//      title: PropTypes.string.isRequired,
//      navigator: PropTypes.object.isRequired,
//  }
    
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
      var value = this.refs.form.getValue()
      if (value) {
          console.log(value);
          
          var key = this.itemsRef.push(value).getKey();
          this._onBack();
      }
  }

_onBack() {
      this.props.navigator.pop();
  }
}