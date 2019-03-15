import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import PostForm from '../components/PostForm';
import Post from '../components/Post';
import { startAddTransaction, startDeleteTransaction } from '../actions/transactions';


class FeedScreen extends React.Component {
    constructor(props){
      super(props);
    }
    
    render() {
      return (
        <Container>
            <Text style={styles.welcome}>Feed</Text>
          <ScrollView>
          

            <PostForm
              onSubmit={(transaction) => {
                this.props.dispatch(startAddTransaction(transaction));
              }}
            />
            {
              this.props.transactions.map(transaction => 
                <Post
                  key={transaction._id}
                  transaction={transaction}
                  onDelete={(id) => {
                    this.props.dispatch(startDeleteTransaction(id));
                  }}
                />
              )
            }
          </ScrollView>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3498db',
    },
    welcome: {
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
    }
});

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(FeedScreen)