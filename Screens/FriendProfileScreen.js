import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Body, Button, Col, Container, Drawer, Grid, Header, Item, Input, Icon, Left, Right, Row, Text, Title, Content } from 'native-base';
import FriendProfile from '../components/FriendProfile';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container padder>
                <FriendProfile></FriendProfile>
            </Container>
        );
    }
}