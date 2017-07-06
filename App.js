import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Utils from './Utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: Utils.addStuff(1, 2)};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.state.number }</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
