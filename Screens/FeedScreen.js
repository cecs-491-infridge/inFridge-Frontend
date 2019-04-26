import React from 'react';
import { connect } from 'react-redux'
import { Modal, StyleSheet, ScrollView, View } from 'react-native';
import { Body, Button, Content, Container, Drawer, Header, Item, Input, Icon, Left, Right, Text, Title } from 'native-base';

import PostForm from '../components/PostForm';
import Post from '../components/Post';
import { startAddTransaction, startDeleteTransaction, startUpdateTransaction } from '../actions/transactions';
import FeedDrawer from '../components/FeedDrawer';

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
              backgroundColor: 'grey',
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
                this.props.dispatch(startAddTransaction(transaction));
              }}
            />
          </Item> */}
            {
              this.props.transactions.map(transaction =>
                <Post
                  key={transaction._id}
                  transaction={transaction}
                  onLike={(id, updates) => {
                    this.props.dispatch(startUpdateTransaction(id, updates))
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

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(FeedScreen)

// import React from 'react';
// import { connect } from 'react-redux'
// import { StyleSheet, ScrollView, View } from 'react-native';
// import { Body, Button, Content, Container, Drawer, Header, Item, Input, Icon, Left, Right, Text, Title } from 'native-base';

// import PostForm from '../components/PostForm';
// import Post from '../components/Post';
// import { startAddTransaction, startDeleteTransaction, startUpdateTransaction } from '../actions/transactions';
// import SideBar from '../components/SideBar';

// class FeedScreen extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   closeDrawer() {
//     this._drawer._root.close()
//   };
//   openDrawer() {
//     this._drawer._root.open()
//   };

//   render() {
//     return (

//       <Container padder>
//         <Drawer
//           ref={(ref) => { this._drawer = ref }}
//           content={<SideBar navigation={this.props.navigation} />}
//           onClose={() => this.closeDrawer()}>
//             <Header>
//               <Left>
//                 <Button
//                   transparent
//                   onPress={() => this.openDrawer()}
//                 >
//                   <Icon name='menu' />
//                 </Button>
//               </Left>
//               <Body>
//                 <Title>inFridge</Title>
//               </Body>
//               <Right>
//                 <Button
//                   transparent
//                 >
//                   <Icon name='add' />
//                 </Button>
//               </Right>
//             </Header>
//         </Drawer>

//           <ScrollView>
//             <Item>
//               <PostForm
//                 onSubmit={(transaction) => {
//                   this.props.dispatch(startAddTransaction(transaction));
//                 }}
//               />
//             </Item>
//             {
//               this.props.transactions.map(transaction =>
//                 <Post
//                   key={transaction._id}
//                   transaction={transaction}
//                   onLike={(id, updates) => {
//                     this.props.dispatch(startUpdateTransaction(id, updates))
//                   }}
//                   onDelete={(id) => {
//                     this.props.dispatch(startDeleteTransaction(id));
//                   }}
//                 />
//               )
//             }

//           </ScrollView>
//         </Container>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   transactions: state.transactions
// });

// export default connect(mapStateToProps)(FeedScreen)