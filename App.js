import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/Button'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{"This is a primary button"}</Text>
        <Button 
          label="Primary button" 
          url="https://jestjs.io/"
        />
        <View style={{height: 50}}/>
        <Text style={styles.instructions}>{"This is a secondary button"}</Text>
        <Button 
          label="Secondary button" 
          primary={false} 
          onPress={() => {}}
          url="https://airbnb.io/enzyme/"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
