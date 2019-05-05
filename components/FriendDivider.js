import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class FriendDivider extends Component {

	constructor(props){
		super(props);
		this.state = {
			id:this.props.friends._id
		}
	}


  render() {
    return (
      <Container>
        <Content>
		<List>
			{this.props.friends.map(friend =>
				<ListItem
					button
					onPress={() => {
						this.props.onPress(friend._id,friend.name);
					}}
				>
					<Text>{friend.name}</Text>
				</ListItem>
			)}
		</List>
        </Content>
      </Container>
    );
  }
}
		/*
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
			*/
