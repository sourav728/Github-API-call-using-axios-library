
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import axios from "axios"
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userMsg: null
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/sourav728')
      .then(response => {
        this.setState({ userMsg: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      this.state.userMsg != null &&
      <View style={styles.container}>
         <Text style={styles.title}>Github Api Example</Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: this.state.userMsg.avatar_url }}
        />
        <Text>UserName : {this.state.userMsg.login}</Text>
        <Text>Id : {this.state.userMsg.id}</Text>
        <Text>Name : {this.state.userMsg.name}</Text>
        <Text>Location : {this.state.userMsg.location}</Text>
        <Text>Bio : {this.state.userMsg.bio}</Text>
        <Text>Repositories : {this.state.userMsg.public_repos}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFD8DC',
  },

  title: {
    fontSize: 22,
    color: "#212121",
    textAlign: 'center',
    marginBottom: 15
  },

});
