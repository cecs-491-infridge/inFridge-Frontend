import React from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { testUser } from '../testUser';
const userId = testUser.userId;

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    onLike = () => {
        console.log('###########################!@#!@#!@')
        let likeList = this.props.transaction.likes;
        for(let i = 0; i < likeList.length; i++){
            const id = likeList[i];

            // User has liked post already
            // Unlike
            if(id === userId){
                console.log('-------------------------------')
                this.props.transaction.likes.splice(i);
                this.props.onLike(this.props.transaction._id, this.props.transaction);
                return;
            }
        }

        console.log('-------------------------------')
        this.props.transaction.likes.push(userId);
        this.props.onLike(this.props.transaction._id, this.props.transaction);
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
                            <Button 
                                transparent
                                onPress={this.onLike}
                            >
                                <Icon active name="thumbs-up" />
                                <Text>{this.props.transaction.likes.length} Likes</Text>
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