import React from 'react';
import { View } from 'react-native';
import { Body, Button, Card, Container, Header, Icon, Content, Left, List, ListItem, Right, Text, Separator } from 'native-base'


class ProfileFood extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteFood = (e) => {
        const id = this.props.food._id;

        this.props.onDelete(id);
    }

    render() {
        // implemented without image with header
        return (
            <Content>
                <ListItem title="Food">
                    <Left>
                        <Text>{this.props.food.name}{"\n"}
                            {
                                !!this.props.food.expirationDate &&
                                <Text>{new Date(this.props.food.expirationDate).toLocaleString()}</Text>
                            }
                        </Text>
                    </Left>
                    <Right>
                        {/* <Button
                            bordered
                            danger
                            onPress={this.deleteFood}>
                            <Icon name='trash'/>
                        </Button> */}
                    </Right>

                </ListItem>

            </Content>
        );
    }

}

export default ProfileFood;