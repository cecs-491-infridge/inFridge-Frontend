import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Body, Button, Container, Header, Content, List, ListItem, Left, Right, Thumbnail, Text, Title } from 'native-base';

import axios from 'axios';
import { testUser } from '../testUser';
const userId = testUser.userId;

import ListAvatar from '../components/ListAvatar';

class MessageScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			chats:[]
		}
	}

	async componentDidMount(){
		const { navigation } = this.props;
		this.focusListener = navigation.addListener('didFocus', this.updateChats);
	}

	updateChats = async() => {
		let ret = await axios.get(`http://school.corg.network:3000/get-chats`, {
			params:{
				id:userId,
			}
		});

		let chats = [];
		for(let i in ret.data){
			let data = ret.data[i];
			let opponent = data.user1;
			console.log(data);
			if(opponent.id == userId) opponent = data.user2;
			let msg = "", time = "";
			if(data.messages && data.messages[0]){
				msg = data.messages[0].msg;
				time = data.messages[0].time;
			}
			chats.push({
				id:opponent.id,
				name:opponent.name,
				msg,
				time
			});
		}
		this.setState({chats:chats});
	}

	componentWillUnmount(){
		this.focusListener.remove();
	}

	onOpenChatMessage = (id) => {
		this.props.navigation.navigate('ChatMessage',{id})
	}

	render() {
		return (
		<Container>
			<Header>
			<Left />
			<Body>
				<Title>Messages</Title>
			</Body>
			<Right />
			</Header>
			<Content>
			<List>
				{this.state.chats.map(msg =>
					<ListAvatar 
						id={msg.id}
						name={msg.name}
						msg={msg.msg}
						time={msg.time}
						onOpenChatMessage={() => this.onOpenChatMessage(msg.id)}/>
				)}
			</List>
			</Content>
		</Container>
		);
	}
}

export default withNavigation(MessageScreen);
