import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import ListNotification from "../components/ListNotification";
import {
  Body,
  Button,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Text,
  Title
} from "native-base";

export default class NotificationScreen extends Component {
  render() {
    return (
      <Container>
          
        <Header>
          <Left />
          <Body>
            <Title>Notifications</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Content>
          <List>
            {/* <TouchableOpacity
              onPress={
                () => {
                  console.log(this.props)
                  this.props.navigation.navigate('ChatMessage')
                }
              }
            > */}
              {/* <ListAvatar onOpenChatMessage={this.onOpenChatMessage}/> */}
            {/* </TouchableOpacity> */}
            {/* <ListAvatar onOpenChatMessage={this.onOpenChatMessage}/> */}
            <ListNotification/>
            <ListNotification/>
          </List>
        </Content>
        </Content>
      </Container>
    );
  }
}
