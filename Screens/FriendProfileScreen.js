import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Body, Button, Col, Container, Drawer, Grid, Header, Item, Input, Icon, Left, Right, Row, Text, Title, Content } from 'native-base';
import FriendProfile from '../components/FriendProfile';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
		this.state = {
			id:this.props.navigation.getParam('id','NOID'),
			name:this.props.navigation.getParam('name','NOID')
		}
    }

    render() {
        return (
            <Container padder>
                <FriendProfile
					id={this.state.id}
					name={this.state.name}
				></FriendProfile>
            </Container>
        );
    }
}
