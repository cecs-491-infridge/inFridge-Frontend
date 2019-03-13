import React from 'react';
import { Button, TextInput, StyleSheet, Text, View, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

import SignIn from '../components/SignIn';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          signInState: 0
          //0:  WELCOME to INFRIDGE!!! Sign up or login????
          //1:  SIGN UP PART 1:
          //      need to authenticate with Microsoft Graph API. Are they a real student?
          //      open WEBVIEW: call school.corg.network/create-user
          //      once they login to GRAPH, save the KEY in the DB and create a temporary user
          //      onNavigationStateChange to get the KEY in the frontend
          //2:  SIGN UP PART 2
          //      create a new account with InFridge!
          //      send new username, password, and key to backend to verify the keys -> FEED SCREEN
          //3:  Login
          //      send username, password to backend -> FEED SCREEN
        }
    }

    // onSignIn = () => {
    //     this.state.id;
    //     console.log("\t\t\t\t\t\t\t\t\t\t---------------------------WENT INTO THE GOOGLE METHODDDDDDDDDDDDDDDDDDDDDDDDDDDD");
    //     //Linking.openURL("https://google.com");
    //     <WebView
    //       style={{flex:1}}
    //       source={{uri: 'https://github.com/facebook/react-native'}} //call backend router for school.corg.network/create-user
    //     />
    //     //this.state.id;
    // }

    _onNavigationStateChange(webViewState){
      console.log(webViewState.url)
    }

    render() {
      return (
        <View style={{flex:1}}>
            {
              (this.state.signInState === 0) &&
              <View>
                <Button
                  title="Sign Up"
                  onPress={() => this.setState({ signInState: 1 })}
                />
                <Button
                  title="Login"
                  onPress={() => this.setState({ signInState: 3 })}
                />
              </View>
            }
            {
              (this.state.signInState === 1) &&
              <WebView
                style={{flex: 1}}
                //source={{uri: 'https://www.google.com'}}
                source={{uri: 'https://school.corg.network:3000/authenticate-user'}}

                ref="webview"
                //source={{uri:this.state.url}}
                onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                javaScriptEnabled = {true}
                domStorageEnabled = {true}
                injectedJavaScript = {this.state.cookie}
                startInLoadingState={false}
              />
            }
            {
              (this.state.signInState === 2) &&
              <View>
                <Text style={styles.welcome}>InFridge Sign Up</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder='New Username'
                    onChangeText={(username) => this.setState({ username })}
                ></TextInput>
                <TextInput
                    style={{height: 40}}
                    placeholder='New Password'
                    onChangeText={(password) => this.setState({ password })}
                ></TextInput>
              </View>
            }

        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3498db',
    },
    welcome: {
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

export default SignInScreen;
