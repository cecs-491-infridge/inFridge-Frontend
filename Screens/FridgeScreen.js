import React from 'react';
import { connect } from 'react-redux'
import { ScrollView, StyleSheet, Modal, View } from 'react-native';
import { Body, Button, Container, Header, Item, Input, Icon, Left, Separator, Right, Text, Title } from 'native-base';

import FoodForm from '../components/FoodForm';
import Food from '../components/Food';
import { startAddFood, startDeleteFood } from '../actions/fridge';
import { filterFood, sortFood } from '../selectors/food'

class FridgeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fridge: this.props.fridge,
      search: '',
      addingFood: false
    }
  }

  closeFoodForm = () => this.setState({addingFood:false})

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.fridge !== this.state.fridge) {
      this.setState({ fridge: nextProps.fridge });
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

  onAddFood = () => {
      this.setState({addingFood: true});
  }

  render() {
    const { search } = this.state;

    return (
      <Container>

        <Modal
          animationType='fade'
          transparent={true}
          visible={this.state.addingFood}
          onRequestClose={() => {
            this.setState({ addingFood: false });
          }}
        >
          <View
            style={{
              height: 250,
              marginTop: 70,
              borderColor: '#ccc',
              borderWidth: 1,
              borderStyle: 'solid',
              backgroundColor: 'white',
              elevation: 20,
              padding: 10,
              borderRadius: 4,
            }}
          >
            <FoodForm
                onSubmit={(food) => {
                  this.props.dispatch(startAddFood(food));
                }}
                onClose={this.closeFoodForm}
            /> 
          </View>

        </Modal>
        
        <Header>
          <Left />
          <Body>
            <Title>My Fridge</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={this.onAddFood}
            >
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <Item>
          <Icon small name="ios-search" />
          <Input
            placeholder="Search Fridge..."
            onChangeText={this.updateSearch}
            value={search} />
          <Right>
            <Button iconLeft light rounded>
              <Text>Search</Text>
            </Button>
          </Right>
        </Item>
        <ScrollView>
          <Separator boarderd>
            <Text>Public</Text>

          </Separator>
          {
            this.state.fridge.map(food =>

              <Food
                key={food._id}
                food={food}
                onDelete={id => this.props.dispatch(startDeleteFood(id))}
              />
            )
          }
          <Separator boarderd>
            <Text>Partial Public</Text>
          </Separator>
          <Separator boarderd>
            <Text>Private</Text>
          </Separator>

        </ScrollView>
      </Container>
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