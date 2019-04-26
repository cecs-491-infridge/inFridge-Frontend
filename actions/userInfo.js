import axios from 'axios';
import { testUser } from '../testUser';
const userId = testUser.userId;

export default updateUserId = (userId) => ({
	type: 'UPDATE_USERID',
	userId
});

export default updateToken = (token) => ({
	type: 'UPDATE_TOKEN',
	token
});