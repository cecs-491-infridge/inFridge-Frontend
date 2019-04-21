import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
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
          <Text>notification screen</Text>
        </Content>
      </Container>
    );
  }
}
