import React, { Component } from "react";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from "native-base";
import { TouchableOpacity } from "react-native";
export default class ListAvatar extends Component {
  render() {
    return (
        <ListItem
          avatar
          button
          onPress={this.props.onOpenChatMessage}
        >
          <Left>
            <Thumbnail
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
              }}
            />
          </Left>
          <Body>
            <Text>{this.props.name}</Text>
            <Text note>{this.props.msg}</Text>
          </Body>
          <Right>
            <Text note>{this.props.time}</Text>
          </Right>
        </ListItem>
      // </TouchableOpacity>
    );
  }
}
