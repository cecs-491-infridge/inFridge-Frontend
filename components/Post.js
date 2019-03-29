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
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar7.png' }} />
                            <Body>
                                <Text>{this.props.transaction.author}</Text>
                                {!!this.props.transaction.location &&
                                <Text note>{this.props.transaction.location.latitude}, {this.props.transaction.location.longitude}</Text>
                                    
                                }
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                            <Image source={{ uri: 'https://media.blueapron.com/recipes/2471/square_newsletter_images/1503688588-7-0035-6602/904_2PF_Salmon-Udon-Noodles_84097_WEB_SQ_hi_res.jpg' }} 
                            style={{  
                                alignSelf: 'stretch',
                                resizeMode: 'contain',
                                marginLeft: 10,
                                width: 350,
                                height: 400}} />
                    </CardItem>                            

                    <CardItem footer>
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
                            <Text>11h</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }

}

export default Post;