import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class FriendDivider extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
          <ListItem itemDivider>
              <Text>C</Text>
            </ListItem>  
            <ListItem>
              <Text>Chad Chotikasatien</Text>
            </ListItem>
            <ListItem>
              <Text>Chris Senner</Text>
            </ListItem>
            <ListItem>
              <Text>Chris Thai</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>D</Text>
            </ListItem>                    
            <ListItem>
              <Text>Daniel Ring</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>V</Text>
            </ListItem>  
            <ListItem>
              <Text>Victoria Hong</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>W</Text>
            </ListItem>  
            <ListItem>
              <Text>Weisheng Wu</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}