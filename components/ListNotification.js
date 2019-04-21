import React, { Component } from "react";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from "native-base";
import { TouchableOpacity } from "react-native";
export default class ListAvatar extends Component {
    render() {
        return (
            //   <TouchableOpacity
            //   onPress={
            //     () => {
            //     console.log(this.props)
            //     // this.props.navigation.navigate('../Screens/ChatMessage')
            //     navigation.navigate('ChatMessage')
            //     }
            //   }
            // >
            <List>


                <ListItem
                    avatar
                    button
                    onPress={this.props.onOpenChatMessage}
                >
                    <Left>
                        <Thumbnail
                            source={{
                                uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
                            }}
                            square
                            small
                        />
                    </Left>
                    <Body>
                        <Text>Daniel Ring</Text>
                        <Text note>liked your post</Text>
                    </Body>
                    <Right>
                        <Thumbnail
                            source={{
                                uri: "https://media.blueapron.com/recipes/2471/square_newsletter_images/1503688588-7-0035-6602/904_2PF_Salmon-Udon-Noodles_84097_WEB_SQ_hi_res.jpg"
                            }}
                            square
                            small
                        />
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
                <ListItem
                    avatar
                    button
                    onPress={this.props.onOpenChatMessage}
                >
                    <Left>
                        <Thumbnail
                            source={{
                                uri: "https://bootdey.com/img/Content/avatar/avatar4.png"
                            }}
                            square
                            small
                        />
                    </Left>
                    <Body>
                        <Text note>Oscar Ponce</Text>
                        <Text note>started following you</Text>
                    </Body>
                    <Right>
                        <Thumbnail
                            source={{
                                uri: "https://media.blueapron.com/recipes/2471/square_newsletter_images/1503688588-7-0035-6602/904_2PF_Salmon-Udon-Noodles_84097_WEB_SQ_hi_res.jpg"
                            }}
                            square
                            small
                        />
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
            </List>

            // </TouchableOpacity>
        );
    }
}
