import React from 'react';
import { View } from 'react-native';
import { Body, Button, Card, Container, Header, Icon, Content, Left, List, ListItem, Right, Text, Separator } from 'native-base'


export default class NutritionTab extends React.Component {
   
    
    render() {
        return(
            <Content>


                {
                    !this.props.nutritionList &&
                    <Text>Sorry no nutrition facts~~</Text>
                }
                {
                    !!this.props.nutritionList &&
                    this.props.nutritionList.map(
                        nutrition => (
                            <ListItem title="Nutrition">
                                <Left>
                                    <Text>{nutrition.title}</Text>
                                </Left>
                                <Body>
                                <Text>{nutrition.amount}{" "}{nutrition.unit}</Text>
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
