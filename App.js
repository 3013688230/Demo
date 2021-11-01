/*import 'react-native-gesture-handler';
import React from 'react';
import {UtilityThemeProvider} from 'react-native-design-utility';
import { NavigationContainer } from '@react-navigation/native';

import {theme} from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import {ApolloProvider} from "@apollo/client";
import { client } from './src/graphql/client';*/

import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Auth0 from 'react-native-auth0';
import { Main } from './src/App/Main';

var credentials = require('./auth0-configuration');
const auth0 = new Auth0(credentials);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { accessToken: null };
    }

    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email'
            })
            .then(credentials => {
                Alert.alert('AccessToken: ' + credentials.accessToken);
                this.setState({ accessToken: credentials.accessToken });
            })
            .catch(error => console.log(error));
    };

    
    

    render() {
        let loggedIn = this.state.accessToken === null ? false : true;
        return (
        <View style = { styles.container }>
            <Text style = { styles.header }> Auth0 Demo - Login </Text>
            <Text>
                Tu{ loggedIn ? ' ' : ' no ' }estas . </Text>
                <Button onPress = { loggedIn ? this._onLogout : this._onLogin }
                title = { loggedIn ? 'Cerrar sesión' : 'Iniciar sesión' }/>
        </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default App;

/*import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import CenterSpinner from './src/screens/components/Util/CenterSpinner';

export default class App extends React.Component {
  state = {
    isLoadingComplete: true,
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <CenterSpinner />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});*/