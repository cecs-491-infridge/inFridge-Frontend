import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Form, Input, Item, Label, Text, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import { testUser } from '../testUser';
const userId = testUser.userId;

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        }
    }

    onComment = () => {
        const comment = {
            postId: this.props.transaction._id,
            body: this.state.comment
        }

        this.props.onComment(this.props.transaction, comment);
        this.setState({ comment: '' });
    }

    formatAMPM = (date) => {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
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
                                <Text>{this.props.transaction.authorName}</Text>
                                <Text note>Long Beach</Text>
                                {/* {!!this.props.transaction.location &&
                                    <Text note>{this.props.transaction.location.latitude}, {this.props.transaction.location.longitude}</Text>

                                } */}
                            </Body>
                        </Left>
                        <Right>
                            <Text>{"[ "}{this.props.transaction.tradeType}{" ]"}</Text>
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        {/* 'https://media.blueapron.com/recipes/2471/square_newsletter_images/1503688588-7-0035-6602/904_2PF_Salmon-Udon-Noodles_84097_WEB_SQ_hi_res.jpg' */}
                        <Image source={{ uri: this.props.transaction.imageUrl }}
                            style={{
                                alignSelf: 'stretch',
                                resizeMode: 'contain',
                                marginLeft: 10,
                                width: 350,
                                height: 400
                            }} />
                    </CardItem>

                    <CardItem footer>
                        <Text>
                            {this.props.transaction.body}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.onLike(this.props.transaction)}
                            >
                                <Icon active name="thumbs-up" />
                                <Text>{this.props.transaction.likes.length} Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h</Text>
                        </Right>
                    </CardItem>
                    {/* COMMENTS */}
                    {
                        !!this.props.transaction.comments &&
                        !!this.props.transaction.comments.length &&
                        this.props.transaction.comments.map(comment => (
                            <CardItem>
                                <Text>
                                    <Text style={styles.userName}>
                                        {comment.authorName ? comment.authorName : 'No User'}
                                    </Text>
                                    <Text> {comment.body}</Text>
                                    <Text>  |  {this.formatAMPM(new Date(comment.createdAt))}</Text>
                                </Text>

                            </CardItem>
                        ))
                    }


                    {/* NEW COMMENT FORM*/}

                    <Item>
                        {/* <Icon small name="ios-search" /> */}
                        <Input
                            placeholder="Add a comment..."
                            onChangeText={comment => this.setState({ comment })}
                            value={this.state.comment}
                        />
                        <Right>
                            <Button
                                small

                                iconLeft
                                rounded
                                onPress={this.onComment}
                            >
                                <Text>Post</Text>
                            </Button>
                        </Right>
                    </Item>
                </Card>

            </Content>
        );
    }

}

export default Post;


const styles = StyleSheet.create({
    userName: {
        fontWeight: 'bold',
    },
});
