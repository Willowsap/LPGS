'use strict';

import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './HomeStyles.js';

export default class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading : true,
      guess : "Hi",
      results : ["Forage"]
    };
    this.findAnswer = this.findAnswer.bind(this);
    this.lookup = this.lookup.bind(this);
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>License Plate Game Solver</Text>
          <Text style={styles.headerAuthor}>By Willow Sapphire</Text>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.text}
            onChangeText={(guess) => this.setState({guess})}
            value={this.state.guess}
            autoFocus={true}
            placeholder='Enter Letters'
          />
          <Button click={this.findAnswer} title="Find Answer"></Button>
        </View>
        
        <ScrollView style={styles.resultSection} contentContainerStyle={styles.resultList}>
          <Text>{this.state.guess}</Text>
          {
            (this.state.results.length > 0)
            ? <Text>{this.state.results}</Text>
            : <Text>Results appear here</Text>
          }
        </ScrollView>
      </View>
    );
  }

  findAnswer() {
    resultList = this.lookup(this.state.guess);
    if(resultList != null) {
      this.setState({results : resultList})
    }
  }

  lookup(guess) {
    
  }
}
