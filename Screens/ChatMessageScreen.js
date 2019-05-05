import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert, ScrollView, TextInput, FlatList } from 'react-native';
import chatSocket from '../utils/chatSocket';
import axios from 'axios';
import { connect } from 'react-redux'

import { Body, Button, Container, Header, Item, Input, Icon, Left, Right, Text, Title } from 'native-base';

class ChatMessages extends Component {

	constructor(props) {
		super(props);

		// TODO this id should be parsed from props
		let friendId = this.props.navigation.getParam('id','NOID');;
		chatSocket.bind(this,friendId);

		this.state = {
			userId:this.props.user.userId,
			friendId,
			text:"",
			data: [] 
		};
	}

	async componentDidMount(){
		console.log(this.state.userId);

		let ret = await axios.get(`http://school.corg.network:3000/get-msgs`, {
			params:{
				from:this.state.userId,
				to:this.state.friendId
			}
		});
		
		if(ret&&ret.status==200){
			let data = [];
			for(let i in ret.data){
				let msg = ret.data[i];
				data.push({
					id:data.length+1,
					date:new Date(msg.time).toLocaleTimeString(),
					type: this.state.userId===msg.from?'out':'in',
					message:msg.msg
				});
			}
			this.setState({
				data:data
			});
		}

	}

	received = (data) => {
		this.setState({
			data: this.state.data.concat([{
				id:this.state.data.length+1,
				date:new Date(data.time).toLocaleTimeString(),
				type:'in',
				message:data.msg
			}])
		});
	}


	onSend = async () => {
		let text = this.state.text;
		let time = new Date();
		if(!text||text==""){
			return;
		}
		let ret = await axios.post(`http://school.corg.network:3000/send-msg`, {
			msg:text,
			time:time,
			from:this.state.userId,
			to:this.state.friendId
		})
		if(ret.status==200){
			this.setState({
				data: this.state.data.concat([{
					id:this.state.data.length+1,
					date:time.toLocaleTimeString(),
					type:'out',
					message:text
				}])
			});
		}
	}

  renderDate = (date) => {
    return (
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  render() {

    return (
      <Container>
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate('ChatHome')}
                >
                    <Icon name='arrow-back' />
                </Button>
            </Left>

            <Body>
                <Title>Chat Message Screen</Title>
            </Body>
        </Header>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            )
          }} />
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({text})} />
          </View>

          <TouchableOpacity style={styles.btnSend} onPress={this.onSend}>
            <Image source={{ uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png" }} style={styles.iconSend} />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#eeeeee",
    borderRadius: 300,
    padding: 5,
  },
});
const mapStateToProps = (state) => {
  return {user: state.user}
};
 export default connect(mapStateToProps)(ChatMessages)
