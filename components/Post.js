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
                /* <Card title="Posts">
                    <Text>{this.props.transaction.author}</Text>
                    <Text>{this.props.transaction.body}</Text>
                    <Text>{this.props.transaction.location}</Text>
                    <Text>{this.props.transaction.tradeType}</Text>

                    <Button
                        title='Complete'
                    />
                </Card> */
                <Container>
                    <Header />
                    <Content>
                        <Card>
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
                                <Image source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYusL17_3gAhUGrp4KHU3UC1sQjRx6BAgBEAU&url=https%3A%2F%2Fwww.cnn.com%2Ftravel%2Farticle%2Fbest-hong-kong-dim-sum%2Findex.html&psig=AOvVaw1TWp8ttbzG6VgoKuOG_Xzs&ust=1552523779782034'}} style={{ height: 200, width: null, flex: 1 }} />
                                
                                <Text>{this.props.transaction.body}</Text>
                                
                                <Text>{this.props.transaction.tradeType}</Text>
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
                </Container>
        );
    }

}

export default Post;