import React from "react";
import { TextInput, StyleSheet, Linking } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";

import SignIn from "../components/SignIn";
import { Body, Button, Container, Form, Icon, Input, Item, Header, Label, Left, Right, Text, Title, View, Content } from "native-base";

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      signInState: 0
      //0:  WELCOME to INFRIDGE!!! Sign up or login????
      //1:  SIGN UP PART 1:
      //      need to authenticate with Microsoft Graph API. Are they a real student?
      //      open WEBVIEW: call school.corg.network/create-user
      //      once they login to GRAPH, save the KEY in the DB and create a temporary user
      //      onNavigationStateChange to get the KEY in the frontend
      //2:  SIGN UP PART 2
      //      create a new account with InFridge!
      //      send new username, password, and key to backend to verify the keys -> FEED SCREEN
      //3:  Login
      //      send username, password to backend -> FEED SCREEN
    };
    this.LINKTOAUTH = "";
  }

  // async componentDidMount(){
  //   try{
  //     const a = await axios.post("https://school.corg.network:3000/authenticate-user");
  //     console.log("HEEELLLLLLLOOOOOOOOOOOO_----------------------------------------------------------------------------------------------");
  //     console.log(a);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  onSignIn = async () => {
    this.state.id;
    console.log(
      "\t\t\t\t\t\t\t\t\t\t---------------------------WENT INTO THE GOOGLE METHODDDDDDDDDDDDDDDDDDDDDDDDDDDD"
    );

    try {
      // this.LINKTOAUTH = await axios.post("https://school.corg.network:3000/authenticate-user");
      this.LINKTOAUTH = await axios.post(
        "https://localhost:3001/authenticate-user"
      );
      console.log(this.LINKTOAUTH);
    } catch (err) {
      console.log(err);
    }
  };

  _onNavigationStateChange(webViewState) {
    console.log(webViewState.url);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>inFridge</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          {//0:  WELCOME to INFRIDGE!!! Sign up or login????
          this.state.signInState === 0 && (
            <View>
              <Button block onPress={() => this.setState({ signInState: 3 })}>
                <Text>Sign In</Text>
              </Button>
            </View>
          )}
          {//1:  SIGN UP PART 1:
          //      need to authenticate with Microsoft Graph API. Are they a real student?
          //      open WEBVIEW: call school.corg.network/create-user
          //      once they login to GRAPH, save the KEY in the DB and create a temporary user
          //      onNavigationStateChange to get the KEY in the frontend
          this.state.signInState === 1 && (
            <WebView
              style={{ flex: 1 }}
              source={{ uri: this.LINKTOAUTH }} //call backend router for school.corg.network/create-user
            />
          )}
          {/* {
              //2:  SIGN UP PART 2
              //      create a new account with InFridge!
              //      send new username, password, and key to backend to verify the keys -> FEED SCREEN
              (this.state.signInState === 2) &&
              */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db"
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

export default SignInScreen;
