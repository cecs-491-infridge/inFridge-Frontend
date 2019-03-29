import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions,ScrollView, Image } from 'react-native';
import { Container, Header, Body, Text, Title, Icon, Button, Content, Tab, Tabs, Left} from 'native-base';


import Tab1 from '../components/RecommendedRecipe';
import Tab2 from '../components/SearchRecipe';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;


export default class SpecificRecipeScreen extends Component {

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
          <Title>Recipe</Title>
        </Body>
        </Header>
            
            <ScrollView>

                  
                <Image
                style={{
                  height: imageHeight, width: imageWidth 
                }}
                source={{uri: "https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg"}}
                />

                  <Tabs>

                  <Tab heading="Recipe Instructions">
                    <Tab1 />
                  </Tab>

                  <Tab heading="Nutrition Facts">
                    <Tab2 />
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