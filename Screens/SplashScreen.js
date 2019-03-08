import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class SplashScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>inFridge</Text>
          <Text style={styles.instructions}>Help the world by sharing your food.</Text>
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

export default SplashScreen;