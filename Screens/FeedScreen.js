import React from 'react';
import { connect } from 'react-redux'
import { Modal, StyleSheet, ScrollView, View } from 'react-native';
import { Body, Button, Content, Container, Drawer, Header, Item, Input, Icon, Left, Right, Text, Title } from 'native-base';

import PostForm from '../components/PostForm';
import Post from '../components/Post';
import { startAddTransaction, startDeleteTransaction, startLikeTransaction } from '../actions/transactions';
import FeedDrawer from '../components/FeedDrawer';

import { testUser } from '../testUser';
const userId = testUser.userId;

class FeedScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addingPost: false
    }
    
  }

  closeDrawer() {
    this._drawer._root.close()
  };
  openDrawer() {
    this._drawer._root.open()
  };

  onAddPost = () => {
    this.setState({ addingPost: true });
  }
  onClosePostForm = () => {
    this.setState({ addingPost: false });
  }

  render() {
    console.log(this.props.transactions)
    return (
      <FeedDrawer
        navigation={this.props.navigation}
        onAdd={this.onAddPost}
      >
          <ScrollView>
          <Modal
          animationType='fade'
          transparent={true}
          visible={this.state.addingPost}
          onRequestClose={() => {
            this.setState({ addingPost: false });
          }}
        >
          <View
            style={{
              height: 350,
              marginTop: 70,
              borderColor: '#ccc',
              borderWidth: 1,
              borderStyle: 'solid',
              backgroundColor: 'white',
              elevation: 20,
              padding: 10,
              borderRadius: 4,
            }}
          >
            <PostForm
              onClose={this.onClosePostForm}
              onSubmit={(transaction) => {
                this.props.dispatch(startAddTransaction(transaction));
              }}
            />
          </View>

        </Modal>
          {/* <Item>
            <PostForm
              onSubmit={(transaction) => {
                this.props.dispatch(addTransaction(transaction));
              }}
            />
          </Item> */}
            {
              this.props.transactions && 
              this.props.transactions.map(transaction =>
                <Post
                  key={transaction._id}
                  transaction={transaction}
                  onLike={(postId, updates) => {
                    this.props.dispatch(startLikeTransaction(userId, postId, updates))
                  }}
                  onDelete={(id) => {
                    this.props.dispatch(startDeleteTransaction(id));
                  }}
                />
              )
            }

          </ScrollView>
      </FeedDrawer>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {transactions: state.transactions}
};

export default connect(mapStateToProps)(FeedScreen)

