import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View } from 'react-native';
import { Body, Button, Content, Container, Drawer, Header, Item, Input, InputGroup, Icon, Left, Right, Text, Title } from 'native-base';

import FeedDrawer from '../components/FeedDrawer';
import PostForm from '../components/PostForm';
import Post from '../components/Post';
import FriendDivider from '../components/FriendDivider';
import { startAddTransaction, startDeleteTransaction, startUpdateTransaction } from '../actions/transactions';

class FriendScreen extends React.Component {
  constructor(props) {
    super(props);
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
          <FriendDivider></FriendDivider>
        </ScrollView>
      </FeedDrawer>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(FriendScreen)