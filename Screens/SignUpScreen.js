import React, { Component } from "react";
import { Body, Button, Container, Header, Content, Form, Icon, Item, Input, Label, Left, Right, Text, Title, View } from "native-base";
export default class StackedLabelExample extends Component {
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
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View>
            <Button block>
              {/* <Icon name="image" /> */}
              <Text>Sign Up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
