import React from 'react';
import { View } from 'react-native';
import { Body, Button, Card, Container, Header, Icon, Content, Left, List, ListItem, Right, Text, Separator } from 'native-base'


export default class IngredientTab extends React.Component {


    render() {
        return (
            <Content>


                {
                    !this.props.ingredientList &&
                    <Text>Sorry no ingredients~~</Text>
                }
                {
                    !!this.props.ingredientList &&
                    this.props.ingredientList.map(
                        ingredient => (
                            <ListItem title="Ingredients">
                                <Left>
                                    <Text>{ingredient.name}{" "}</Text>
                                </Left>
                                <Body>
                                <Text>{ingredient.amount}{" "}{ingredient.unit}</Text>
                                </Body>
                                <Right>
                                    
                                </Right>
                            </ListItem>
                        )
                    )
                }
            </Content>
        );
    }
}
