import React, { Component } from 'react';
import { Container, Drawer, Header, Body, Text, Title, Left, Button, Icon, Content, Right, Tab, Tabs } from 'native-base';
import FeedDrawer from '../components/FeedDrawer';
import Tab1 from '../components/RecRecipeTab';
import Tab2 from '../components/SearchRecipeTab';

export default class RecipeScreen extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <FeedDrawer navigation={this.props.navigation}>
        <Container padder>

          {/* <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Recipes</Title>
            </Body>
            <Right/>
          </Header> */}

          <Tabs>

            <Tab heading="Recommended" >
              <Tab1 navigation={this.props.navigation}/>
            </Tab>

            <Tab heading="Explore">
              <Tab2 navigation={this.props.navigation}/>
            </Tab>

          </Tabs>
          
        </Container>
      </FeedDrawer>
    );
  }
}