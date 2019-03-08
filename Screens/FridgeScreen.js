import React from 'react';
import { connect } from 'react-redux'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import PostForm from '../components/PostForm';
import Food from '../components/Food';
import { startAddFood } from '../actions/fridge';
import { filterFood, sortFood } from '../selectors/food'

class FridgeScreen extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        fridge: this.props.fridge,
        search: ''
      }
    }

    updateSearch = search => {
      // Change to use timeout
      let fridge = filterFood(this.props.fridge, search);

      this.setState(prevState => ({
        fridge,
        search
      }));
    };
    
    render() {
      const { search } = this.state;

      return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.welcome}>Fridge</Text>
            <Button
              title="Go to Home Page"
              onPress={() => this.props.navigation.navigate('Home')}
            />

            <SearchBar
              placeholder="Search Fridge..."
              onChangeText={this.updateSearch}
              value={search}
            />
            {
              this.state.fridge.map(food => 
                <Food key={food._id} food={food}/>
              )
            }
          </ScrollView>
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
  fridge: sortFood(state.fridge, state.sortBy.fridge)
});

export default connect(mapStateToProps)(FridgeScreen)