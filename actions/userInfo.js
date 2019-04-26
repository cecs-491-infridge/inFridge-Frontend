import axios from 'axios';
import { testUser } from '../testUser';
const userId = testUser.userId;

exports.addUserId = function(userId) => ({
	type: 'ADD_USERID',
	userId
})
