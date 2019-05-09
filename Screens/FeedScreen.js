import React from 'react';
import { connect } from 'react-redux'
import { Modal, StyleSheet, ScrollView, View } from 'react-native';
import { Body, Button, Content, Container, Drawer, Header, Item, Input, Icon, Left, Right, Text, Title } from 'native-base';

import PostForm from '../components/PostForm';
import Post from '../components/Post';
import { startAddTransaction, startDeleteTransaction, startLikePost, startCommentPost } from '../actions/transactions';
import FeedDrawer from '../components/FeedDrawer';

import { testUser } from '../testUser';
const userId = testUser.userId;

export class FeedScreen extends React.Component {
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


  onLike = (transaction) => {
    const token = this.props.user.token;
    const userId = this.props.user.userId;
    let likes = transaction.likes;

    const alreadyLiked = likes.some(id => id === userId);
    if(alreadyLiked) likes = likes.filter(id => id !== userId);
    else likes.push(userId);

    const updates = {
      likes
    }

    this.props.dispatch(startLikePost(token, transaction._id, updates));
  }

  onComment = (transaction, comment) => {
    const token = this.props.user.token;
    const userId = this.props.user.userId;
    comment = {
      ...comment,
      authorName: this.props.user.username
    }
    
    let comments = transaction.comments;
    comments.push(comment);
    
    const updates = {
      comments
    }

    this.props.dispatch(startCommentPost(token, transaction._id, comment.body, updates));
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
              onSubmitTransaction={(transaction, photo) => {
                const token = this.props.user.token;
                const post = {
                  authorName: this.props.user.username,
                  ...transaction
                }

                this.props.dispatch(startAddTransaction(token, post, photo));
              }}
              onSubmitStatusPost={(transaction, photo) => {
                const token = this.props.user.token;
                const post = {
                  authorName: this.props.user.username,
                  ...transaction
                }

                this.props.dispatch(startAddStatusPost(token, post, photo));
              }
            }
            />
          </View>

        </Modal>

        {
            this.props.transactions && 
            this.props.transactions.map(transaction =>
              <Post
                key={transaction._id}
                transaction={transaction}
                onLike={this.onLike}
                onComment={this.onComment}
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
  return ({
  user: state.user,
  transactions: state.transactions.list
});
}

export default connect(mapStateToProps)(FeedScreen);
