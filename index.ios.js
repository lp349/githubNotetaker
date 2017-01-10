/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Main from './App/Components/Main';

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
