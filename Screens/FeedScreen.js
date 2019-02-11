import React from 'react';
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View } from 'react-native';

import PostForm from '../components/PostForm';
import Post from '../components/Post';
import { startAddTransaction } from '../actions/transactions';

class FeedScreen extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Feed</Text>
          <Button
            title="Go to Home Page"
            onPress={() => this.props.navigation.navigate('Home')}
          />

          <PostForm
            onSubmit={(transaction) => {
              this.props.dispatch(startAddTransaction(transaction));
            }}
          />
          {
            this.props.transactions.map(transaction => {
              <Post transaction={transaction}/>
            })
          }
        </View>
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