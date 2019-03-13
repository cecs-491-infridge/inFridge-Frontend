import React from 'react';
import { connect } from 'react-redux'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import PostForm from '../components/PostForm';
import Food from '../components/Food';
import { startAddFood, startDeleteFood } from '../actions/fridge';
import { filterFood, sortFood } from '../selectors/food'

class FridgeScreen extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        fridge: this.props.fridge,
        search: ''
      }
    }

    // Lifecycle method
    // Redux state changes, so update fridge
    componentWillReceiveProps(nextProps) {
      if (nextProps.fridge !== this.state.fridge) {
        this.setState({ fridge: nextProps.fridge });
      }
    }

    updateSearch = search => {
      // Change to use timeout
      let fridge = filterFood(this.props.fridge, search);

      this.setState({
        fridge,
        search
      });
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
                <Food
                  key={food._id}
                  food={food}
                  onDelete={id => this.props.dispatch(startDeleteFood(id))}
                />
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