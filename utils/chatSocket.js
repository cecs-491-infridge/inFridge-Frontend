import SocketIO from 'socket.io-client';
import { testUser } from '../testUser';
const userId = testUser.userId;
var chatScreens = {};

var socket = SocketIO('http://school.corg.network:3003');

socket.on('connect',()=>{
	console.log("socket connected with server");
	socket.emit("init",{id:userId});
});

socket.on('message',function(data){
	if(chatScreens[data.from])
		chatScreens[data.from].received(data);
});

exports.bind = function(chatScreen,id){
	chatScreens[id] = chatScreen;
}


