/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import ReactNative from 'react-native';
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
  AlertIOS,
  NavigatorIOS
} from 'react-native';

import EventsListScene from './components/EventsListScene';

class EventNow extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: EventsListScene,
                    title: 'Events',
                }}
                style={{flex: 1}}
            />
        )
    }
}

AppRegistry.registerComponent('EventNow', () => EventNow);