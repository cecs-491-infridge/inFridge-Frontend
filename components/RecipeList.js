import React from 'react';
import { View } from 'react-native';
import { Body, Button, Card, Container, Header, Icon, Content, Left, List, ListItem, Right, Text, Separator } from 'native-base'


/*
Component that 
*/
class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        //console.log("trying to print console")
        //console.log(this.props)
    }

    onComponentDidMount() {
        console.log(this.props.recipe)

    }



    render() {
        return (


            <Content>
                <ListItem title="List">
                    <Left>
                        <Text>{ingredient.name}</Text>

                    </Left>
                    <Right>
                        <Text>{ingredient.amount}{" "}{ingredient.unit}</Text>
                    </Right>
                </ListItem>
            </Content>
        );
    }
}
export default RecipeList;