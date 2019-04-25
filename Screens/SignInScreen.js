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
          username: '',
          password: '',
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
        }
        this.LINKTOAUTH = "";
        this.gotToken = false;
        this.count = 0;
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
        
        console.log("\t\t\t\t\t\t\t\t\t\t---------------------------WENT INTO THE GOOGLE METHODDDDDDDDDDDDDDDDDDDDDDDDDDDD");

        try{
          const res = await axios.post("https://school.corg.network:3002/authenticate-user");
          //this.LINKTOAUTH = await axios.post("http://localhost:3000/authenticate-user");
          
          console.log(res)
          console.log("printing authURL:")
          console.log(res.data.authURL)
          this.LINKTOAUTH = res.data.authURL;
          
          this.setState({ signInState: 1 })
          console.log(this.LINKTOAUTH);
        }catch(err){
          console.log("HIIIIIIIIIIIIIIIIIIIIIIIII THEREEEEEEEEEEEEEEEE");
          console.log(err);
        }

    }

    _onNavigationStateChange = async function(webViewState){
      this.count++;
      console.log("here is the url:");
      console.log(webViewState.url);
      let url = webViewState.url;
      if (url.contains("https://school.corg.network:3002/graph-response?")){
        let code = url.match(/code=[a-zA-Z0-9-_]+/gi)[0].substring(5);
        try{
          if (!this.gotToken)
          {
            this.gotToken = true;
            console.log("COUNT=");
            console.log(this.count);
            let res = await axios.post("https://school.corg.network:3002/verify-token",{
              code
            })
            console.log("RES!!!!!!");
            console.log(res);
            if (res.status == 200)
            {
              this.signInState = 2;
            }
            else
            {
              this.onSignIn();
            }
          }
        }catch(err){
          console.error(err);
        }
      }
    }

    render() {
      return (
        <View style={{flex:1}}>
            {
              //0:  WELCOME to INFRIDGE!!! Sign up or login????
              (this.state.signInState === 0) &&
              <View>
                <Button
                  title="Sign Up"
                  onPress={this.onSignIn}
                  /*onPress={() => this.setState({ signInState: 1 })}*/
                />
                <Button
                  title="Login"
                  onPress={() => this.setState({ signInState: 3 })}
                />
              </View>
            }
            {
              //1:  SIGN UP PART 1:
              //      need to authenticate with Microsoft Graph API. Are they a real student?
              //      open WEBVIEW: call school.corg.network/create-user
              //      once they login to GRAPH, save the KEY in the DB and create a temporary user
              //      onNavigationStateChange to get the KEY in the frontend
              (this.state.signInState === 1) &&
              <WebView
                style={{flex:1}}
                source={{uri: this.LINKTOAUTH}}
                /*source={{uri: "https://google.com"}}*/
                onNavigationStateChange={this._onNavigationStateChange.bind(this)}
              />
            }
            {/* {
              //2:  SIGN UP PART 2
              //      create a new account with InFridge!
              //      send new username, password, and key to backend to verify the keys -> FEED SCREEN
              (this.state.signInState === 2) &&
              */
              //(this.state.signInState === 2) &&

            }
        </View>
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
