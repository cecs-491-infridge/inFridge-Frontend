import React from 'react';
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View } from 'react-native';

import PostForm from '../components/PostForm';
import Food from '../components/Food';
import { startAddFood } from '../actions/fridge';


class FridgeScreen extends React.Component {
    constructor(props){
      super(props);
    }
    
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Fridge</Text>
          <Button
            title="Go to Home Page"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          {
            this.props.fridge.map(food => 
              <Food key={food._id} food={food}/>
            )
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
    }
});

const mapStateToProps = (state) => ({
  fridge: state.fridge
});

export default connect(mapStateToProps)(FridgeScreen)