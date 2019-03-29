import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View } from 'react-native';
import { Body, Button, Content, Container, Drawer, Header, Item, Input, Icon, Left, Right, Text, Title } from 'native-base';

import PostForm from '../components/PostForm';
import Post from '../components/Post';
import { startAddTransaction, startDeleteTransaction } from '../actions/transactions';
import SideBar from '../components/Sidebar';

class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  closeDrawer() {
    this._drawer._root.close()
  };
  openDrawer() {
    this._drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()}>

        <Container padder>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.openDrawer()}
              >
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>inFridge</Title>
            </Body>
            <Right>
              <Button
                transparent
              >
                <Icon name='add' />
              </Button>
            </Right>
          </Header>
          <Item>
            <PostForm
              onSubmit={(transaction) => {
                this.props.dispatch(startAddTransaction(transaction));
              }}
            />
          </Item>

          <ScrollView>



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
      </Drawer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#3498db',
//   },
//   welcome: {
//     fontSize: 50,
//     textAlign: 'center',
//     margin: 10,
//   }
// });

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(FeedScreen)