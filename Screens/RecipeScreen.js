import React, { Component } from 'react';
import { Container, Drawer, Header, Body, Text, Title, Left, Button, Icon, Content, Right, Tab, Tabs } from 'native-base';
import FeedDrawer from '../components/FeedDrawer';
import Tab1 from '../components/RecommendedRecipe';
import Tab2 from '../components/SearchRecipe';

export default class RecipeScreen extends Component {
  constructor(props) {
    super(props);
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

            <Tab heading="Recommended">
              <Tab1 />
            </Tab>

            <Tab heading="Explore">
              <Tab2 />
            </Tab>

          </Tabs>
          
        </Container>
      </FeedDrawer>
    );
  }
}