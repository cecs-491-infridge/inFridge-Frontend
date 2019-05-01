import React, { Component } from "react";
import { TextInput, StyleSheet, Linking, View } from "react-native";
import { Body, Button, Container, Header, Content, Form, Icon, Item, Input, Label, Left, Right, Text, Title, Textarea } from "native-base";
import axios from "axios";

export default class StackedLabelExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmedPass: ''
    };
  }

  //must have 1 char
  verifyUsernameLength = () => {
    if (this.state.username.length > 0) {
      return true;
    }
    return false;
  }

  //must be less 20 char
  //must be greater than 1
  verifyValidPassword = () => {
    if (this.state.password.length > 0) {
      return true;
    }
    return false;
  }

  verifyMatchedPassword = () => {
    if (this.state.confirmedPass == this.state.password) {
      return true;
    }
    return false;
  }

  onSubmit = async () => {
    if (this.verifyUsernameLength() && this.verifyValidPassword() && this.verifyMatchedPassword()) {
      try {
        let res = await axios.post("https://school.corg.network:3002/create-user", {
          username: this.state.username,
          password: this.state.password
        });
        if (res.status == 403) {
          //USERNAME ALREADY EXISTS
        }
        else if (res.status == 201) {
          //SUCCESS
          this.props.navigation.navigate('SignIn');
        }
        else {
          //ERROR
        }
      } catch (err) {
        console.log(err);
      }
    }
    else {
      //DISPLAY ERR AND CLEAR INPUT FIELDS
    }
  }


  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
          </Left>
          <Body>
            <Title>Sign Up</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
                rowSpan={1}
                bordered
                placeholder=""
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                rowSpan={1}
                bordered
                placeholder=""
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry={true}
                rowSpan={1}
                bordered
                placeholder=""
                onChangeText={confirmedPass => this.setState({ confirmedPass })}
                value={this.state.confirmedPass}
              />
            </Item>
          </Form>
          <View>
            <Button 
              block 
              onPress={this.onSubmit}
              style={{ backgroundColor: '#34495e' }}
            >
              {/* <Icon name="image" /> */}
              <Text>Sign Up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#3498db',
  },
  container: {

    backgroundColor: '#3498db',
    padding: 50
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#3498db',
    padding: 5
  },
  buttonContainer: {
    backgroundColor: '#16a085',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  welcome: {
    fontSize: 50,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});