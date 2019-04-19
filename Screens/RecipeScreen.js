import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Button, Icon, Content, Tab, Tabs } from 'native-base';
import RecRecipeTab from '../components/RecRecipeTab';
import SearchRecipeTab from '../components/SearchRecipeTab';
export default class RecipeScreen extends Component {
  render() {
    return (
      <Container>

        <Header hasTabs>

        <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        <Body>
          <Title >Recipe</Title>
        </Body>
        </Header>

        <Tabs>

          <Tab heading="Recommended">
            <RecRecipeTab />
          </Tab>

          <Tab heading="Explore">
            <SearchRecipeTab />
          </Tab>

        </Tabs>



      </Container>
    );
  }
}