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

export default class SearchRecipe extends Component {
  
  
  constructor(props) {
    super(props);
    
    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //this.getRecipe();

    console.log('reloaded-------------------');
    this.state = {
     // dataSource: ds.cloneWithRows(['me', 'you']),
      search: '',
      recipeList:[],
      isFetching: false
    };
  }




  updateSearch = search => {
    // Change to use timeout

    this.setState({ search });
  };



  getRecipe = async() => {    
    try{
      //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      const search = this.state.search;

      this.setState({ isFetching: true })

      let recipeResponse = await axios.get(`http://school.corg.network:3000/search-recipe`, {
        params:{
          search
        }
      });
      recipeResponse = JSON.parse(recipeResponse.request._response);
      this.setState({
        //dataSource: ds.cloneWithRows([recipeResponse.results[1].title, recipeResponse.results[0].title]),
        recipeList: recipeResponse.results})
      //console.log(recipeResponse);
    }
    catch(err){
      console.error(err);
    }

    this.setState({ isFetching: false })
    
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
          this.state.recipeList.map(item => <Recipe key={item.id} recipe={item}/>)
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