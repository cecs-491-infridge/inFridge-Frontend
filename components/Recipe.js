import React from 'react';
import { View } from 'react-native';
import { Body, Button, Card, Container, Header, Icon, Content, Left, List, ListItem, Right, Text, Separator } from 'native-base'


class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    onComponentDidMount() {
        console.log(this.props.recipe)
    }
    
    render() {
        return(
            <Content>
                <ListItem title="Recipe">
                    <Left>
                        <Text>{this.props.recipe.title}{"\n"}
                        </Text>
                    </Left>
                </ListItem>
            </Content>
        );
        }
    }
export default Recipe;