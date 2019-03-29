import React, { Component } from 'react';
import { Body, Button, Container, Header, Content, List, ListItem, Left, Right, Thumbnail, Text, Title } from 'native-base';

import ListAvartar from '../components/ListAvatar';

export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Messages</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListAvartar></ListAvartar>
            <ListAvartar></ListAvartar>
          </List>
        </Content>
      </Container>
    );
  }
}