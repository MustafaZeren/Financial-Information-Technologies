import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    that.setState({
      date:
        date + '/' + month + '/' + year,
    });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            marginTop: 16,
          }}>
          {this.state.date}
        </Text>
      </View>
    );
  }
}