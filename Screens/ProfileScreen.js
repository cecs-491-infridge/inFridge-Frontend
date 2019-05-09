import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Body, Button, Col, Container, Drawer, Grid, Header, Item, Input, Icon, Left, Right, Row, Text, Title, Content } from 'native-base';

// food
import FeedDrawer from '../components/FeedDrawer';
import ProfileFood from '../components/ProfileFood';
import { filterFood, sortFood } from '../selectors/food'
import { connect } from 'react-redux'

// post
import Post from '../components/Post';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fridge: this.props.fridge
    }
  }


  render() {
    return (
      <FeedDrawer navigation={this.props.navigation}>
        <Container padder>
          <Header>
            <Left />
            <Content>
              <Title>@wei</Title>
            </Content>
            <Right />
          </Header>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar7.png' }} />

          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
              <Text style={{ textAlignVertical: "center", textAlign: "center", }} >
                20 Contributions
              </Text>
            </Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
              <Text style={{ textAlignVertical: "center", textAlign: "center", }}>
                Love cooking Chinese food and baking!
              </Text>
            </Col>
            <Row style={{ backgroundColor: '#95a5a6', height: 200 }}>
              <ScrollView>
                {/* <Separator boarderd>
                  <Text>Public</Text>

                </Separator> */}
                {
                  !!this.state.fridge &&
                  this.state.fridge.map(food =>

                    <ProfileFood
                      key={food._id}
                      food={food}
                      onDelete={id => this.props.dispatch(startDeleteFood(id))}
                    />
                  )
                }
                {/* <Separator boarderd>
                  <Text>Partial Public</Text>
                </Separator>
                <Separator boarderd>
                  <Text>Private</Text>
                </Separator> */}

              </ScrollView>
            </Row>
            <Row style={{ backgroundColor: '#2c3e50', height: 200 }}>
              <ScrollView>
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
            </Row>
          </Grid>

        </Container>
      </FeedDrawer>
    );
  }
}

const mapStateToProps = (state) => ({
  fridge: sortFood(state.fridge.list, state.sortBy.fridge),
  transactions: state.transactions.list
});

export default connect(mapStateToProps)(ProfileScreen)

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3498db",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});