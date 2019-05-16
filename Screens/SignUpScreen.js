import React, { Component } from "react";
import { TextInput, StyleSheet, Linking, View } from "react-native";
import { Body, Button, Container, Header, Content, Form, Icon, Item, Input, Label, Left, Right, Text, Title, Textarea } from "native-base";
import axios from "axios";
import { Alert } from "react-native";

/**
 * This class is the Sign Up Screen. Once the user confirms they are a student, they are navigated to this screen to create an account with our InFridge database
 */
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

  /**
   * verifyMatchedPassword makes sure that the confirm password and the password when creating the account is the same
   */
  verifyMatchedPassword = () => {
    if (this.state.confirmedPass == this.state.password) {
      return true;
    }
    return false;
  }

  /**
   * onSubmit is an async function that checks if all the credentials are within the specifications in the functional requirements
   * This includes the username's length, no symbols, etc.
   * An Alert is created if it is wrong
   */
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