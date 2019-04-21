import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Body, Button, Container, Header, Content, List, ListItem, Left, Right, Thumbnail, Text, Title } from 'native-base';

import ListAvatar from '../components/ListAvatar';

export default class MessageScreen extends Component {

  onOpenChatMessage = () => {
    this.props.navigation.navigate('ChatMessage')
  }

  render() {
    console.log(this.props)
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
            {/* <TouchableOpacity
              onPress={
                () => {
                  console.log(this.props)
                  this.props.navigation.navigate('ChatMessage')
                }
              }
            > */}
              <ListAvatar onOpenChatMessage={this.onOpenChatMessage}/>
            {/* </TouchableOpacity> */}
            <ListAvatar onOpenChatMessage={this.onOpenChatMessage}/>
          </List>
        </Content>
      </Container>
    );
  }
}