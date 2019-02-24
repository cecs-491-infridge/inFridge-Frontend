import React from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import SignIn from '../components/SignIn';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    onSignIn = () => {
        this.state.id;
    }

    render() {
      return (
        <View>
            <SignIn/>
            <Button
                title="Go to Home Page"
                onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
                title="Go to Feed Page"
                onPress={() => this.props.navigation.navigate('Feed')}
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
