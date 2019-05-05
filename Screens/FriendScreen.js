import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View } from 'react-native';
import { Body, Button, Content, Container, Drawer, Header, Item, Input, InputGroup, Icon, Left, Right, Text, Title } from 'native-base';

import FeedDrawer from '../components/FeedDrawer';
import PostForm from '../components/PostForm';
import Post from '../components/Post';
import FriendDivider from '../components/FriendDivider';
import { startAddTransaction, startDeleteTransaction, startUpdateTransaction } from '../actions/transactions';
import axios from 'axios';
import { withNavigation } from 'react-navigation';

class FriendScreen extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
		  friends:[]
	  };
  }

	async componentDidMount(){

		let ret = await axios.get(`http://school.corg.network:3000/get-all-users`);
		if(ret)
			this.setState({
				friends:ret.data.data
			});
	}

	onPress = (id,name) => {
		this.props.navigation.navigate('FriendProfile',{id,name})
	}
		

  render() {
    return (
      <FeedDrawer navigation={this.props.navigation}>
        <ScrollView>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Friends" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
          <FriendDivider friends={this.state.friends} onPress={this.onPress}></FriendDivider>
        </ScrollView>
      </FeedDrawer>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

//export default connect(mapStateToProps)(FriendScreen)
export default withNavigation(FriendScreen);
