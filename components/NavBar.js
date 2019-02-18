import React from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

const NavBar = (props) => (
    <View style={styles.container}>
          <Button
            title="Sign In"
            onPress={() => this.props.navigation.navigate('SignIn')}
          />
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Feed"
            onPress={() => this.props.navigation.navigate('Feed')}
          />
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3498db',
      position: 'absolute',
      bottom: 0
    }
});

export default NavBar;