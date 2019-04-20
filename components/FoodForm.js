import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Button, Container, Content, Header, Icon, Item, ListItem, Text, Form, View } from "native-base";
import { List } from "react-native-paper";

import { testUser } from '../testUser';
const userId = testUser.userId;

class FoodForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      purchaseDate: "",
      expirationDate: "",
      error: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const error = !this.state.name
      ? "Please include the name of the food"
    //   : !this.validateTradeType()
    //   ? "Please include a valid Trade Type (donate/trade/sell)"
      : "";

    this.setState({ error });

    if (!error) {
      const food = {
        name: this.state.name,
        userId,
        purchaseDate: this.state.purchaseDate,
        expirationDate: this.state.expirationDate
      };

      this.setState({
        name: "",
        purchaseDate: "",
        expirationDate: ""
      });
      this.props.onSubmit(food);
    }
  };

  render() {
    return (
      <Content padder>
        {!!this.state.error && <Text>{this.state.error}</Text>}
        <View>
            
        </View>
        <Form 
            bordered
        >
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Food name..."
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
        </Form>

        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button small onPress={this.onSubmit}>
              <Icon name="md-create" />
              <Text>Post</Text>
            </Button>
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  buttonContainer: {}
});

export default FoodForm;
