import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class FeedScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Feed</Text>
          <Button
            title="Go to Home Page"
            onPress={() => this.props.navigation.navigate('Home')}
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
    }
  });

export default FeedScreen;