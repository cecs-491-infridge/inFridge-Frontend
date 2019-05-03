import React, { Component } from "react";
import { Body, Button, Container, Header, Content, Form, Icon, Item, Input, Label, Left, Right, Text, Title, View, Textarea } from "native-base";
import axios from "axios";
import { Alert } from "react-native";

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
  //upper and lowercase, numbers allowed
  //no symbols
  verifyUsernameLength = () => {
    //let user = this.state.username;
    //let userMatch = user.match(/^[a-zA-Z0-9]+$/);
    //console.log("USSSSSSSSSSSERRRRRRRRRRR:")
    //console.log(userMatch);
    if (/^[a-zA-Z0-9]+$/.test(this.state.username))
    {
      return true;
    }
    console.log("FAILLLLLLLLLLLLLLLLLLL");
    return false;
  }

  //must be less 20 char
  //must be greater than 10
  //contain upper case, lower case, symbol, number
  verifyValidPassword = () => {
    if (this.state.password.length >= 10 && this.state.password.length <= 20 && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,20}$/.test(this.state.password))
    {
      return true;
    }
    return false;
  }

  verifyMatchedPassword = () => {
    if (this.state.confirmedPass == this.state.password)
    {
      return true;
    }
    return false;
  }

  onSubmit = async () => {
    if (!this.verifyUsernameLength())
    {
      //DISPLAY ERR AND CLEAR INPUT FIELDS
      Alert.alert(
        'Invalid Username',
        'Username must contain:\n-At least one character & no symbols\n-Upper/lowercase & numbers ok',
        [
          {text: 'Dismiss', onPress: () => console.log('Dismiss Username Pressed')},
        ],
        {cancelable: false},
      );
    }
    else
    {
      if (!this.verifyValidPassword())
      {
        Alert.alert(
          'Invalid Password',
          'Password must contain:\n-Between 10-20 characters\n-1 uppercase & 1 lowercase\n-1 symbol & 1 number',
          [
            {text: 'Dismiss', onPress: () => console.log('Dismiss Password Pressed')},
          ],
          {cancelable: false},
        );
      }
      else
      {
        if (!this.verifyMatchedPassword())
        {
          Alert.alert(
            'Passwords do not match',
            'Password and the Confirm Password fields must match',
            [
              {text: 'Dismiss', onPress: () => console.log('Dismiss Confirm Password Pressed')},
            ],
            {cancelable: false},
          );
        }
        else
        {
          try{
            let res = await axios.post("https://school.corg.network:3002/create-user", {
                username: this.state.username,
                password: this.state.password
            });
            if (res.status == 201)
            {
              //SUCCESS
              this.props.navigation.navigate('SignIn');
            }
          } catch(err) {
              console.log(err);
              if (err.response.status == 403)
              {
                console.log("USERRRRRRRRRRRNAMEEEEEEEEE ALREADY EXISTS!!!!")
                //USERNAME ALREADY EXISTS
                Alert.alert(
                  'Username already exists',
                  'Choose a different username',
                  [
                    {text: 'Dismiss', onPress: () => console.log('Dismiss Existing Username Pressed')},
                  ],
                  {cancelable: false},
                );
              }
              else
              {
                //ERROR
              }
          }
        }
      }
    }
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
                rowSpan={1}
                bordered
                placeholder=""
                onChangeText={confirmedPass => this.setState({ confirmedPass })}
                value={this.state.confirmedPass}
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
