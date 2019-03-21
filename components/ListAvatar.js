import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
              </Left>
              <Body>
                <Text>Weisheng Wu</Text>
                <Text note>Doing what you like will always keep you happy . . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
    );
  }
}