import SocketIO from 'socket.io-client';
import { testUser } from '../testUser';
var userId;
var chatScreens = {};
var socket;

exports.init = function(id){
	if(userId) return;
	userId = id;
	socket = SocketIO('http://school.corg.network:3003');

	socket.on('connect',()=>{
		console.log("===================socket connected with server");
		socket.emit("init",{id:userId});
	});

	socket.on('message',function(data){
		console.log(data);
		if(chatScreens[data.from])
			chatScreens[data.from].received(data);
	});
}

exports.bind = function(chatScreen,id){
	console.log("BIND================================");
	console.log(socket);
	chatScreens[id] = chatScreen;
}
