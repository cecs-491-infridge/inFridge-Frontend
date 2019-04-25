import React, { Component } from 'react';
import { View, ListView, StyleSheet,} from 'react-native';
import { Container, Header, Content, List, ListItem, Item, Icon, Input, Button, Text, Right } from 'native-base';
import axios from 'axios';

import Recipe from './Recipe';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default class SearchRecipeTab extends Component {
  
  
  constructor(props) {
    super(props);

    console.log("hello")
    console.log(this.props)
    

    this.state = {
      search: '',
      recipeList:[],
      isFetching: false
    };
  }




  updateSearch = search => {

    this.setState({ search });
  };



  getRecipe = async() => {    
    try{

      const search = this.state.search;

      this.setState({ isFetching: true })

      let recipeResponse = await axios.get(`http://school.corg.network:3000/search-recipe`, {
        params:{
          search
        }
      });
      recipeResponse = JSON.parse(recipeResponse.request._response);
      this.setState({
        recipeList: recipeResponse.results})
      //console.log(recipeResponse);
    }
    catch(err){
      console.error(err);
    }

    this.setState({ isFetching: false })
    
  }
  
  onClickRecipe = (id) => {
      this.props.navigation.navigate('SpecificRecipe',
      { id });
  }
  

  render() {
    //const { search } = this.state;
    return (
      <Container>

      <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input
                placeholder="Search Fridge..."
                onChangeText={this.updateSearch}
                value={this.state.search} />
                {/* <Icon name="ios-people" /> */}
                <Right>
            <Button transparent onPress={this.getRecipe}>
              <Text>Search</Text>
            </Button>
          </Right>
              </Item>

            </Header>
        
        <Content>

        {
          this.state.isFetching &&
          <Text>Loading...</Text>
        }
        {
          !this.state.isFetching &&
          !!this.state.recipeList &&
          this.state.recipeList.map(item => <Recipe key={item.id} recipe={item} onClick={this.onClickRecipe}/>)
        }

        {/* <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}
      /> */}
        </Content>
      </Container>
    );
  }
}