/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

/*
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import { AppLoading } from "expo";

import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import AppNavigator from "./navigation/AppNavigator";

//Define your client for your ApolloProvider connecting to your graphql server.
const client = new ApolloClient({
  // initialize cache
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server
  link: new HttpLink({
    uri: "https://graphql-server-node-js-103.herokuapp.com/graphql"
  })
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        // load assets here
      ]),
      Font.loadAsync({
        // load fonts here
      })
    ]);
  };

  handleLoadingError = () => {
    // Any error handling can be done here
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </ApolloProvider>
    );
  }
}*/

import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import { AppLoading } from "expo";

import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import { gql, useQuery } from '@apollo/client'

import AppNavigator from "./navigation/AppNavigator";

//Define your client for your ApolloProvider connecting to your graphql server.
const client = new ApolloClient({
  // initialize cache
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server
  link: new HttpLink({
    uri: "https://graphql-server-node-js-103.herokuapp.com/graphql"
  })
});

const GET_CLIENTS = gql`
  query {
    clients {
      ID
      Name
    }
  }
`;

export default class App extends React.Component {

  state = {
    isLoadingComplete: false
  };

  loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        // load assets here
      ]),
      Font.loadAsync({
        // load fonts here
      })
    ]);
  };

  handleLoadingError = () => {
    // Any error handling can be done here
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { data, loading } = useQuery(GET_CLIENTS)
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <View>
        <Text onPress={() => console.log(data)} style={styles.text}>Blah Blah Blah</Text>
      </View>
    );
  }
}


/*
<ApolloProvider client={client}>
        <View style={styles.container}>
          <View>
            <Text>Blah Blah Blah</Text>
          </View>
        </View>
      </ApolloProvider>
*/

const styles = StyleSheet.create({
  text: {
    color: 'black'
  }, container: {
    flex: 1
  }
});