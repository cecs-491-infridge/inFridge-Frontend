import React from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ''
        }
    }

    onSignIn = () => {
        this.state.id;
    }
    
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Sign In / Login</Text>
            <TextInput
                style={{height: 40}}
                placeholder='Student Id'
                onChangeText={(id) => this.setState({ id })}
            ></TextInput>
            <Button
                title="Sign In"
                onPress={() => {this.onSignIn}}
            />

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