import axios from 'axios';
import { testUser } from '../testUser';
const userId = testUser.userId;

export const updateUserId = (userId) => ({
	type: 'UPDATE_USERID',
	userId
});

export const updateToken = (token) => ({
	type: 'UPDATE_TOKEN',
	token
});

export const resetUser = () =>({
	type: 'RESET_USER'
});