import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Body, Button, Container, Header, Content, List, ListItem, Left, Right, Thumbnail, Text, Title } from 'native-base';
import { connect } from 'react-redux'

import axios from 'axios';
import chatSocket from '../utils/chatSocket';

import ListAvatar from '../components/ListAvatar';

class MessageScreen extends Component {
	constructor(props){
		super(props);
		let id = this.props.user.userId;
		chatSocket.init(id);
		this.state = {
			userId:id,
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
				id:this.state.userId,
			}
		});
		console.log(ret);

		let chats = [];
		for(let i in ret.data){
			let data = ret.data[i];
			let opponent = data.user1;
			if(opponent.id == this.state.userId) opponent = data.user2;
			console.log(opponent);
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

	onOpenChatMessage = (id,name) => {
		this.props.navigation.navigate('ChatMessage',{id,name})
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
						time={this.formatAMPM(new Date(msg.time))}
						onOpenChatMessage={() => this.onOpenChatMessage(msg.id,msg.name)}/>
				)}
			</List>
			</Content>
		</Container>
		);
	}
}

const mapStateToProps = (state) => {
  return {user: state.user}
};
var tempScreen = connect(mapStateToProps)(MessageScreen)
export default withNavigation(tempScreen);
