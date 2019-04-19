import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import { Container, Header, Body, Text, Title, Icon, Button, Content, Tab, Tabs, Left, Right } from 'native-base';
import axios from 'axios';


import IngredientTab from '../components/IngredientTab';
import InstructionTab from '../components/InstructionTab';
import NutritionTab from '../components/NutritionTab';



const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;


export default class SpecificRecipeScreen extends Component {

  constructor(props) {
    super(props);

    this.getRecipeData();

    this.state = {
      title: null,
      image: null,
      ingredientList: [],
      nutritionList: [],
      instructionList: []
    };
  }






  getRecipeData = async () => {
    try {

      //const search = this.state.search;
      const id = 479101;

      //this.setState({ isFetching: true })

      let recipeResponse = await axios.get(`http://school.corg.network:3000/get-recipe`, {
        params: {
          id
        }
      });

      console.log("CALLING API FOR DATA");
      //console.log(recipeResponse);

      this.setState({
        title: recipeResponse.data.title, image: recipeResponse.data.image, ingredientList: recipeResponse.data.nutrition.ingredients,
        nutritionList: recipeResponse.data.nutrition.nutrients, instructionList: recipeResponse.data.analyzedInstructions[0].steps
      })
      //recipeResponse = JSON.parse(recipeResponse.request._response);

      console.log(this.state);
    }
    catch (err) {
      console.error(err);
    }

    this.setState({ isFetching: false })

  }

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
            {/* <Title>{this.state.title}</Title> */}
            <Title>Recipe</Title>
          </Body>

          <Right>
            <Button
              transparent
            >
              <Icon
                type="MaterialCommunityIcons"
                name='heart-outline'
              //heart
              />
            </Button>
          </Right>
        </Header>

        <ScrollView>


          <Image
            style={{
              height: imageHeight, width: imageWidth
            }}
            source={{ uri: this.state.image }}
          />

          <Tabs>

            <Tab heading="Ingredients">
              <IngredientTab />
            </Tab>

            <Tab heading="Recipe">
              <InstructionTab />
            </Tab>

            <Tab heading="Nutrition">
              <NutritionTab />
            </Tab>

          </Tabs>



        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
});