import React from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        // implemented without image with header
        return (
            <Content >
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'Image URL' }} />
                            <Body>
                                <Text>{this.props.transaction.author}</Text>
                                <Text note>{this.props.transaction.location}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Body>
                            <Image source={{ uri: 'https://cdn.instructables.com/FNF/7PUG/IRAVYHIC/FNF7PUGIRAVYHIC.LARGE.jpg' }} style={{ height: 200, width: null, flex: 1 }} />

                            <Text>{this.props.transaction.body}</Text>

                            <Text>{this.props.transaction.tradeType}</Text>
                        </Body>

                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }

}

export default Post;