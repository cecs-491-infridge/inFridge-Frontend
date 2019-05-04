import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Body, Button, Col, Container, Drawer, Grid, Header, Item, Input, Icon, Left, Right, Row, Text, Title, Content } from 'native-base';
import { withNavigation } from 'react-navigation';


class FriendProfile extends Component {
    constructor(props) {
        super(props);
    }

	onMessage = () =>{
		this.props.navigation.navigate('ChatMessage',{id:this.props.id})
	}

    render() {
        return (
            <Content>
                <Header>
                    <Left />
                    <Content>
                        <Title>{this.props.name}</Title>
                    </Content>
                    <Right />
                </Header>

                <View style={styles.header}></View>

                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar7.png' }} />

                <Grid>
                    {/* <Col style={{ backgroundColor: '#635DB7', height: 200 }}> */}
                    <Col>
                        {/* <Text style={{ textAlignVertical: "center", textAlign: "center", }} >
                            Love cooking Chinese food and baking!d
                        </Text> */}
                        <Button
                            
                            dark
                            // onPress={this.uploadImage}
                        >
                            {/* <Icon name="image" /> */}
                            <Text>Add Friend</Text>
                        </Button>
                    </Col>
                    {/* <Col style={{ backgroundColor: '#00CE9F', height: 200 }}> */}
                    <Col>
                        {/* <Text style={{ textAlignVertical: "center", textAlign: "center", }}>
                            Food Food Food
                        </Text> */}
                        <Button
                            
                            dark
                            onPress={this.onMessage}>
                            {/* <Icon name="md-create" /> */}
                            <Text>Message</Text>
                        </Button>
                    </Col>
                    {/* <Row style={{ backgroundColor: '#3498db', height: 200 }}>
                    </Row>
                    <Row style={{ backgroundColor: '#3498db', height: 200 }}>
                    </Row> */}
                </Grid>

            </Content>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#3498db",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});
export default withNavigation(FriendProfile);
