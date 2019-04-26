import React, { Component } from "react";
import { Body, Button, Container, Header, Content, Form, Icon, Item, Input, Label, Left, Right, Text, Title, View, Textarea } from "native-base";
import axios from "axios";

export default class StackedLabelExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  //must have 1 char
  verifyUsernameNotTaken = async () => {
    try {
      console.log("USERNAME:");
      console.log(this.state.username);
      const res = await axios.post("https://school.corg.network:3002/verify-username", {
        username: this.state.username
      });
      console.log("RESSSSS:");
      console.log(res);
      if (res.status == 200)
      {
        this.props.navigation.navigate('SignIn');
        //NAV TO FEED SCREEN
      }
      else
      {
        //PRINT ERR AND CLEAR SHIT
      }
    } catch (err) {
      console.log("HIIIIIIIIIIIIIIIIIIIIIIIII THEREEEEEEEEEEEEEEEE");
      console.log(err);
    }
  }

  //must be less 20 char
  //must be greater than 1
  verifyValidPassword = () => {

  }

  verifyMatchedPassword = () => {

  }

  onSubmit = async () => {
    this.verifyUsernameNotTaken();
  }
  

  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>inFridge</Title>
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
              />
            </Item>
          </Form>
          <View>
            <Button block onPress={this.onSubmit}>
              {/* <Icon name="image" /> */}
              <Text>Sign Up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
